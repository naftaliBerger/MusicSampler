import express from "express";
import {getMusic} from "../Controllers/Controllers.ts"

const router = express.Router()

router.get("/music/:folder",getMusic)

export default router;