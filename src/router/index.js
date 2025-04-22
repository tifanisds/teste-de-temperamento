import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../pages/homePage/index.vue'
import questionsPage from '../pages/questionsPage/index.vue'
import resultPage from '../pages/resultPage/index.vue'
import aboutTemperaments from '../pages/aboutTemperaments/index.vue'

const routes = [
    {path: '/', component: homePage},
    {path: '/questionsPage', component: questionsPage},
    {path: '/resultPage', component: resultPage},
    {path: '/aboutTemperaments', components: aboutTemperaments}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;