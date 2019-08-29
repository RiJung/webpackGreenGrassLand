# Use an official Node.js runtime as a parent image, see https://hub.docker.com/_/node/
FROM node:10

# WORKAROUND --> currently we need a new user in order to store private node dependencies in ~/.npm-private
ARG GITHUB_TOKEN
# <-- WORKAROUND

# Create app directory
WORKDIR /app
RUN chown node /app
USER node

# Install dependencies, build the app and copy the current directory contents into the container at /app
COPY --chown=node package.json /app
RUN npm install && npm build
COPY --chown=node . /app

# Start the app
CMD cd dist && npm start

# Make port available to the world outside this container
EXPOSE 8081
#    List all containers (only IDs) docker ps -aq.
#    Stop all running containers. docker stop $(docker ps -aq)
#   Remove all containers. docker rm $(docker ps -aq)
#  Remove all images. docker rmi $(docker images -q)


# docker exec -it <container id> /bin/bash
# docker run -p 49160:8081 -d rijung/test
# Get container IDd
#docker ps

# Print app output
#docker logs <container id>