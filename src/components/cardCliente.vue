<template>
  <q-card :id="card" class="my-card fundoDark text-white shadow-8 q-ml-xl q-mt-md" style="width: 50%"
  @mouseover="mouseover" @mouseout="mouseout"
  >
      <q-card-section>
        <div class="text-h6">{{cliente.nome}}</div>
        <div class="text-subtitle2">id {{cliente.id}}</div>

      </q-card-section>

      <q-card-section>
        email: {{cliente.email}}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>ação 1</q-btn>
        <q-btn flat>cancelar</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
import { useStore } from 'src/stores/example-store'
export default {
  data(){
    return {
      cliente: Object
    }
  },
  props:{
    idCliente: Number
  },
  created() {
    let store = useStore()
    this.cliente = store.getClienteByID(this.idCliente)
  },
  computed:{
    card() {return "card"+this.idCliente}
  },
  methods: {
    mouseover() {
      document.getElementById("card"+this.idCliente).classList.add('fundoGif')
    },
    mouseout() {
      document.getElementById("card"+this.idCliente).classList.remove('fundoGif')
    }
  }

}
</script>

<style>
.fundoDark {
  background-color: black;
}
.fundoGif {
  background-image: url('../assets/textura.gif');
}
</style>
