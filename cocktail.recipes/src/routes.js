import List from './components/recipes/List.vue';
import Details from './components/recipes/Details';

import Home from './components/Home.vue';

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/list',
        component: List
    },
    {
        path: '/details',
        component: Details
    }
]

export default routes;