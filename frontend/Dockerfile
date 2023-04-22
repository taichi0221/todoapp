FROM node:14.17.1-alpine
WORKDIR /usr/src/app

# Add package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app files
COPY . .