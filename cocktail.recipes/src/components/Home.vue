<template>
<div class="site-content">
 <div class="start-page-container">
     <p class="start-message">You can see all recipes</p>
     <p class="arrow">&#10152;</p>
     <div class="start-button">
         <a href="">HERE</a>
     </div>
     <!-- <button class="start-button">HERE</button> -->
     <!-- <input type="button" value="HERE"> -->
 </div>
 
</div>
 
</template>

<script>
export default {
    name: 'Home' 
}
</script>

<style scoped>

.start-page-container {
    text-align: center;
    padding-top: 50px;
}
.start-message {
    font-size: 3em;
    /* color: grey; */
}
.start-button {
    margin-top: 50px;
}
.start-button a {
    display: block;
    color: black;
    text-decoration: none;
    font-size: 1.5em;
    max-width: 20%;
    margin: auto;
    background-color: rgba(192, 192, 192, 0.8);
    border-radius: 3px;
    padding: 20px 0;
}
.arrow {
    transform: rotate(90deg);
    font-size: 5em;
}

</style>