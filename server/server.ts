import express from "express";
// import Router from "./routers/taskRoute.ts";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());
// app.use("/", Router);
app.use(express.static("sounds"))
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
