import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import ('../views/Home.vue'),
       
    },
    {
        path: '/login',
        name: 'login',
        component: () => import ('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import ('../views/Register.vue')
    },
   
    
]

const router = createRouter({
    history: createWebHashHistory(import.meta.env.BASE_URL), //esto le dice al router donde inicia la carpeta.
    routes
})

export default router;