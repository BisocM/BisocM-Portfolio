FROM node:18-alpine as build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the entire source code into the container
COPY . .

# Build the application for production
RUN npm run build

# Use an official Nginx image to serve the built files
FROM nginx:stable-alpine

# Copy the production build from 'build' stage into Nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

# Expose ports
EXPOSE 80
EXPOSE 443

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]