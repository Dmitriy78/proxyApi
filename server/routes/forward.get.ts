export default defineEventHandler(async (event) => {
  // 1. Получаем query-параметры из входящего URL (например, ?username=Иван&search=test)
  const query = getQuery(event)

  console.log('[Server GET] Получены query-параметры:', query)

  try {
    // 2. Отправляем внешний GET-запрос (пробрасываем параметры)
    // $fetch автоматически превратит объект query в URL-параметры ?param1=val1&param2=val2
    const externalResponse = await $fetch('https://httpbin.org/get', {
      method: 'GET',
      query: query, // Пробрасываем входящие параметры
      headers: {
        'Accept': 'application/json'
      }
    })

    // 3. Возвращаем результат обратно клиенту
    return {
      success: true,
      methodUsed: 'GET',
      receivedQuery: query,
      externalData: externalResponse
    }
  } catch (error: any) {
    throw createError({
      statusCode: 500,
      statusMessage: `Ошибка при исполнении GET-запроса: ${error.message}`
    })
  }
})