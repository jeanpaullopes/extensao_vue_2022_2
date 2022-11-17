<template>
  <h1 class="text-white">Cad Clientes</h1>
  <div v-for="cli in clientes" v-bind:key="cli.id">
    <cardCliente :idCliente="cli.id" />
  </div>
  <ul v-for="cli in clientes" v-bind:key="cli.id">
    <li>({{ cli.id }}) {{ cli.nome }}</li>
  </ul>
  <q-btn to="/cadCliente" label="cadastrar Cliente" />
</template>

<script>
import { useStore } from "src/stores/example-store";
import cardCliente from "../components/cardCliente.vue";
export default {
  components: { cardCliente },
  data() {
    return {
      clientes: [],
    };
  },
  created() {
    let store = useStore();
    this.clientes = store.clientes;
  },
};
</script>

<style>
</style>
