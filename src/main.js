import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/reset.scss';


import { pt_br } from './locales/pt_br'
import { en } from './locales/en'
import { es } from './locales/es'

const languages ={
  pt_br,
  en,
  es
}
const i18n = createI18n ({
  locale: 'pt_br',
  fallbackLocale:'pt_br',
  messages: languages
})
createApp(App).use(i18n).use(store).use(router).mount('#app')
