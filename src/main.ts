import { createApp } from 'vue';
import router from './router';
import { createPinia } from 'pinia';
import { Quasar } from 'quasar';

// Import icon libraries
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';

// Import Quasar css
import 'quasar/src/css/index.sass';

import App from './App.vue';

const myApp = createApp(App);

myApp.use(router);
myApp.use(createPinia());

myApp.use(Quasar, {
  plugins: {},
});

myApp.mount('#app');
