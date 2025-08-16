import { StreamChat } from "stream-chat";
import "dotenv/config.js";

const apiKey = process.env.STREAM_API_KEY;
const apiSecret = process.env.STREAM_API_SECRET;

if (!apiKey || !apiSecret) {
  throw new Error("STREAM_API_KEY and STREAM_API_SECRET missing");
}

const streamClient = StreamChat.getInstance(apiKey, apiSecret);

//upsert = create
export const upsertStreamUser = async (userData) => {
  try {
    await streamClient.upsertUsers([userData]);
    console.log(
      "Stream user upserted successfully:",
      userData.name || userData.id
    );
    return userData;
  } catch (error) {
    console.error("Error upserting Stream user:", error);
    throw error;
  }
};

export const generateStreamToken = (userId) => {};
