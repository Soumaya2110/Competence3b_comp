import {createRouter, createWebHistory } from 'vue-router'
import MaHome from '@/views/MaHome'
import PageDeux from '@/views/PageDeux'
import PageDynamique from '@/views/PageDynamique'
import PageContact from '@/views/PageContact'


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
            name: 'trois',
            path: '/trois',
            component: PageDynamique
            
        },
        {
            name: 'quatre',
            path: '/quatre',
            component: PageContact
            
        }

    ]

})

export default router;
