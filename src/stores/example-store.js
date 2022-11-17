import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    id: 200,
    produtos: [],
    clientes: [],
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,

  },
  actions: {
    novoID(){this.id++; return this.id},
    getClienteByID(id) {
      let cli = {}
      this.clientes.forEach(c=>{
        if (c.id == id) {
          cli = c
        }
     })
      return cli
    },
    increment() {
      this.counter++;
    },
    addProduto(obj) {
      this.produtos.push(obj);
    },

    addCliente(obj) {
      this.clientes.push(obj);
    },
  },
});
