import Vue from "vue";
import VueRouter from "vue-router";
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import '@mdi/font/css/materialdesignicons.css';
import router from "./router";

import Main from './Main';

Vue.use(VueRouter);
Vue.use(Vuetify, { iconfont: 'mdi' });

new Vue({
    vuetify: new Vuetify(),
    router,
    render: (h) => h(Main)
}).$mount('#app');