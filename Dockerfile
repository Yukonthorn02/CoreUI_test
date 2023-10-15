# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Expose the port your Vue.js application will run on
EXPOSE 8080

# Define the command to build and run the application


# Add the rest of your project files to the container
COPY . .

# Expose a port for serving the built Vue.js application (may need to adjust the port)
CMD [ "npm", "run", "serve" ]