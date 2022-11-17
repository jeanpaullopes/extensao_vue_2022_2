<template>
  <h1>Produtos</h1>

    <cardDemo v-for="dado in produtos" v-bind:key="dado.id" :produto="dado"/>

</template>

<script>
import cardDemo from "../components/cardDemo.vue"
import { useStore } from "../stores/example-store"
export default {
  components:{cardDemo},
  data(){

    return {
      store: useStore(),
      produtos: [],
      curso: "Curso extensão dev web básico"
    }
  },
  created() {
    this.produtos = this.store.produtos
  }

};
</script>

<style>
</style>
