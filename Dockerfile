# # --- Этап 1: Сборка ---
# FROM node:20-alpine AS builder

# WORKDIR /app

# # Явно задаем dev-среду, чтобы npm точно установил nuxt
# ENV NODE_ENV=development

# # Копируем файлы описания зависимостей
# COPY package*.json ./

# # Устанавливаем все зависимости
# RUN npm install

# # Копируем исходники и собираем проект
# COPY . .
# RUN npm run build

# # --- Этап 2: Продакшен запуск ---
# FROM node:20-alpine AS runner

# WORKDIR /app

# ENV NODE_ENV=production
# ENV HOST=0.0.0.0
# ENV PORT=10000

# # Копируем ТОЛЬКО скомпилированный результат
# COPY --from=builder /app/.output ./.output

# EXPOSE 10000

# CMD ["node", ".output/server/index.mjs"]