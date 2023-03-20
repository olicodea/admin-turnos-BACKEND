import * as clienteService from "../services/clienteService.js";

export const listarClientes = async (req, res) => {
    try {
        const clientes = await clienteService.listarClientes();
        res.status(200).json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const crearCliente = async (req, res) => {
    try {
        const clienteId = await clienteService.crearCliente(req.body);
        res.status(201).json({ id: clienteId });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const buscarClientePorId = async (req, res) => {
    try {
        const cliente = await clienteService.buscarClientePorId(req.params.id);
        res.status(200).json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};

export const modificarCliente = async (req, res) => {
    try {
        const cliente = await clienteService.modificarCliente(req.body);
        res.status(200).json(cliente);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
};
