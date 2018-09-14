import Vue from 'vue';
import VueRouter from 'vue-router';
import HqIndex from '../views/HqIndex.vue';
import HqAbout from '../views/HqAbout.vue';
import HqUser from '../views/HqUser.vue';

const routes = [
    {
        path:'*',
        redirect:'/index'
    },
    {
        path:'/index',
        meta:{
            title:'首页',
        },
        // component:(resolve => resolve(HqIndex)),
        component:HqIndex,

    },

    {
        path:'/about',
        meta:{
            title:'关于我们',
        },
        // component:(resolve => resolve(HqAbout)),
        component:HqAbout,

    },
    {
        path:'/user/:id',
        meta:{
            title:'个人中心',
        },
        // component:(resolve => resolve(HqAbout)),
        component:HqUser,

    }
]
//Vue的router的设置为{mode:'history'} 相应的在在服务端配置始终指向index.html,否则会出现404页面，
const routerConfig = {
    // mode:'history',
    routes:routes,
}

//开启使用VueRouter
Vue.use(VueRouter);

const  Router = new VueRouter(routerConfig);


/*
*
    to 即将要进入的目标的路由对象 。
    from 当前导航即将要离开的路由对象 。
    next 调用该方法后，才能进入下一个钩子。
* */
//跳转前设置标题
Router.beforeEach((to,from,next) => {
    window.document.title = to.meta.title;
    //设置完操作就进入下一个页面
    next();
});
//跳转后自动滚到到页面顶部
Router.afterEach((to,from,next) =>{
    window.scrollTo(0,0);
});

module.exports  = Router;

