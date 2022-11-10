<template>
  <h1>teste</h1>

    <cardDemo :titulo="dado.titulo" :nome="dado.nome"/>
    <router-link to="/pg2">A Página 2</router-link>
</template>

<script>
import cardDemo from "../components/cardDemo.vue"
import { useStore } from "../stores/example-store"
export default {
  components:{cardDemo},
  data(){

    return {
      store: useStore(),
      dado: {
        titulo: "1",
        nome: "Gabs"
      },
      curso: "Curso extensão dev web básico"
    }
  },
  created() {
    console.log(this.store.clientes)
    this.dado.titulo = this.store.produtos[0].preco
    this.dado.nome = this.store.produtos[0].descricao
  }

};
</script>

<style>
</style>
