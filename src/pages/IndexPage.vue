<template>
  <q-page class="flex flex-center">
    {{valor}}
    <q-input v-model="valor"/>
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
import servicos from 'src/services/servicos'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
      valor:"1"
    }
  },
  created(){
    servicos.getProdutos()
    servicos.getClientes()
  }
})
</script>
