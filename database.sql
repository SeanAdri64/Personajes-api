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
('Mark Grayson', 'INV-001', 'https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2025/02/INVI_S3_First_Look6_3000-scaled.jpg?fit=2560%2C1440&quality=70&strip=all&ssl=1',
 'Héroe', 'Hijo de Omni-Man, desarrolla poderes y se convierte en Invincible. Es el más poderoso en su mente ,no en la realidad.No le hace honor a su nombre.', NOW()),

('Omni-Man', 'INV-002', 'https://static.wikia.nocookie.net/invincible/images/4/4d/Nolan_Grayson.png/revision/latest/thumbnail/width/360/height/360?cb=20201024151929&path-prefix=es',
 'Antihéroe', 'Viltrumita enviado a la Tierra con un oscuro propósito.', NOW()),

('Atom Eve', 'INV-003', 'https://static.wikia.nocookie.net/invincible/images/4/49/Samantha_Eve_Wilkins.png/revision/latest?cb=20250902170544&path-prefix=es',
 'Heroína', 'Controla la materia a nivel molecular.La pareja de Mark y una de las heroínas mas poderosas del planeta Tierra, puede crear y regenerar cosas, incluso a ella misma si esta al borde de la muerte.', NOW()),

('Robot', 'INV-004', 'https://static.wikia.nocookie.net/characterprofile/images/9/91/Robot_%28Invincible%29_render.webp/revision/latest?cb=20231123190629',
 'Estratega', 'Genio líder del equipo los Guardianes del globo, parodia de iron man .', NOW());