import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: 'home',
        component: () => import ('../views/Home.vue'),
        children: [
            {
                path: 'newTask',
                name: 'newTask',
                component: () => import ('../components/newTask.vue')   
            }

        ]
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
    history: createWebHistory(import.meta.env.BASE_URL), //esto le dice al router donde inicia la carpeta.
    routes
})

export default router;