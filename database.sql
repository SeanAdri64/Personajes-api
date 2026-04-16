CREATE DATABASE characters_db;

USE characters_db;

CREATE TABLE characters (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    identification VARCHAR(100),
    image TEXT,
    role VARCHAR(255),
    description TEXT,
    created_at DATETIME
);



INSERT INTO characters (name, identification, image, role, description, created_at) VALUES
('Mark Grayson', 'INV-001', 'https://upload.wikimedia.org/wikipedia/en/8/8f/Invincible_%28TV_series%29.png',
 'Héroe', 'Hijo de Omni-Man, desarrolla poderes y se convierte en Invincible.', NOW()),

('Omni-Man', 'INV-002', 'https://static.wikia.nocookie.net/image.png',
 'Antihéroe', 'Viltrumita enviado a la Tierra con un oscuro propósito.', NOW()),

('Atom Eve', 'INV-003', 'https://static.wikia.nocookie.net/eve.png',
 'Heroína', 'Controla la materia a nivel molecular.', NOW()),

('Robot', 'INV-004', 'https://static.wikia.nocookie.net/robot.png',
 'Estratega', 'Genio líder del equipo con identidad secreta.', NOW());