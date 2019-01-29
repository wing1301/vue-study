//导入Vue
import Vue from 'vue'
//导入App组件
import App from './App.vue'


//导入路由模块
import vueRouter from 'vue-router'
//安装路由模块
Vue.use(vueRouter)

//导入路由文件
import router from './router.js'

//引入mint-ui
import Mint from 'mint-ui'
//导入样式表
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

//引入mui
import "../lib/mui/css/mui.min.css"
import "../lib/mui/css/icons-extra.css"


//按需引入模块
import { Header } from 'mint-ui'
Vue.component(Header.name, Header)


var vm = new Vue({
    el: '#app',
    // render: c => c(App),
    render: function(createElement) {
        return createElement(App);
    },
    router
});