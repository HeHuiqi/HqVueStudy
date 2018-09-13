<template>
    <div>
        Hello {{ name }}
        <v-title title="Vue组件化"></v-title>
        <v-button @click="handleClick">点击按钮</v-button>
        <p>
            <img src="./assets/123.jpg" style ="width: 200px"  />

        </p>
    </div>
</template>

<script>

      //导入组件
      import vTitle from './HqTitle.vue';
      import vButton from './HqButton.vue';
      // import myImage from './assets/123.jpg';
      export default {
          name: "HqApp",
          data:function() {
              return {name:'Vue.js',image:''}
          },
          components:{
              'v-title':vTitle,
              'v-button':vButton
          },
          methods:{
              handleClick:function (e) {
                  // console.log(e);
                  alert('Hello Girl!😁')
              }
          }

      }

</script>

<style scoped>

</style>