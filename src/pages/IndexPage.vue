<template>
  <q-page class="flex flex-center">
    <router-link to="/nova">olá mundo! tudo bem?</router-link>
    <router-link to="/pg2">A Página 2</router-link>
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'IndexPage'
})
</script>
