import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter)

import UserList from '../views/UserList.vue';

const routes = [{
        path: "/",
        name: 'UserList',
        component: UserList
    },
    {
        path: "/data",
        name: 'Data',
        component: () =>
            import ('../views/Data.vue')
    }
]

const router = new VueRouter({
    routes
})


export default router