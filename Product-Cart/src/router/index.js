import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../Views/Dashboard.vue'
import ProductsPage from '../Views/ProductsPage.vue'
import CreateProduct from '../Views/CreateProduct.vue'
import SettingsPage from '../Views/SettingsPage.vue'
import PaymentGateway from '../Views/PaymentGateway.vue'
import Customers from '../Views/Customers.vue'
import AllSalesPage from '../Views/AllSalesPage.vue'
import AbandonedSales from '../Views/AbandonedSales.vue'
import CartPage from '../Views/CartPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Dashboard
    },
    {
      path: '/products',
      name: 'products',
      component: ProductsPage
    },
    {
      path: '/createproduct',
      name: 'createProducts',
      component: CreateProduct
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsPage
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentGateway
    },
    {
      path: '/customers',
      name: 'customer',
      component: Customers
    },
    {
      path: '/sales',
      name: 'sales',
      component: AllSalesPage
    },
    {
      path: '/abandonedsales',
      name: 'abandonedsales',
      component: AbandonedSales
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    }
  ]
})
export default router
