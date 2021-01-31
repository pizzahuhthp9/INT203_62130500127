import {createRouter, createMemoryHistory} from 'vue-router'

import page from '../view/page.vue'
import main from '../view/main.vue'
import test from '../view/test.vue'

const routes=[
    {
        path:'/page',
        component:page
    },
    {
        path:'/',
        component: main
    },{
        path:'/test',
        component: test
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router