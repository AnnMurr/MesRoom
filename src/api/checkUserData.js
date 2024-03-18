const env = require("dotenv");
env.config();

export const checkUserName = async (roomId, userName) => {
  try {
    const response = await fetch(`${process.env.MAIN_FULL_URL}:${process.env.PORT}/check-userName`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        roomId: roomId,
        userName: userName,
      }),
    });

    if (!response.ok) throw new Error("Failed to check user name");

    const data = await response.json();
    return data.isUserName;
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
};

export const checkUserIcon = async (roomId, userEmoji) => {
  try {
    const response = await fetch(`${process.env.MAIN_FULL_URL}:${process.env.PORT}/check-userEmoji`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        roomId: roomId,
        userEmoji: userEmoji,
      }),
    });

    if (!response.ok) throw new Error("Failed to check user emoji");

    const data = await response.json();
    return data.isUserEmoji;
  } catch (error) {
    console.error("Failed to fetch:", error);
  }
};
