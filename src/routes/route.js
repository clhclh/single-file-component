import Vue from "vue"
import VueRouter from "vue-router"
//所有的插件在引入之后，都需要进行安装
//安装VueRouter插件，就是让插件中的内容生效
Vue.use(VueRouter);


import home from "../components/home.vue"
import list from "../components/list.vue"

import detail from "../components/detail.vue"


export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: home
        },
        {
            path: "/list",
            component: list
        },
        {
            path: "/detail",
            component: detail
        }
    ]
});

