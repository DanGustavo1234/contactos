import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import Vuesax from 'vuesax3'
import 'vuesax3/dist/vuesax.css' //Vuesax styles
import 'material-icons/iconfont/material-icons.css'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, sameAs } from '@vuelidate/validators'




createApp(App).use(Vuesax).use(store).use(useVuelidate).use(router).mount('#app')

