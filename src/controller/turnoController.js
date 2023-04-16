import * as turnoService from "../services/turnoService.js";

export const listarTurnos = async (req, res) => {
    try {
        const turnos = await turnoService.listarTurnos();
        res.send({ status: "OK", data: turnos });
    } catch (error) {
        res.send({ status: "ERROR", message: error.message });
    }
};

export const crearTurno = async (req, res) => {
    try {
        const turnoCreadoId = await turnoService.crearTurno(req.body);
        res.send({ status: "OK", idCreado: turnoCreadoId });
    } catch (error) {
        res.send({ status: "ERROR", message: error.message });
    }
};

export const buscarTurnoPorId = async (req, res) => {
    try {
        const turno = await turnoService.buscarTurnoPorId(req.params.idTurno);
        res.send({ status: "OK", data: turno });
    } catch (error) {
        res.send({ status: "ERROR", message: error.message });
    }
};

export const listarTurnosPorClienteId = async (req, res) => {
    try {
        const turnos = await turnoService.listarTurnosPorClienteId(req.params.id);
        res.send({status: "OK", data: turnos});
    } catch (error) {
        res.send({status: "ERROR", message: error.message})
    }
}