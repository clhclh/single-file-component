import Vue from "vue"

import App from "./App.vue"

import router from "./routes/route.js"


var vm = new Vue({
    el: "#app",
    router,
    render: function(createElement){
        return createElement(App);
    }
})