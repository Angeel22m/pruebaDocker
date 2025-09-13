
# 🚀 Proyecto con Docker Desktop (Windows)

Este proyecto contiene un **frontend**, un **backend** y una **base de datos PostgreSQL**, todo orquestado con **Docker Compose**.  
Solo necesitas tener instalado **Docker Desktop para Windows**.

---

## 📋 Requisitos previos

- [Docker Desktop](https://www.docker.com/products/docker-desktop) instalado y en ejecución  
- Git (opcional, si deseas clonar el repositorio)

Verifica la instalación ejecutando en **PowerShell** o **CMD**:

```bash
docker -v
docker compose version
````

---

## ▶️ Pasos para ejecutar la aplicación

1. Clonar el repositorio o descargar el código:

   ```bash
   git clone https://github.com/usuario/proyecto.git
   cd proyecto
   ```

2. Levantar la aplicación con Docker Compose:

   ```bash
   docker compose up
   ```

   > 🔹 Este comando construirá las imágenes y levantará los contenedores del **frontend**, **backend** y **base de datos**.

3. (Opcional) Ejecutar en segundo plano:

   ```bash
   docker compose up -d
   ```

4. Para detener la aplicación:

   ```bash
   docker compose down
   ```

---

## 🌐 Acceso a la aplicación

* **Frontend (Angular/React/Vue, según tu proyecto)**
  👉 [http://localhost:8080](http://localhost:8080)

* **Backend (API)**
  👉 [http://localhost:3000](http://localhost:3000)

* **Base de datos PostgreSQL**
  👉 Host: `localhost`
  👉 Puerto: `5433`
  👉 Usuario: `proyecto_user`
  👉 Password: `12345678`
  👉 DB: `proyecto_db`

---

## 🛠️ Comandos útiles

* Ver logs de los contenedores:

  ```bash
  docker compose logs -f
  ```

* Reconstruir las imágenes:

  ```bash
  docker compose up --build
  ```

* Eliminar contenedores, redes e imágenes asociadas:

  ```bash
  docker compose down --volumes --rmi all
  ```

---

## 📂 Estructura del proyecto

```
proyecto/
│
├─ backend/          # Código del backend + Dockerfile
├─ frontend/         # Código del frontend + Dockerfile
├─ docker-compose.yml
└─ README.md
```

---

## ✅ Notas

* No necesitas instalar Node, Postgres ni dependencias en tu máquina.
* Todo corre dentro de los contenedores.
* Si cambias el código del backend/frontend, recuerda reconstruir:

  ```bash
  docker compose up --build
  ```

```

