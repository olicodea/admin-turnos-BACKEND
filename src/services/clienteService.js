import { connection } from "../database/connection.js";

export const listarClientes = () => {
    const sql = `SELECT id, nombre, apellido, telefono FROM Cliente`;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, result) {
            if (error) {
                reject(error);
            }
            resolve(result);
        });
    });
};

export const crearCliente = (cliente) => {
    const sql = 
        `INSERT INTO Cliente VALUES (null, "${cliente.nombre}", "${cliente.apellido}", "${cliente.telefono}")`;
    return new Promise((resolve, reject) => {
        connection.query(sql, function (error, result) {
            if (error) {
                reject(error);
            }
            resolve(result.insertId);
        });
    });
};

export const buscarClientePorId = (id) => {
    const sql = `SELECT id, nombre, apellido, telefono FROM Cliente WHERE id = ${id}`
    return new Promise((resolve, reject) => {
        connection.query(sql, function(error, result){
            if(error){
                reject(error)
            }
            resolve(result[0])
        })
    })
}
