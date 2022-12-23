# This Dockerfile uses the node:12 image as the base image 
# and installs the necessary dependencies for the app using npm. 
# It then copies the source code and static assets into the image and exposes port 3000, 
# which is the default port used by the development server for a React app. 
# Finally, it specifies the npm start command to run when the container is started.

FROM node:16

# Create app directory
WORKDIR ./frontend

# Install app dependencies
COPY package*.json ./
RUN npm install

# Bundle app source
COPY . .

#EXPOSE 3000
#CMD [ "npm", "start" ]