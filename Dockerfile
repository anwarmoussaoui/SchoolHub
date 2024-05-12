# Use official Node.js image as the base image
FROM node:alpine AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use nginx image to serve the Angular app
FROM nginx:alpine

# Copy the built Angular app from the previous stage
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy configuration files


# Expose port 80
EXPOSE 80

# Command to run nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
