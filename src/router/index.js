import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Infos from '@/components/infos'
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
            path:'/infos',
            name:'infos',
            component:Infos
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
