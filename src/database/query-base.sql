# CREAR LA BASE DE DATOS PELUQUERIA

#CREATE DATABASE IF NOT EXISTS peluqueria;

USE peluqueria;

# CREAR TABLA CLIENTE
CREATE TABLE Cliente(
	id INT(6) PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(10) NOT NULL,
    apellido VARCHAR(10) NOT NULL,
    telefono VARCHAR(20) NOT NULL
);

# CREAR TABLA Estado - (Seran "Registrado", "Cancelado", "Realizado")
CREATE TABLE Estado(
	id INT(6) PRIMARY KEY AUTO_INCREMENT,
    descripcion VARCHAR(20) NOT NULL
);

# CREAR TABLA TURNO
CREATE TABLE Turno (
	id INT(6) PRIMARY KEY AUTO_INCREMENT,
	fecha VARCHAR(10) NOT NULL,
    hora VARCHAR(10) NOT NULL,
    idCliente INT NOT NULL,
    idEstado INT NOT NULL,
    FOREIGN KEY (idCliente) REFERENCES Cliente(id),
    FOREIGN KEY (idEstado) REFERENCES Estado(id)
);

#CREAR CLIENTES
INSERT INTO Cliente VALUES (null, "Juan", "Oliva", "21321321"),
	(null, "Guido", "Carda", "6576512"),
    (null, "Gni", "zah", "54354323");
    
#LISTAR CLIENTES
SELECT id, nombre, apellido, telefono FROM Cliente;

#BUSCAR CLIENTE POR ID
SELECT id, nombre, apellido, telefono FROM Cliente WHERE id = 10;

#CREAR ESTADOS
INSERT INTO Estado VALUES
(null, "REGISTRADO"),
(null, "REALIZADO"),
(null, "CANCELADO");

#LISTAR ESTADOS
SELECT * FROM Estado;

# CREAR TURNOS
INSERT INTO Turno VALUES 
(null, "07-05-2022", "13:00", 1, 2),
(null, "15-11-2022", "15:00", 2, 2),
(null, "30-11-2022", "12:30", 3, 3);

# LISTAR TURNOS
SELECT id, fecha, hora, idCliente, idEstado FROM Turno;
