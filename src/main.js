import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// import axios from "axios";

// const teste = async () => {
//   const response = await axios.post(`http://localhost:3333/sessions`, {
//     email: "johndoe@email.com",
//     password: "123",
//   });

//   console.log(response);

//   return response;
// };

// console.log(teste());




createApp(App).use(router).mount('#app')
