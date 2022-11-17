<template>
  <q-card class="my-card bg-secondary text-white shadow-8 q-ml-xl q-mt-md" style="width: 50%">
      <q-card-section>
        <div class="text-h6">{{edProduto.descricao}}</div>
        <div class="text-subtitle2" > código: {{edProduto.id}}</div>
      </q-card-section>

      <q-card-section>
        <h5> R$ {{edProduto.preco}}</h5>
        <q-input v-show="editando" v-model="preco" mask="#.##"
        fill-mask="0" reverse-fill-mask label="Preço"/>
      </q-card-section>

      <q-separator dark />

      <q-card-actions>
        <q-btn flat v-show="!editando" @click="editar">Atualizar Preço</q-btn>
        <q-btn flat v-show="editando" @click="gravar">Gravar</q-btn>
        <q-btn flat v-show="editando" @click="cancelar">cancelar</q-btn>
      </q-card-actions>
    </q-card>
</template>

<script>
import servicos from 'src/services/servicos'
export default {
  data() {
    return {
      edProduto: Object,
      editando: false,
      preco: Number
    }
  },
  props:{
    produto: Object
  },
  created() {
    this.edProduto = this.produto
  },
  methods:{
    editar() {
      this.preco = this.edProduto.preco
      this.editando = true
    },
    cancelar() {
      this.editando = false

    },
    gravar() {
    //  let obj = {
    //id: this.edProduto.id,
    //descricao: this.edProduto.descricao,
    //preco: this.preco,
    //qtd: this.edProduto.qtd,
    //imgUrl: ""
    //}
    this.edProduto.preco = this.preco
      this.editando = false
      servicos.updateProduto(this.edProduto)
//      servicos.updateProduto(obj)

    }
  }

}
</script>

<style>

</style>
