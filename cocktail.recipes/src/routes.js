import List from './components/recipes/List.vue';
import Details from './components/recipes/Details';
import AddRecipe from './components/recipes/AddRecipe';
import Register from './components/user/Register';
import Login from './components/user/Login';

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
    },
    {
        path: '/add',
        component: AddRecipe
    },
    {
        path: '/register',
        component: Register
    },
    {
        path: '/login',
        component: Login
    }
]

export default routes;