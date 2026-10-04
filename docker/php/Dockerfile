FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

# --------------------------------------------------
# Продакшен образ
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=10000

# Копируем скомпилированное Nitro-приложение из этапа сборки
COPY --from=builder /app/.output ./.output

EXPOSE 10000

# Запускаем готовый Node.js сервер Nuxt
CMD ["node", ".output/server/index.mjs"]