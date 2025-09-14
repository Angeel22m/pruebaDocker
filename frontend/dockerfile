# Stage 1: build
FROM node:20-alpine AS build
WORKDIR /app

# Actualizar npm
RUN npm install -g npm@11.6.0

# Copiar solo package.json para instalar dependencias
COPY package*.json ./
RUN npm install --legacy-peer-deps

# Copiar solo el código fuente
COPY . .

# Construir la app
RUN npm run build

# Stage 2: runtime Nginx
FROM nginx:alpine
# Copiar solo la carpeta de build final
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
