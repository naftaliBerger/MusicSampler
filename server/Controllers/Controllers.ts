import { getUrls } from "../DB/supabase.ts";
import express from "express";
import redis from "../Config/redisClient.ts";
type Request = express.Request;
type Response = express.Response;
export async function getMusic(req: Request, res: Response) {
  try {
    const { folder } = req.params;
    if (!folder) {
      return res.status(400).send("Invalid Folder");
    }

    const cached = await redis.get(folder); 
    if (cached) {
      return res.json(JSON.parse(cached));
    }

    const urls = await getUrls(folder);

    await redis.set(folder, JSON.stringify({ urls }), { EX: 2592000 });

    res.json({ urls });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch music URLs" });
  }
}
