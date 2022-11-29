import { createApp } from 'vue'
import App from './App.vue'

const app =  createApp(App)

import ListTest from './components/ListTest.vue'
app.component('MaListe', ListTest )

import router from '@/router'
app.use(router)

app.mount('#app')