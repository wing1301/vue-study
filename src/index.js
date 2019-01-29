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

//导入vue-resourse
import vueResource from 'vue-resource'
Vue.use(vueResource)

//引入mint-ui
import Mint from 'mint-ui'
//导入样式表
import 'mint-ui/lib/style.min.css'
Vue.use(Mint)

//引入mui
import "../lib/mui/css/mui.min.css"
import "../lib/mui/css/icons-extra.css"


//按需引入模块
import { Header, Swipe, SwipeItem } from 'mint-ui'
//使用header
Vue.component(Header.name, Header)
//使用轮播图
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



var vm = new Vue({
    el: '#app',
    // render: c => c(App),
    render: function(createElement) {
        return createElement(App);
    },
    router
});