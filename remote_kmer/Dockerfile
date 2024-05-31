# Étape 1: Construction de l'image à partir de l'image officielle de Node.js
FROM node:16-alpine as builder

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

# Étape 2: Préparer l'image de production
FROM node:16-alpine

# Définir le répertoire de travail pour les opérations suivantes
WORKDIR /app

# Copier le build du dossier .next depuis l'étape de construction
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public
COPY --from=builder /app/package.json package.json
COPY --from=builder /app/node_modules node_modules

# Exposer le port sur lequel l'application va s'exécuter
EXPOSE 3000

# Définir les variables d'environnement
ENV NEXT_PUBLIC_SERVER_HOST=http://b0c0wso.95.216.143.68.sslip.io:3090/v1/api

# Démarrer l'application Next.js
CMD ["npm", "start"]
