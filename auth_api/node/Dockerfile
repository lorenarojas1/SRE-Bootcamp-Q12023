FROM node:16-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn --frozen-lockfile
COPY . .
EXPOSE 8000
CMD yarn start

# App must run on port 8000
# Add your instructions to dockerize the application
