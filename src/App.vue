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
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700&display=swap');
@import "normalize.css";

html {
  height: 100%;
}

body {
  min-height: 100%;
  display: flex;
  font-size: 62.5%;
}

html, body {
  background-color: #FAFAF3;

  #app {
    min-height: 100%;
    flex: 1;
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
      font-size: 1.1rem;
      font-style: italic;
      font-weight: 600;
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
