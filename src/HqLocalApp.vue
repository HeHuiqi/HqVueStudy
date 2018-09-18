<template>
    <div>
        <!--使用vue-i18n来做国际化，看index.js配置-->
        <h1> {{$t('message.hello')}} </h1>
        <button @click="handleLocal">改变语言</button>
    </div>
</template>

<script>
    export default {
        name: "HqLocalApp",
        data(){
          return {
              isEn:true,
          }
        },
        methods:{
            handleLocal(){
                this.isEn = !this.isEn;

                this.$i18n.locale = this.isEn ? 'en':'cn';
            }
        }
    }
</script>

<style scoped>

</style>