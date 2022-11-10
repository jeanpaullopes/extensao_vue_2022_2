<template>
  <q-card class="my-card bg-secondary text-white shadow-8 q-ml-xl q-mt-md" style="width: 50%">
      <q-card-section>
        <div class="text-h6">{{dado.titulo}}</div>
        <div class="text-subtitle2" v-show="dado.nome!= undefined">by {{dado.nome}}</div>
      </q-card-section>

      <q-card-section>
        {{ lorem }}
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat>ação 1</q-btn>
        <q-btn flat>cancelar</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  data(){
    return {
      dado: Object
    }
  },
  props:{
    titulo: String,
    nome: String
  },
  created() {
    this.dado.titulo = this.titulo+ "("+this.nome+")"
    this.dado.nome = this.nome
  }

}
</script>

<style>

</style>
