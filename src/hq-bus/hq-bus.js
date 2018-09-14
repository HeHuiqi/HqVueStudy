/*
* hq-bus 通过这个插件（新建一个空的Vue实例）来进行不同组件之间的通信
* */
import Vue from 'vue';

const install = function (Vue) {
    const  Bus = new Vue({
        methods:{
            emit (event,...args) {
                this.$emit(event,...args);
            },
            on (event,callback) {
                this.$on(event,callback);
            },
            off (event,callback) {
                this.$off(event,callback);
            }

        }
    });
    Vue.prototype.$bus = Bus;
};
export default install;

/*


使用 hq-bus有两点需要注意， 第一是$bus.on应该在 created钩子内使用，
如果在 mounted使 用，它可能接收不到其他组件来自 created 钩子内发出的事件:
第 二 点是使用了 $bus.on，在 beforeDestroy 钩子里应该再使用 $bus.off 解除，
因为组件销毁后，就没必要把监听的句柄储存在 hq-bus 里了


* 使用方式
* import HqBus from './hq-bus';
* Vue.use(HqBus);
*
* 在组件中。。
* //发送事件
* this.$bus.emit(event,...args);
* //监听事件
* this.$bus.on(event,...args);
*
* */
