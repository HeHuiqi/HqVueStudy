
import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
    en:{
        message:{
            hello:'Hello world！'
        }
    },
    cn:{
        message:{
            hello:'你好，世界！'
        }
    }
}
const i18n = new VueI18n({
    locale:'en',//设置当前语言
    messages,//设置语言包
});

module.exports = i18n;