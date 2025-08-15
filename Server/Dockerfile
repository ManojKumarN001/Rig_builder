# Use official Node.js LTS image
FROM node:18-alpine

# Set working directory inside container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json first for caching npm install
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --production

# Copy all source code files
COPY . .

# Expose the port your app listens on (update if different)
EXPOSE 3001

# Start the app
CMD ["node", "index.js"]
