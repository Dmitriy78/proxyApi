# ЭТАП 1: Сборка приложения
FROM node:20-alpine AS builder

WORKDIR /app

# Явно отключаем production-режим на время установки и сборки
ENV NODE_ENV=development

COPY package*.json ./
RUN npm install

# 3. Копируем исходный код
COPY . .

# 4. Собираем продакшен-бандл в папку .output
RUN npm run build


# ЭТАП 2: Запуск продакшен-сервера
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=10000

# Копируем ТОЛЬКО готовый результат сборки из первого этапа
COPY --from=builder /app/.output ./.output

EXPOSE 10000

CMD ["node", ".output/server/index.mjs"]