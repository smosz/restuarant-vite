import { createRouter,createWebHistory } from "vue-router";
import Home from '../Views/Home.vue'
import SignUp from '../Views/SignUp.vue'
import Login from '../Views/Login.vue'


const routes =[
    {
        path:'/',
        name:'home',
        component:Home
    },
    {
        path:'/login',
        name:'Login',
        component:Login
    },
    {
        path:'/signup',
        name:'Signup',
        component:SignUp
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes
});
export default router