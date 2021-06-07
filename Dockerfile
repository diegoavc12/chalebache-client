FROM node:13.12.0-alpine

# set working directory
WORKDIR /home/client

# install app dependencies
COPY package.json ./
COPY yarn.lock ./
RUN yarn

# add app
COPY . ./home/client

# start app
CMD ["yarn"]