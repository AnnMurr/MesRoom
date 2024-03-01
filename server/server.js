const { v4: uuidv4 }  = require('uuid')
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 1234;

app.use(express.json());
app.use(cors())

const rooms = new Map()

app.post('/room', (req, res) => {
    const roomId = uuidv4();
    const link = `http://localhost:3000/#room/${roomId}`;
    rooms.set(roomId, {users: []})
    res.status(200).json({ link });
})

app.post('/room/:id', (req, res) => {
    const id = req.params.id
    const userName = req.body.name

    if(rooms.has(id)) {
        rooms.get(id).users.push(userName)
    }

    res.send()
})

app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
});
