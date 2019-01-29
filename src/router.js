import vueRouter from 'vue-router'

import HomePage from './components/tabbar/HomePage.vue'
import MyProject from './components/tabbar/MyProject.vue'
import StudyNote from './components/tabbar/StudyNote.vue'
import AboutMe from './components/tabbar/AboutMe.vue'



var router = new vueRouter({
    routes: [
        {path:"/", redirect:"/home"},
        {path:"/home", component:HomePage},
        {path:"/myproject", component:MyProject},
        {path:"/studynote", component:StudyNote},
        {path:"/aboutme", component:AboutMe},
    ],
    linkActiveClass: "mui-active"
});

export default router
