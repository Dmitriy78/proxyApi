import { readBody } from 'h3'

export default defineEventHandler(async (event) => {
  // Если на нашу страницу пришёл POST-запрос
  if (event.node.req.method === 'POST') {
    const body = await readBody(event).catch(() => null)
    // Сохраняем полученные данные в контекст
    event.context.postData = body
  }
})