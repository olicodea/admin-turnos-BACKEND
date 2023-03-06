import express from "express";
import * as turnoController from "../controller/turnoController.js";

const router = express.Router();

router
    .get("/", turnoController.listarTurnos)
    .get("/:idTurno", turnoController.buscarTurnoPorId)
    .post("/", turnoController.crearTurno)

export { router };
