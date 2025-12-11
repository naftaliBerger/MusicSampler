import { createClient } from "redis";

const redisClient = createClient({
  socket: {
    host: process.env.REDIS_HOST,
    port: Number(process.env.REDIS_PORT)
  },
  username: process.env.REDIS_USER,
  password: process.env.REDIS_PASSWORD
});

redisClient.on("error", (err) => console.error("Redis error:", err));

await redisClient.connect();

export default redisClient;
