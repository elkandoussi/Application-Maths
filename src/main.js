import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import VueRouter from 'vue-router'
import VueKatex from 'vue-katex';
import 'katex/dist/katex.min.css';

import Home from './components/Home.vue'
import PrimeNumberCourse from './components/game1/PrimeNumberCourse.vue'
import PrimeExercices from './components/game1/PrimeExercices.vue'
import PgcdCourse from './components/game4/PgcdCourse.vue'
import pgcdExercices from './components/game4/PgcdExercices.vue'
import Divisibility from './components/game2/Divisibility.vue'
import DivisibilityExercices from './components/game2/DivExercices.vue'
import DivisionEuclide from './components/game3/DivisionEuclide.vue'
import DivisionExercices from './components/game3/DivisionExercices.vue'
import About from './components/About.vue'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.use(VueRouter)
Vue.use(VueKatex)

Vue.config.productionTip = false


const router = new VueRouter({ 
  routes: [
    {path: '/', component: Home},
    {path: '/nombre-premier/cours', component: PrimeNumberCourse},
    {path: '/nombre-premier/exercices', component: PrimeExercices},
    {path: '/pgcd/cours', component: PgcdCourse},
    {path: '/pgcd/exercices', component: pgcdExercices},
    {path: '/divisible/cours', component: Divisibility},
    {path: '/divisible/exercices', component: DivisibilityExercices},
    {path: '/division-euclidienne/cours', component: DivisionEuclide},
    {path: '/division-euclidienne/exercices', component: DivisionExercices},
    {path: '/about', component: About}

  ]
})


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
