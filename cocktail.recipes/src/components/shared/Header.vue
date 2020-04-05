<template>
<div class="site-navi">
    <nav>
        <ul class="navigation">
            <li>
                <router-link to="/list">RECIPES</router-link>
            </li>
            <li>
                <a href="">ADD RECIPE</a>

            </li>
            <li>
                <a href="">LOGIN</a>
            </li>
            <li>
                <a href="">REGISTER</a>
            </li>
        </ul>
    </nav>
</div>
 
</template>

<script>
export default {
    name: 'Home' 
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

    .navigation li:hover {
        /* border: 1px solid grey; */
        box-shadow: 0 0 2px black;
        background-color: grey;
    }
    .navigation li:hover a {
        color: white;

    }

</style>


