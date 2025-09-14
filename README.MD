
---

# ProyectoIngenieria

Este proyecto contiene una aplicación completa con **frontend**, **backend** y **base de datos PostgreSQL**, dockerizada para facilidad de despliegue y desarrollo.

---

## 📂 Estructura del proyecto

```
proyectoIngenieria/
├─ frontend/         # Código del frontend (React+vite)
│  ├─ dockerfile
│  ├─ package.json
│  └─ src/
├─ backend/          # Código del backend (Node/Nestjs)
│  ├─ dockerfile
│  ├─ package.json
│  └─ src/
├─ docker-compose.yml
└─ .github/workflows/
   └─ docker-compose-build.yml  # GitHub Actions para CI/CD
```

---

## 🐳 Requisitos

* Docker ≥ 20.10
* Docker Compose ≥ 1.29
* Cuenta en Docker Hub (para subir/traer imágenes)
* Git (para clonar el proyecto)

---

## ⚡ Configuración

1. Clonar el proyecto:

```bash
git clone <URL_DEL_REPO>
cd proyectoIngenieria
```

2. Configurar variables de entorno (opcional, si no quieres dejar passwords en el compose):

```bash
cp .env.example .env
```

* `.env` puede contener:

```
POSTGRES_USER=proyecto_user
POSTGRES_PASSWORD=12345678
POSTGRES_DB=proyecto_db
```

---

## 🚀 Levantar la aplicación

### Opción 1: Usando imágenes desde Docker Hub

```bash
docker-compose pull
docker-compose up -d
```

* Frontend: [http://localhost:8080](http://localhost:8080)
* Backend: [http://localhost:3000](http://localhost:3000)
* Base de datos PostgreSQL: puerto 5433

### Opción 2: Construir localmente con Docker Compose

```bash
docker-compose build
docker-compose up -d
```

---

## 🏗 GitHub Actions / CI-CD

El proyecto incluye un workflow que **construye y sube las imágenes a Docker Hub**:

* Archivo: `.github/workflows/docker-compose-build.yml`
* Lo que hace:

  * Construye la imagen del **backend** y **frontend**.
  * Sube las imágenes a Docker Hub con tres tags:

    * `latest`
    * `${{ github.ref_name }}` → rama
    * `${{ github.sha }}` → commit

---

## 🔧 Comandos útiles

* Ver contenedores corriendo:

```bash
docker ps
```

* Ver imágenes locales:

```bash
docker images
```

* Parar y eliminar contenedores, redes y volúmenes:

```bash
docker compose down --remove-orphans
```

* Limpiar todo lo que no se use:

```bash
docker system prune -f
docker volume prune -f
```

---

## 📝 Notas importantes

* Se recomienda usar **.env** para contraseñas y datos sensibles.
* Healthchecks y persistencia de volúmenes están configurados para que la app sea estable.
* Puedes modificar los puertos en `docker-compose.yml` según tu necesidad.
* El workflow de GitHub Actions requiere los **secrets**:

  * `DOCKER_USERNAME` → Usuario de Docker Hub
  * `DOCKER_PASSWORD` → Access Token de Docker Hub

---
