
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') }
    ]
  },
  {
    path: '/nova',
    component: () =>  import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/paginaNova.vue') }
    ]
  },
  {
    path: '/pg2',
    component: () =>  import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/paginaDois.vue') }
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
