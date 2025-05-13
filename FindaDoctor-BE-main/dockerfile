# Use Node.js LTS version as the base image
FROM node:18

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the .env file into the container
COPY .env .env

# Expose the port the app runs on
EXPOSE 5000

# Set the default command to start the server
CMD ["npm", "start"]