import { defineStore } from "pinia";

export const useStore = defineStore("store", {
  state: () => ({
    id: 200,
    produtos: [
      {
        id: 1,
        descricao: "caixa de bombom",
        preco: 10.5,
        qtd: 100,
        imgUrl: "",
      },
      {
        id: 2,
        descricao: "Leite integral",
        preco: 8.5,
        qtd: 100,
        imgUrl: "",
      },
      {
        id: 3,
        descricao: "Leite em pó 400g",
        preco: 15.99,
        qtd: 100,
        imgUrl: "",
      },
    ],
    clientes: [
      {
        id: 100,
        nome: "Jean Paul",
        email: "jean.lopes@ulife.com.br",
        endereco: {
          rua: "via do cardeal",
          numero: 9999,
          complemento: "casa",
          cep: "99999-999",
          cidade: "Gravataí",
          uf: "RS",
        },
      },
      {
        id: 200,
        nome: "Maria Cândida",
        email: "candida.maria@ulife.com.br",
        endereco: {
          rua: "via do cardeal",
          numero: 9999,
          complemento: "casa",
          cep: "99999-999",
          cidade: "Gravataí",
          uf: "RS",
        },
      }
    ],
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
