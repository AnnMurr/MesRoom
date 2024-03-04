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
    rooms.set(roomId, { users: [] });
    res.status(200).json({ link });
  }
});

app.post("/room/:id", (req, res) => {
  const id = req.params.id;
  const userName = req.body.name;

  if (rooms.has(id)) {
    const room = rooms.get(id);
    if (!room.users.includes(userName)) {
      room.users.push(userName);
    }
  }

  res.send();
});

io.on("connection", (socket) => {
  socket.on("ROOM:JOIN", ({ roomId, userName }) => {
    socket.join(roomId);

    if (rooms.has(roomId)) {
        const room = rooms.get(roomId);
        if (!room.users.includes(userName)) {
          room.users.push(userName);
        }

        io.to(roomId).emit("usersOnline", room.users);
      }
  });

  socket.on("ROOM:LEAVE", ({ roomId, userName }) => {
    const room = rooms.get(roomId);
    room.users = room.users.filter(name => name !== userName)
    io.to(roomId).emit("usersOnline", room.users);
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected");
  });
});

server.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});
