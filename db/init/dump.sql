-- ==========================================
-- Base de datos de prueba: odontología
-- Tablas: pacientes, odontologos, tratamientos, citas
-- Datos de prueba incluidos
-- ==========================================

-- =========================
-- TABLA: pacientes
-- =========================
CREATE TABLE pacientes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    fecha_nacimiento DATE,
    telefono VARCHAR(20)
);

INSERT INTO pacientes (nombre, apellido, fecha_nacimiento, telefono)
VALUES 
('Juan', 'Perez', '1990-05-15', '555-1234'),
('Ana', 'Gomez', '1985-10-20', '555-5678'),
('Carlos', 'Lopez', '1992-07-10', '555-9012'),
('Maria', 'Diaz', '1988-12-05', '555-3456');

-- =========================
-- TABLA: odontologos
-- =========================
CREATE TABLE odontologos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    especialidad VARCHAR(50)
);

INSERT INTO odontologos (nombre, especialidad)
VALUES
('Dr. Luis Martinez', 'Ortodoncia'),
('Dra. Carla Lopez', 'Endodoncia'),
('Dr. Pedro Sanchez', 'Odontopediatría');

-- =========================
-- TABLA: tratamientos
-- =========================
CREATE TABLE tratamientos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    precio DECIMAL(10,2)
);

INSERT INTO tratamientos (nombre, precio)
VALUES
('Limpieza dental', 50.00),
('Empaste', 80.00),
('Ortodoncia', 1200.00),
('Extracción', 150.00),
('Blanqueamiento', 200.00);

-- =========================
-- TABLA: citas
-- =========================
CREATE TABLE citas (
    id SERIAL PRIMARY KEY,
    paciente_id INT REFERENCES pacientes(id),
    odontologo_id INT REFERENCES odontologos(id),
    tratamiento_id INT REFERENCES tratamientos(id),
    fecha TIMESTAMP NOT NULL,
    notas TEXT
);

INSERT INTO citas (paciente_id, odontologo_id, tratamiento_id, fecha, notas)
VALUES
(1, 1, 1, '2025-09-15 10:00:00', 'Primera cita de limpieza'),
(2, 2, 2, '2025-09-16 14:00:00', 'Empaste de molares'),
(3, 3, 4, '2025-09-17 09:30:00', 'Extracción de muela'),
(4, 1, 5, '2025-09-18 11:00:00', 'Blanqueamiento dental');
