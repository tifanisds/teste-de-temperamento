import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../pages/homePage/index.vue'
import questionsPage from '../pages/questionsPage/index.vue'
import resultPage from '../pages/resultPage/index.vue'
import aboutTemperaments from '../pages/aboutTemperaments/index.vue'
import startPage from '../pages/startPage/index.vue'

const routes = [
    {path: '/', component: startPage},
    {path: '/questionsPage', component: questionsPage},
    {path: '/resultPage', component: resultPage},
    {path: '/aboutTemperaments', component: aboutTemperaments},
    {path: '/homePage', component: homePage}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;