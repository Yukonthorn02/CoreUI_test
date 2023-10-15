# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install
#ass
COPY . .


# Expose a port for the application (change to your desired port)
EXPOSE 5000

# Define the command to run the application
CMD [ "npm",  "start" ]