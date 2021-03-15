require('./bootstrap');
import Vue from 'Vue'
import router from './router/routes'
import store from './store/index'
import MainComponent from './main.vue'
import { sync } from 'vuex-router-sync'

sync(store,router)



const app = new Vue({
    el: '#app',
    router,
    render: h => h(MainComponent),
    template:'<main-component/>',
    components:{ MainComponent }
});
