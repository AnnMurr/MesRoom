import io from "socket.io-client";

export const socket = io(`${process.env.MAIN_FULL_URL}:${process.env.PORT}`);