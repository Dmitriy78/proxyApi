# 1. Этап сборки
FROM node:20-alpine AS builder

WORKDIR /app

# Копируем манифесты
COPY package*.json ./

# Устанавливаем ВСЕ зависимости
RUN npm install

# Копируем исходники и собираем .output
COPY . .
RUN npm run build

# 2. Этап запуска
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV HOST=0.0.0.0
ENV PORT=10000

# Копируем только скомпилированный сервер
COPY --from=builder /app/.output ./.output

EXPOSE 10000

CMD ["node", ".output/server/index.mjs"]