import vueRouter from 'vue-router'

//app页面tabbar四个组件
import HomePage from './components/tabbar/HomePage.vue'
import MyProject from './components/tabbar/MyProject.vue'
import StudyNews from './components/tabbar/StudyNews.vue'
import AboutMe from './components/tabbar/AboutMe.vue'

//home页面html组件
import Html from './components/home/Html.vue'



var router = new vueRouter({
    routes: [
        {path:"/", redirect:"/home"},
        {path:"/home", component:HomePage},
        {path:"/myproject", component:MyProject},
        {path:"/studynews", component:StudyNews},
        {path:"/aboutme", component:AboutMe},
        {path:"/home/html", component:Html},
    ],
    linkActiveClass: "mui-active"
});

export default router
