<template>
   <div>
       <button @click="backRouter">返回</button>
       <h2>个人中心</h2>
       <!--$route.params 包含来url中传递过来的参数-->
       <p>欢迎 {{ $route.params.id }}</p>

   </div>
</template>

<script>
    export default {
        name: "HqUser",
        methods:{
            backRouter(){
                //返回 $router表示所有路由对象
                this.$router.go(-1);
            }
        },
        mounted:function () {
            //$route表示当前路由
            console.log(this.$route.params.id);
        }
    }
</script>

<style scoped>

</style>