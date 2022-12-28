import { createApp } from 'vue'
import App from './App.vue'
import {createRouter, createWebHashHistory} from 'vue-router'

import './style.css'

const Home = ()=> import('./views/Home.vue');
const About = ()=> import('./views/About.vue');

const routes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
  ]

  const router = createRouter({
    history: createWebHashHistory(),
    routes, 
  })

createApp(App).use(router).mount('#app')
