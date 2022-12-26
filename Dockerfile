FROM node:19.3.0 as builder

ENV NODE_ENV build

USER node
WORKDIR api_nest

COPY package*.json ./
COPY tsconfig*.json ./
RUN npm ci

COPY --chown=node:node . .
RUN npm run build \
    && npm prune --production

# ---

FROM node:19.3.0

ENV NODE_ENV production

USER node
WORKDIR api_nest

COPY --from=builder --chown=node:node /api_nest/package*.json ./
COPY --from=builder --chown=node:node /api_nest/tsconfig*.json ./
COPY --from=builder --chown=node:node /api_nest/node_modules/ ./node_modules/
COPY --from=builder --chown=node:node /api_nest/dist/ ./dist/

CMD ["node", "dist/main.js"]
