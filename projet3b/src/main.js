
import { createApp } from 'vue'
import App from './App.vue'
const app =  createApp(App)

import ListTest from './components/ListTest.vue'
app.component('MaListe', ListTest )

app.mount('#app')