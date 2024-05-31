# Utilisez une version récente et stable de Node.js sur Alpine pour minimiser la taille de l'image
FROM node:18.17.0-alpine as builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers de dépendances
COPY package.json package-lock.json ./

# Installer les dépendances
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application
RUN npm run build

# Préparer l'image de production
FROM node:18.17.0-alpine

WORKDIR /app

# Copier le build du dossier .next depuis l'étape de construction
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Installer 'next' globalement pour exécuter l'application
RUN npm install -g next

# Exposer le port sur lequel l'application va s'exécuter
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["next", "start"]
