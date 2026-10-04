
export default defineEventHandler(async (event) => {
  // 1. Считываем данные, пришедшие из send.vue (POST body)
  const body = await readBody(event)

  console.log('[Server Route] Получены данные со страницы send.vue:', body)

  // 2. Отправляем cURL / fetch запрос дальше (например, на внешний сервис или localhost)
  try {
    const externalResponse = await $fetch('https://httpbin.org/post', {
      method: 'POST',
      body: body, // пробрасываем полученный body дальше
      headers: {
        'Content-Type': 'application/json'
      }
    })

    // 3. Возвращаем результат обратно на клиента (в send.vue)
    return {
      success: true,
      dataFromExternal: externalResponse
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: `Ошибка перенаправления: ${error.message}`
    })
  }
})