import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import VueSmoothScroll from 'vue3-smooth-scroll'
import { inject } from '@vercel/analytics';
inject();

const app = createApp(App)

app.use(VueSmoothScroll)

app.mount('#app')
