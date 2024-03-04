const { v4: uuidv4 } = require("uuid");
const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 1234;

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
  const link = `http://localhost:3000/#room/${roomId}`;
  if (!rooms.has(roomId)) {
    rooms.set(roomId, new Map([
        ["users", []],
        ["messages", []],
    ]));
    res.status(200).json({ link });
  }
});

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", ({ roomId, userName }) => {
    socket.join(roomId);

    if (rooms.has(roomId)) {
        const users = rooms.get(roomId).get("users");
        if (!users.includes(userName)) {
            rooms.get(roomId).get("users").push(userName);
        }

        io.to(roomId).emit("usersOnline", users);
      }
  });

  socket.on("ROOM:LEAVE", ({ roomId, userName }) => {
    if (rooms.has(roomId)) {
        const users = rooms.get(roomId).get("users");
        const updateUsers = users.filter(name => name !== userName)
        rooms.get(roomId).set("users", updateUsers)
        io.to(roomId).emit("usersOnline", updateUsers);
    }

  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
