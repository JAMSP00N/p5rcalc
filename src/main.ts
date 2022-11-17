import { createApp } from "vue";
import router from './router';
import AppEntry from './Entry.vue';

import './assets/main.css';

createApp(AppEntry).use(router).mount('#app');