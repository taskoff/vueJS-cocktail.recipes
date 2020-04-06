import List from './components/recipes/List.vue';
import Details from './components/recipes/Details';
import AddRecipe from './components/recipes/AddRecipe';
import Register from './components/user/Register';
import Login from './components/user/Login';
import Profile from './components/user/Profile';

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
    },
    {
        path: '/profile',
        component: Profile
    }
]

export default routes;