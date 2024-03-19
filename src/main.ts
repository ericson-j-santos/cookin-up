import './assets/main.css'

// Importado a função createApp do vue para montar o appendFile;
import { createApp } from 'vue'
import App from './App.vue'

// Essa string #app é um seletor CSS que faz referência àquela <div> com o id app do index.html. v
createApp(App).mount('#app')
