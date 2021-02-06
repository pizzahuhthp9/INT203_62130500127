import { createApp } from 'vue'
import App from './App.vue'
// import './assets/css/tailwind.css'
import router from './router/index.js'
import 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-alpha1/dist/js/bootstrap.bundle.min.js'

createApp(App).use(router)
.mount('#app')
