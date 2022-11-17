<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    >
    <ul v-for="c in comments" v-bind:key="c">
      <li>{{c.name}}</li>
    </ul>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import servicos from 'src/services/servicos'

export default defineComponent({
  name: 'IndexPage',
  data(){
    return {
      comments:[]
    }
  },
  created(){
    servicos.getProdutos()
    servicos.getClientes()
    servicos.getComments().then(response=>{
      this.comments = response.data
      this.comments.sort((a,b)=>{
        console.log(a.name<b.name)
      if (a.name<b.name) return -1
      if (a.name>b.name) return 1
      if (a.name==b.name) return 0
    })
    })
  }
})
</script>
