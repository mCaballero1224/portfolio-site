# Stage 1: Build the React Application
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the React application
RUN npm run build

# Use an Nginx image to serve the React app
FROM nginx:alpine

# Copy the build artifacts from the build stage to the Nginx directory
COPY --from=build /app/dist /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD [ "nginx", "-g", "daemon off;" ]
