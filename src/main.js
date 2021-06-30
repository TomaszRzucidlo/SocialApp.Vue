import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PrimeVue from 'primevue/config'
import Button from 'primevue/button'
import InputText from 'primevue/inputtext'
import Password from 'primevue/password';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
//import interceptor from './services/interceptor';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

const app = createApp(App)

app.use(store);
app.use(router);
app.use(VueAxios, axios);
app.use(PrimeVue);
app.use(ToastService);
//app.use(interceptor);

app.component('InputText', InputText);
app.component('Button', Button);
app.component('Password', Password);
app.component('Toast', Toast);

axios.interceptors.request.use((config)=>{
    config.headers['Authorization'] = 'Bearer ' + localStorage.getItem('authentication')
    return config;
    },(error)=>{
      console.log(error);
});

axios.interceptors.response.use(function (response) {
  return response;
  }, function (error) {
    /// if response.status === 401 then logout
    console.log(error)
  return Promise.reject(error);
  });


app.mount('#app');
//createApp(App).use(store).use(router).use(router).mount('#app')
