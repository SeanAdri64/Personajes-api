                    Nombre del proyecto

Character Manager – Invincible App

Descripción:

Aplicación fullstack para la gestión de personajes de una serie (en este caso Invincible), que permite crear, consultar, editar y eliminar personajes mediante una API REST desarrollada en Spring Boot y un frontend en React.

Tecnologías utilizadas
Backend
Java 17
Spring Boot
Spring Data JPA
MySQL
Cache (@Cacheable)
Frontend
React (Vite)
Bootstrap
Axios
React Toastify

Funcionalidades
Crear personajes
Listar personajes
Ordenar por nombre o fecha
Editar personajes
Eliminar personajes
Visualización en modal
Validación de formulario
Notificaciones visuales (toast)
                       Uso del Backend
--Script de SQL
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




2. Colección Postman (ejemplo endpoints)
GET /api/characters?sortBy=name
POST /api/characters
PUT /api/characters/{id}
DELETE /api/characters/{id}


--ENDPOINTS:
Base:
http://localhost:8080/api/characters

Crear personaje:
curl -X POST http://localhost:8080/api/characters \
-H "Content-Type: application/json" \
-d '{
  "name": "Cecil Stedman",
  "identification": "14",
  "image": "https://static.wikia.nocookie.net/amazon-invincible/images/f/f1/CecilProfile.png/revision/latest?cb=20250812171717",
  "role": "Antihéroe",
  "description": "Es un escudo para la humanidad ,aunque sus métodos son poco ortodoxos."
}'

Obtener personajes:
curl http://localhost:8080/api/characters

Obtener por nombre: 
curl http://localhost:8080/api/characters?sortBy=name

Actualizar :
curl -X PUT http://localhost:8080/api/characters/1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Oliver Grayson",
  "role": "Antihéroe",
  "description": "Es el hermano menor de Mark ,también conocido como Omni kid.",
  "image": "https://static.wikia.nocookie.net/p__/images/0/08/Image_5052.webp/revision/latest/scale-to-width/360?cb=20220806024156&path-prefix=protagonist"
}'

Eliminar: 
curl -X DELETE http://localhost:8080/api/characters/1





                        Uso del Frontend
1. Instalar react
2. npm install
3. npm install react-toastify
4. 
5. npm run dev
6. Acceder a :  http://localhost:5173



                    Arquitectura
 Diagrama de Contexto

Sistema compuesto por:

Usuario (Frontend React)
API REST (Spring Boot)
Base de datos (MySQL)

Flujo:
Usuario → Frontend → API → Base de Datos



                        Modelo Entidad-Relación

Entidad principal y unica:

Character

id (PK)
name
identification
image
role
description
created_at


                    Diagrama de Clases
Backend
Character (Entidad)
CharacterRepository (JPA)
CharacterService (Lógica)
CharacterController (API REST)

Relaciones:
Controller → Service → Repository → DB


                    Flujo de datos
Usuario interactúa con React
React usa Axios
API procesa petición
Base de datos responde
UI se actualiza



                    Decisiones técnicas
Uso de React + Vite por rapidez
Bootstrap para UI rápida y responsiva
Toastify para UX moderna
Cache en backend para optimización
Arquitectura en capas (Controller-Service-Repository)



                    Validaciones implementadas
Campos obligatorios
Validación de URL en imagen
Feedback visual con Bootstrap
Notificaciones y alertas con Toast


                    Posibles mejoras
Autenticación (JWT)
Paginación
Subida de imágenes
Deploy (Render / Vercel)
Tests unitarios

Autor:
Sean Adrian Richard Vargas Cantor


Video tutorial:
https://screenrec.com/share/1dKZ9MyxWR