<template>

<b-container>
  <b-row align-h="between" class="justify-content-center">
      <b-col cols="2">
        <b-button variant="info" to="/" class="rounded-circle  m-2"><b-icon icon="book"></b-icon></b-button>
      </b-col>
      <b-col cols="3">
        <b-button variant="light" to="/about" class="rounded-pill m-2 about">À propos</b-button>
      </b-col>
  </b-row>
  <div id="app" class="mt-1 p-3">
    <router-view></router-view>
  </div>
 
</b-container>
</template>

<script>
export default {
  name: "App",
  data(){
    return {
      publicPath: process.env.BASE_URL
    }
  }
};
</script>

<style>
#app {
  /*font-family: Avenir, Helvetica, Arial, sans-serif;*/
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
 
 /* margin-top: 60px;*/
}

.about{
  font-family: "Comic Sans MS", cursive, sans-serif;
}

body{
  background: #ffb75e; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #ffb75e, #ed8f03); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #ffb75e, #ed8f03); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

h1,h3{
  font-family: "Comic Sans MS", cursive, sans-serif;
}

#app{
  background-color: rgba(255, 255, 255, 1);
}
em{
  font-weight: bold;
}

</style>
