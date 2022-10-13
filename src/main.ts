import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'




createApp(App).use(Vuesax).use(store).use(router).mount('#app')

