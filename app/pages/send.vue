<template>
  <div style="padding: 20px;">
    <h1>Отправка данных</h1>
    <button @click="sendPostData">Отправить POST на /forward</button>
    <br /><br />
    <button @click="sendGetData">Отправить GET на /forward</button>
    <p v-if="result">Ответ: {{ result }}</p>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const loading = ref(false)
const response = ref(null)
const result = ref(null)

const sendPostData = async () => {
  result.value = await $fetch('/forward', {
    method: 'POST',
    body: { message: 'Привет POST из send.vue!', timestamp: Date.now() }
  })
}

const sendGetData = async () => {
  result.value = await $fetch('/forward', {
    method: 'GET',
    query: { message: 'Привет GET из send.vue!', timestamp: Date.now() }
  })
}
</script>