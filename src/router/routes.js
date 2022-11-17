
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/produtos',
    component: () =>  import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/listaProdutos.vue') }
    ]
  },
  {
    path: '/clientes',
    component: () =>  import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/listaClientes.vue') }
    ]
  },
  {
    path: '/cadCliente',
    component: () =>  import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/cadCliente.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
