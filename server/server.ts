import express from "express";
import cors from "cors";
import lloger from "./Utils/Logger.ts"
import router from "./Routers/Route.ts";
import { config } from "dotenv";
config();
const app = express();

app.use(express.json());
app.use(cors());
app.use(lloger)
app.use("/", router);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
