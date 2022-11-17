<template>
  <h4>Cadastro de Cliente</h4>
  <q-input label="Nome" v-model="vnome"/>

  <q-input type="email" label="email" v-model="vemail"/>

  <q-input label="Logradouro" v-model="vlograd"/>
  <q-input type="number" label="Número" v-model="vnum"/>
  <q-input label="complemento" v-model="vcompl"/>
  <q-input label="CEP" mask="#####-###" v-model="vcep"/>
  <q-input label="Cidade" v-model="vcidade"/>
  <q-input label="UF" mask="AA" v-model="vuf"/>
  <q-btn label="gravar" @click="gravar"/>
  </template>

<script>
import {useStore} from "../stores/example-store"
import servicos from "src/services/servicos"
export default {
  data(){
    return {
      vnome: "",
      vemail: "",
      vlograd: "",
      vnum: "",
      vcompl: "",
      vcep: "",
      vcidade: "",
      vuf: ""
    }
  },
  methods:{
    gravar() {

      let store = useStore()
      let id = store.novoID()
      console.log(id)
      let cli = {
        id: id,
        nome: this.vnome,
        email: this.vemail,
        endereco: {
          rua: this.vlograd,
          numero: this.vnum,
          complemento: this.vcompl,
          cep: this.vcep,
          cidade: this.vcidade,
          uf: this.vuf
        }
      }
      store.addCliente(cli)
      servicos.saveCliente(cli)
      this.$router.push("/pg2")

    }
  }

}
</script>

<style>

</style>
