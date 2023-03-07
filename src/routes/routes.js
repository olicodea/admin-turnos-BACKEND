import express from "express";
import * as turnoController from "../controller/turnoController.js";
import * as clienteController from "../controller/clienteController.js";

const router = express.Router();

router
    .get("/clientes", clienteController.listarClientes)
    .post("/clientes", clienteController.crearCliente)
    .get("/clientes/:id", clienteController.buscarClientePorId)
    .get("/", turnoController.listarTurnos)
    .get("/turnos", turnoController.listarTurnos)
    .get("/turnos/:id", turnoController.buscarTurnoPorId)
    .post("/turno", turnoController.crearTurno);

export { router };
