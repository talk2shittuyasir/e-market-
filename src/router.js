import Vue from 'vue'
import VueRouter from 'vue-router'
import Products from './views/ProductDetail'
// import App from './App'
import Product from './components/Product'
Vue.use(VueRouter);

const routes = [
    { path: '/', component: Product },

    { path: '/views/ProductDetail', component: Products }
]

const router = new VueRouter({
    mode: "history",
    routes
})

export default router;