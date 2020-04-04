<template>
  <div id="app">
    <app-header></app-header>
    <app-home></app-home>
    <app-footer></app-footer>
  </div>
</template>

<script>
import AppHome from './components/Home.vue';
import AppHeader from './components/shared/Header.vue';
import AppFooter from './components/shared/Footer.vue';

export default {
  name: 'App',
  components: {
    AppHome,
    AppHeader,
    AppFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=IM+Fell+French+Canon+SC&display=swap');
 
  body {
    margin: 0;
    padding: 0;
    background-image: url('../public/img/background_3001.jpg');
    background-size: cover;
    font-family: 'IM Fell French Canon SC', serif;
    font-size: 16px;
    /* background: tomato; */
  }

  #app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .site-content {
    flex-grow: 1;
  }
  .site-footer {
    margin-top: auto;
  }
</style>
