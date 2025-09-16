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
    apellido VARCHAR(100) NOT NULL
);

INSERT INTO pacientes (nombre, apellido)
VALUES 
('Juan', 'Perez'),
('Ana', 'Gomez'),
('Carlos', 'Lopez'),
('Maria', 'Diaz',);
