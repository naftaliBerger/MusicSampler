import express from "express";
import {getMusic} from "../Controllers/Controllers.ts"

const router = express.Router()

router.get("/music/:Folder",getMusic)

export default router;