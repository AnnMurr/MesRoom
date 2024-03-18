import io from "socket.io-client";
const env = require("dotenv");
env.config();

export const socket = io(`${process.env.MAIN_FULL_URL}:${process.env.PORT}`);