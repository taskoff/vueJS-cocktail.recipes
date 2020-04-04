<template>
<div class="site-content">
 <div class="start-page-container">
     <p class="start-message">You can see all cocktail recipes</p>
     <div class="arrow-container">
          <p class="arrow">&#8659;</p>
     </div>
    
     <div class="start-button">
         <a href="">HERE</a>
     </div>
    
 </div>
 
</div>
 
</template>

<script>
export default {
    name: 'Home',
    
}
</script>

<style scoped>
.site-content {
    display: flex;
    justify-content: center;
}

.start-page-container {
    text-align: center;
    padding-top: 70px;
    position: relative;
}
.start-message {
    font-size: 3.5em;
    font-weight: bold;
    text-shadow: 3px 3px grey;
    /* color: grey; */
}
.start-button {
    margin-top: 70px;
}
.start-button a {
    display: block;
    color: black;
    text-decoration: none;
    font-size: 1.5em;
    font-weight: bold;
    max-width: 40%;
    margin: auto;
    background-color: rgba(192, 192, 192, 0.8);
    border-radius: 3px;
    padding: 20px 0;
}
.arrow-container {
    position: relative;
}
.arrow {
    /* position: absolute; */
    top: 20px;
    left: 40%;
    transform: rotate(90deg);
    font-size: 5em;
     animation: arrow 1s infinite;
    /* animation-duration: 1s;  */
}
@keyframes arrow {
    0% {
      transform: translateY(0);
    }
   
    100% {
       transform: translateY(60px);
    } 
}


</style>