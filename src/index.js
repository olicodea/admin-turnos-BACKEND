import express, { json } from "express";
import dotenv from "dotenv";
import cors from "cors";
import { router } from "./routes/routes.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Servidor funcionando en el puerto: ${PORT}`);
});

app.use("/api/peluqueria", router);
