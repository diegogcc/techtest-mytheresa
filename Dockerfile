# Base image
FROM node:23

# Get the latest version of Playwright
FROM mcr.microsoft.com/playwright:v1.49.0-jammy

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Install Chrome browser for use with Playwright
RUN npx playwright install
RUN npx playwright install chrome

ENV npm_config_ENV=local

# Set the entry point for the container
CMD ["npm", "run", "test"]