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
('Mark Grayson', 'INV-001', 'https://upload.wikimedia.org/wikipedia/en/8/8f/Invincible_%28TV_series%29.png',
 'Héroe', 'Hijo de Omni-Man, desarrolla poderes y se convierte en Invincible.', NOW()),

('Omni-Man', 'INV-002', 'https://static.wikia.nocookie.net/image.png',
 'Antihéroe', 'Viltrumita enviado a la Tierra con un oscuro propósito.', NOW()),

('Atom Eve', 'INV-003', 'https://static.wikia.nocookie.net/eve.png',
 'Heroína', 'Controla la materia a nivel molecular.', NOW()),

('Robot', 'INV-004', 'https://static.wikia.nocookie.net/robot.png',
 'Estratega', 'Genio líder del equipo con identidad secreta.', NOW());




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
  "name": "Nuevo personaje",
  "identification": "INV-005",
  "image": "https://url.com",
  "role": "Héroe",
  "description": "Descripción del personaje"
}'

Obtener personajes:
curl http://localhost:8080/api/characters

Obtener por nombre: 
curl http://localhost:8080/api/characters?sortBy=name

Actualizar :
curl -X PUT http://localhost:8080/api/characters/1 \
-H "Content-Type: application/json" \
-d '{
  "name": "Nombre actualizado",
  "role": "Nuevo rol",
  "description": "Nueva descripción",
  "image": "https://nueva-url.com"
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