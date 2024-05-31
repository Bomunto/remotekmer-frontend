# Étape 1: Construction de l'image à partir de l'image officielle de Node.js
FROM node:20-alpine as builder

# Définir le répertoire de travail
WORKDIR /app

# Installer les dépendances
COPY package.json package-lock.json ./
RUN npm install

# Copier le reste des fichiers du projet
COPY . .

# Construire l'application
RUN npm run build

# Étape 2: Préparer l'image de production
FROM node:20-alpine

# Définir le répertoire de travail pour les opérations suivantes
WORKDIR /app

# Installer seulement les dépendances nécessaires pour la production
COPY --from=builder /app/package.json /app/package-lock.json ./
RUN npm install --production

# Copier le build du dossier .next depuis l'étape de construction
COPY --from=builder /app/.next .next
COPY --from=builder /app/public public

# Exposer le port sur lequel l'application va s'exécuter
EXPOSE 3000

# Utiliser les variables d'environnement au moment de l'exécution du conteneur
CMD ["npm", "start"]
