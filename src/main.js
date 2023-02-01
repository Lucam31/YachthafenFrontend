import { createApp } from 'vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap'
import App from './App.vue'
import router from './router'
import store from './store'


const app = createApp(App).use(router).use(store);

app.mount('#app');