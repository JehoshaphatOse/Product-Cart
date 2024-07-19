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
import CreateProductCheckout from '../Views/CreateProductCheckout.vue'
import StoreFront from '../Views/StoreFront.vue'
import TemplateView from '../Views/TemplateViews.vue'
import TemplateView2 from '../Views/Template2.vue'
import TemplateView3 from '../Views/Template-3.vue'
import TemplateView4 from '../Views/Template4.vue'
import TemplateView5 from '../Views/Template5.vue'
import TemplateView6 from '../Views/Template6.vue'
import TemplateView7 from '../Views/Template7.vue'
import TemplateView8 from '../Views/Template8.vue'
import TemplateView9 from '../Views/Template9.vue'

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
    },
    {
      path: '/productcheckout',
      name: 'productcheckout',
      component: CreateProductCheckout
    },

    {
      path: '/store',
      name: 'store',
      component: StoreFront
    },

    {
      path: '/template',
      name: 'template',
      component: TemplateView
    },

    {
      path: '/template-2',
      name: 'template-2',
      component: TemplateView2
    },
    {
      path: '/template-3',
      name: 'template-3',
      component: TemplateView3
    },
    {
      path: '/template-4',
      name: 'template-4',
      component: TemplateView4
    },
    {
      path: '/template-5',
      name: 'template-5',
      component: TemplateView5
    },
    {
      path: '/template-6',
      name: 'template-6',
      component: TemplateView6
    },
    {
      path: '/template-7',
      name: 'template-7',
      component: TemplateView7
    },
    {
      path: '/template-8',
      name: 'template-8',
      component: TemplateView8
    },
    {
      path: '/template-9',
      name: 'template-9',
      component: TemplateView9
    }
  ]
})
export default router
