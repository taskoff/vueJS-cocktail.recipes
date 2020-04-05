import List from './components/recipes/List.vue';
import Home from './components/Home.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: List
    }
]

export default routes;