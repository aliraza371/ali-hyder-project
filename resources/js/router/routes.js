import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'home',
    },
    {
        path: '/products',
        name: 'products-list',
        component: () => '@/Products/ProductList.vue'
    }
]

export default new VueRouter({
    routes
})


