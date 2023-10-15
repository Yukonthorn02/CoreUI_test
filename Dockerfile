# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install


# Copy the rest of the application code to the working directory
COPY . .


# Expose the port your Next.js app runs on (usually 3000)
EXPOSE 5000

# Start the Next.js app
CMD ["npm", "sevre"]