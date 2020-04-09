<template>
<div class="site-navi">
    <nav>
        <ul class="navigation">
            <li v-if="!isAuth">
                <router-link to="/" exact >HOME</router-link>
            </li>
            <li v-if="isAuth">
                <router-link to="/list">RECIPES</router-link>
            </li>
            <li v-if="isAuth">
                 <router-link to="/add" >ADD RECIPE</router-link>
            </li>
            <li v-if="!isAuth">
                <router-link to="/login" >LOGIN</router-link>
            </li>
            <li v-if="!isAuth">
                <router-link to="/register" >REGISTER</router-link>
            </li>
            <li v-if="isAuth">
                <router-link to="/profile" >PROFILE</router-link>
            </li>
            <li v-if="isAuth" @click="userLogout">
                <router-link to="/" exact=""  >LOGOUT</router-link>
            </li>
        </ul>
    </nav>
</div>
 
</template>

<script>
import requester from '../../mixins/requester2'

export default {
    name: 'Home' ,
    mixins: [requester],
    props: {
        isAuth: {
            type: Boolean
        }
    },
    methods: {
        userLogout() {
            this.post('user', '_logout', {}, 'Kinvey')
            .then(data=>{
                sessionStorage.clear();
                console.log(data);
                this.$emit('changeIsAuth', false)
            }).catch(err=>console.log(err))
        }
    }
    
    
}
</script>

<style scoped>
    a {
        text-decoration: none;
        color: black;
        font-weight: bold;
        padding: 10px 20px;
        /* background-color: greenyellow; */
    }
    .navigation {
    display: flex;
    list-style: none;
    justify-content: flex-end;
    margin: 50px 10px;
    margin-bottom: 5px;

    border-bottom: 3px solid #C0C0C0;
    }

    .navigation li {
        display: flex;
        padding: 0 10px;
    }

    .navigation li a:hover {
        /* border: 1px solid grey; */
        box-shadow: 0 0 2px black;
        background-color: grey;
    }
    .navigation li:hover a {
        color: white;

    }
    .router-link-active {
        background-color: grey;
        color: white;
    }

</style>


