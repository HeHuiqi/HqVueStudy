<template>
    <div>

        <h3>介绍页</h3>
        <router-link class="link" to="/index">跳转到首页</router-link>
        <p>通过点击事件跳转</p>
        <button @click="handleRouter">点击跳转到个人中心</button>
    </div>
</template>

<script>
    export default {
        name: "HqAbout",
        methods:{
            handleRouter:function () {
                //$router表示所有路由对象
                this.$router.push('/user/123');
            }
        }
    }
</script>

<style scoped>
    .link {
        text-decoration: none;
    }
</style>