# Use Node.js as base image
FROM node:18 as build

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the app
COPY . .

# Build the React app
RUN npm run build

# Use nginx for serving the frontend
FROM nginx:latest
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 for frontend
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
