import express from "express";
import * as turnoController from "../controller/turnoController.js";
import * as clienteController from "../controller/clienteController.js";

const router = express.Router();

// Rutas Cliente
router
    .get("/clientes", clienteController.listarClientes)
    .post("/clientes", clienteController.crearCliente)
    .get("/clientes/:id", clienteController.buscarClientePorId)
    .put("/clientes/:id", clienteController.modificarCliente)

// Rutas Turno 
router
    .get("/", turnoController.listarTurnos)
    .get("/turnos", turnoController.listarTurnos)
    .get("/turnos/:id", turnoController.buscarTurnoPorId)
    .get("/turnosCliente/:id", turnoController.listarTurnosPorClienteId)
    .post("/turno", turnoController.crearTurno)
export { router };
