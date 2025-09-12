# Stage 1: build
FROM node:20-alpine AS build
WORKDIR /app

# Actualizar npm
RUN npm install -g npm@11.6.0

# Copiar package.json y lock
COPY package*.json ./

# Instalar TODAS las dependencias (incluyendo dev)
RUN npm install --legacy-peer-deps

# Copiar el código fuente
COPY . .

# Compilar la app
RUN npm run build

# Stage 2: runtime
FROM node:20-alpine
WORKDIR /app

# Copiar solo lo necesario para runtime
COPY --from=build /app/dist ./dist
COPY --from=build /app/package.json ./package.json

# Instalar solo dependencias de producción
RUN npm install --omit=dev --legacy-peer-deps

EXPOSE 3000
CMD ["node", "dist/main.js"]
