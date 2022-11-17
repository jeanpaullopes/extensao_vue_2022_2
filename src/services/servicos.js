import api from './api.js'
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
  saveCliente(cliente) {
    api.post('/clientes', cliente)
  }
}
