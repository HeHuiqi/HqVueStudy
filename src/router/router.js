import Vue from 'vue';
import VueRouter from 'vue-router';
import HqIndex from '../views/HqIndex.vue';
import HqAbout from '../views/HqAbout.vue';


const Routers = [
    {
        path:'*',
        redirect:'/index'
    },
    {
        path:'/index',
        component:HqIndex,
    },

    {
        path:'/about',
        component:HqAbout,
    }
]

const RouterConfig = {
    mode:'history',
    routes:Routers,
}
Vue.use(VueRouter);

const  router = new VueRouter(RouterConfig);

module.exports  = router;

