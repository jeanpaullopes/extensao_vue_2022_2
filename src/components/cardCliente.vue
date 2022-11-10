<template>
  <q-card class="my-card bg-primary text-white shadow-8 q-ml-xl q-mt-md" style="width: 50%">
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
  }

}
</script>

<style>

</style>
