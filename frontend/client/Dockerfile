FROM node:16.3.0-alpine3.13

WORKDIR /react_app
EXPOSE 3000

COPY ./package.json /react_app
COPY ./package-lock.json /react_app

RUN npm ci

# COPY . /react_app

COPY . .
# Get build argument and set environment variable
ARG base_url
ENV REACT_APP_URI=${base_url}

RUN npm run build 
CMD ["npm", "start"]