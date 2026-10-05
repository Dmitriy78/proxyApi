import { readBody } from 'h3'
// import { writeFile, mkdir } from 'node:fs/promises'
// import { join } from 'node:path'

export default defineEventHandler(async (event) => {
  // 1. Извлекаем данные из входящего POST-запроса
  const body = await readBody(event).catch(() => null)

  // 2. Если данных нет или объект пустой — ничего не отправляем
  if (!body || Object.keys(body).length === 0) {
    event.node.res.statusCode = 204 // No Content
    return null
  }

  // 3. Указываем директорию и имя файла
    // // process.cwd() указывает на корень вашего проекта
    // const dirPath = join(process.cwd(), 'temp/client')
    // const filePath = join(dirPath, `request_${Date.now()}.json`)

    // // 4. Создаем папку, если она еще не существует
    // await mkdir(dirPath, { recursive: true })

    // // 5. Преобразуем объект в формат JSON-строки
    // const jsonContent = JSON.stringify(body, null, 2)

    // // 6. Записываем файл на диск
    // await writeFile(filePath, jsonContent, 'utf-8')

    const botUrl = body.tgBotUrl;

    delete body.tgBotUrl;

  try {
    // 3. Отправляем полученные данные POST-запросом на другой сервер
    const response = await $fetch(botUrl, {
      method: 'POST',
      body,
      // При необходимости передайте заголовки (например, авторизацию)
      // headers: {
      //   Authorization: 'Bearer token',
      // }
    })

    // 4. Возвращаем ответ от стороннего сервера
    return response
  } catch (error: any) {
    // Обработка ошибок при запросе на сторонний сервер
    throw createError({
      statusCode: error.response?.status || 500,
      statusMessage: error.message || 'Error forwarding POST request',
    })
  }
})