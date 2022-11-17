import {api, apiJP}  from './api.js'
import { useStore } from "../stores/example-store"
const store = useStore()
export default {
  getProdutos() {
    api.get('/produtos').then((response=>{

      response.data.forEach(pr => {
        store.addProduto(pr)
        console.log(pr)
      });

    }))
  },
  getClientes() {
    api.get('/clientes').then((response=>{

      response.data.forEach(cl => {
        store.addCliente(cl)
        console.log(cl)
      });

    }))
  },
  getComments() {
    return apiJP.get('comments')
  },
  saveCliente(cliente) {
    api.post('/clientes', cliente)
  },

  saveProduto(produto) {
    api.post('/produtos', produto)
  },
  updateProduto(produto) {
    api.put('/produtos/'+produto.id, produto)
  }
}
