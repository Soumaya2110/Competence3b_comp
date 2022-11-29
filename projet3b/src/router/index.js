import {createRouter } from 'vue-router'
import MaHome from '@/views/MaHome'

const router = createRouter({
    routes: [
        {
            path: '/',
            component: MaHome

        }
    ]

})

export default router;
