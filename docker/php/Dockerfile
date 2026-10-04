FROM node:20-alpine

WORKDIR /app

# Устанавливаем git и bash, если понадобятся для пакетов
RUN apk add --no-cache bash git

# Открываем порт 10000 для Nuxt
EXPOSE 10000

# Переменные окружения для работы внутри Docker
ENV HOST=0.0.0.0
ENV PORT=10000

# Запуск сервера разработки Nuxt
CMD ["sh", "-c", "npm install && npm run dev"]