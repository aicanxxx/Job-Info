import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Home from '@/components/Home'
import View from '@/components/View'
import Learn from '@/components/Learn'
Vue.use(Router);

export default new Router({
    mode:'history',
    routes: [
        {
            path: '/',
            name: 'Hello',
            component: Hello
        },
        {
            path:'/home',
            name:'home',
            component:Home
        },
        {
            path:'/view',
            name:'View',
            component:View
        },
        {
            path:'/learn',
            name:'Learn',
            component:Learn
        }
    ]
})
