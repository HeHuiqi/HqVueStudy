<template>
    <div>

        <h3>首页</h3>

        <router-link class="link" to="/about">跳转到介绍页</router-link>
        <p>{{ $store.state.count}}</p>
        <button @click="handleIncrement">+</button>
        <button @click="handleDecrease">-</button>

        <button @click="handleIncrementTen">+10</button>
        <button @click="handleDecreaseTen">-10</button>

        <div>
            {{ list }}
        </div>
        <button @click="handleGetUserInfo">获取用户信息</button>
        <p> {{user}}</p>


    </div>
</template>

<script>
    export default {
        name: "HqIndex",
        data: function () {
            return {user:this.$store.state.user};
        },
        computed: {

            list: function () {

                return this.$store.getters.filteredList;
            }
        },
        methods: {
            handleIncrement: function () {
                //在组件内，来自 store 的数据只能读取，不能手动改变，改变store中数据的唯一途径就是显式地提交mutations。
                this.$store.commit('increment',);
            },
            handleDecrease: function () {
                this.$store.commit('decrease');
            },

            handleIncrementTen: function () {
                //在组件内，来自 store 的数据只能读取，不能手动改变，改变store中数据的唯一途径就是显式地提交mutations。
                this.$store.commit('increment',10);
            },
            handleDecreaseTen: function () {
                this.$store.commit('decrease',10);
            },
            handleGetUserInfo: function () {
                //触发action并传递参数
                this.$store.dispatch('getUserInfo','123425215').then(user => {
                    console.log(JSON.stringify(user));
                    this.user = user;

                });
            }
        },
        mounted: function () {

            //在组件内，来自 store 的数据只能读取，不能手动改变，改变store中数据的唯一途径就是显式地提交mutations。
            console.log('index==' + this.$store.state.count);
        }

    }
</script>

<style scoped>
    .link {
        text-decoration: none;
    }

</style>