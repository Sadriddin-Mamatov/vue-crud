import { createApp } from 'vue'
import './style.css'
import pinia from './stores';
import router from './router';
import App from './App.vue'

import './style.css';

const app = createApp(App)

app.use(pinia);
app.use(router);

app.mount('#app')
