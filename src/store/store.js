import Vue from 'vue';

import Vuex from 'vuex';

Vue.use(Vuex);

//这里管理共享数据的状态
/*
* 在组件模版中可以通过 $store.state.count 来访问，在<script>中可以通过this.$store.state.count访问
* */
const store = new Vuex.Store({

    state: {
        count: 2,
        list: [1, 5, 10, 30, 50],
        user: {},
    },
    //通过getter可以处理原始数据，获得自己想要的格式
    getters: {
        filteredList: state => {
            return state.list.filter(item => item < 30);
        }
    },
    //mutations中不能做异步操作
    mutations: {
        increment: function (state, number) {
            if (number > 0) {
                state.count += number;
            } else {
                state.count++;
            }
        },
        decrease: function (state, number) {
            if (state.count <= 0) return;
            if (number > 0) {
                state.count -= number;
            } else {
                state.count--;
            }

        },
        updateUser: function (state, user) {
            alert(user.username);
            state.user = user;
        }
    },
    //可以在这里做异步操纵，比如请求网络数据
    actions: {

        // 这里context就相当store的上下文
        getUserInfo: function (context, userId) {
            //模拟一个异步处理操作
            return new Promise(resolve => {
                setTimeout(function () {
                    var user = {
                        userId: userId,
                        username: '孙悟空',
                    };

                    context.commit('updateUser', user);
                    resolve(user);

                }, 1000)
            });

        }
    },

});

module.exports = store;