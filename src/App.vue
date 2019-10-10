<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,700&display=swap');
@import "normalize.css";

body {
  font-size: 62.5%;
}

html, body {
  background-color: #FAFAF3;
  height: 100%;

  #app {
    // height: 100%;
    /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .title,
    .title .router-link-title {
      color: #A97721;
      font-size: 1.6rem;
      font-weight: 700;
      text-decoration: none;
    }

    .author {
      color: #555555;
      font-size: 1.25rem;
      font-style: italic;
    }

    .synopsis,
    .upvote-button {
      font-size: 1rem;
      text-align: left;
    }

    .upvotes {
      font-size: 1rem;
    }
  }
}
</style>
