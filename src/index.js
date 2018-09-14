
//使用这种方式会在index.html的中自动插入<style>标签
// import './style.css';

import Vue from 'vue';




import App from './App.vue';

//添加vue-router
import router from './router/router';
//添加vuex进行状态管理,相当于一个单例模式
import store from './store/store';

new Vue({
    el: '#app',
    router:router,
    store:store,
    render: h => {
        return h(App)
    }
});



/*
//基本
import HqApp from './HqApp.vue';
new Vue({
    el: '#app',
    render: h => {
        return h(HqApp)
    }
});
*/