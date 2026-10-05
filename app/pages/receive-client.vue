<template>
  <div style="padding: 20px;">
  </div>
</template>

<script setup>

// // 1. Получаем объект текущего HTTP-запроса (работает во время SSR на сервере)
// const event = useRequestEvent()

// // 2. Извлекаем POST-данные, которые сохранил наш middleware
// const incomingPostData = event?.context?.postData || null

// // 3. Если POST-данные есть — отправляем их на наш эндпоинт server/api/forward.post.ts
// if (incomingPostData && Object.keys(incomingPostData).length > 0) {
//   // useFetch выполнит запрос на серверный роут без нажатия на кнопки
//   await useFetch('/handlerClient', {
//     method: 'POST',
//     body: incomingPostData
//   })
// } 

</script>