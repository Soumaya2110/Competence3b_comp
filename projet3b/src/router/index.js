import {createRouter, createWebHistory } from 'vue-router'
import MaHome from '@/views/MaHome'
import PageDeux from '@/views/PageDeux'
import PageDynamique from '@/views/PageDynamique'


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            name: 'MaHome',
            path: '/',
            component: MaHome

        },
        {
            name: 'deux',
            path: '/deux',
            component: PageDeux
        },
        {
            name: 'dd',
            path: '/dynamique/:id',
            component: PageDynamique,
            props: true
        }
    ]

})

export default router;
