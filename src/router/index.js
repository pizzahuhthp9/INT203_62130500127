import {createRouter, createMemoryHistory} from 'vue-router'

import page from '../view/page.vue'

const routes=[
    {
        path:'/page',
        component:page
    }
]

const router = createRouter({
    history: createMemoryHistory(),
    routes
})

export default router