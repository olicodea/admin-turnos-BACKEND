import { connection } from "../database/connection.js";

export const listarTurnos = () => {
    const sql = `SELECT id, fecha, hora, idCliente, idEstado FROM Turno`;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, result) {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
};

export const crearTurno = (turno) => {
    const sql = `INSERT INTO Turno VALUES (null, "${turno.fecha}", "${turno.hora}", "${turno.idCliente}", "${turno.idEstado}")`;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, result) {
            if (error) {
                reject(error);
            }
            resolve(result.insertId);
        });
    });
};

export const buscarTurnoPorId = (id) => {
    const sql = `
        SELECT id, fecha, hora, idCliente, idEstado FROM Turno
        WHERE id = ${id}
    `;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, result) {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
};
