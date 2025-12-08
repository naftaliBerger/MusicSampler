import { getSignedUrlsFromFolder } from "../DB/supabase.ts";
import express from "express";
type Request = express.Request;
type Response = express.Response;
export async function getMusic(req: Request, res: Response) {
  try {
    const {Folder} = req.params;
    if (!Folder) {
      return res.status(400).send("Invalid Folder");
    }
    const urls = await getSignedUrlsFromFolder(Folder);
    res.json({ urls });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to fetch music URLs" });
  }
}
