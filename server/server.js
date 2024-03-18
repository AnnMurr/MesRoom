const { v4: uuidv4 } = require("uuid");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 1234;

const server = require("http").Server(app);
const io = require("socket.io")(server, {
  cors: {
    origin: "*",
  },
});

app.use(express.json());
app.use(cors());

const rooms = new Map();

app.post("/room", (req, res) => {
  const roomId = uuidv4();
  const link = `${process.env.MAIN_FULL_URL}/#room/${roomId}.com`;

  if (!rooms.has(roomId)) {
    rooms.set(
      roomId,
      new Map([
        ["users", []],
        ["messages", []],
      ])
    );
    res.status(200).json({ link });
  }
});

app.post("/check-userName", (req, res) => {
  const { roomId, userName } = req.body;
  let isUserName = false;

  if (rooms.has(roomId)) {
    if (
      rooms
        .get(roomId)
        .get("users")
        .findIndex(
          (data) => data.name.toLowerCase() === userName.toLowerCase()
        ) !== -1
    ) {
      isUserName = true;
    }
  }

  res.status(200).json({ isUserName });
});

app.post("/check-userEmoji", (req, res) => {
  const { roomId, userEmoji } = req.body;
  let isUserEmoji = false;

  if (rooms.has(roomId)) {
    if (
      rooms
        .get(roomId)
        .get("users")
        .findIndex((data) => data.icon === userEmoji) !== -1
    ) {
      isUserEmoji = true;
    }
  }

  res.status(200).json({ isUserEmoji });
});

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", ({ roomId, userName }) => {
    socket.join(roomId);
    userName.name =
      userName.name.charAt(0).toUpperCase() +
      userName.name.slice(1, userName.length);

    if (rooms.has(roomId)) {
      const users = rooms.get(roomId).get("users");
      const messages = rooms.get(roomId).get("messages");

      if (
        users.findIndex(
          (userData) =>
            userData.name.toLowerCase() === userName.name.toLowerCase()
        ) === -1
      ) {
        rooms.get(roomId).get("users").push(userName);
      }

      io.to(roomId).emit("usersOnline", users);
      io.to(roomId).emit("chatMessages", messages);
    }
  });

  socket.on("ROOM:LEAVE", ({ roomId, userName }) => {
    if (rooms.has(roomId)) {
      const users = rooms.get(roomId).get("users");
      const updateUsers = users.filter(
        (userData) =>
          userData.name.toLowerCase() !== userName.name.toLowerCase()
      );
      rooms.get(roomId).set("users", updateUsers);
      io.to(roomId).emit("usersOnline", updateUsers);
    }
  });

  socket.on("SEND_MESSAGE", ({ roomId, message }) => {
    if (rooms.has(roomId)) {
      const messages = rooms.get(roomId).get("messages");
      rooms.get(roomId).get("messages").push(message);
      io.to(roomId).emit("chatMessages", messages);
    }
  });

  socket.on("CHANGE-USERICON", ({ id, name, newEmoji }) => {
    const users = rooms.has(id) && rooms.get(id).get("users");

    if (rooms.has(id)) {
      const user = users.find(
        (user) => user.name.toLowerCase() === name.toLowerCase()
      );
      user.icon = newEmoji;
    }

    io.to(id).emit("CHANGED-USERDATA", users);
  });

  socket.on("DELETE_MESSAGE", ({ messageId, roomId }) => {
    if (rooms.has(roomId)) {
      const messages = rooms.get(roomId).get("messages");
      const updatedMessages = messages.filter(
        (messageData) => messageData.id !== messageId
      );
      rooms.get(roomId).set("messages", updatedMessages);

      io.to(roomId).emit("changed-messages", updatedMessages);
    }
  });

  socket.on("EDIT_MESSAGE", ({ roomId, messageId, editedMessage }) => {
    const messages = rooms.get(roomId).get("messages");

    messages.forEach((messageData) => {
      if (messageData.id === messageId) {
        messageData.text = editedMessage;
      }
    });

    io.to(roomId).emit("changed-messages", messages);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
