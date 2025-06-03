import { createRouter, createWebHistory } from 'vue-router';
import homePage from '../pages/homePage/index.vue'
import questions from '../pages/questions/index.vue'
import resultPage from '../pages/resultPage/index.vue'

const routes = [
    {path: '/', component: homePage},
    { path: '/resultPage', name: 'result', component: resultPage },
    {path: '/questions', component: questions}
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;