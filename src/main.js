import axios from "axios";
axios.defaults.baseURL = 'http://localhost:8000';
axios.defaults.withCredentials = true;

import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js';
import './styles/styles.scss';

createApp(App).use(router).mount('#app');