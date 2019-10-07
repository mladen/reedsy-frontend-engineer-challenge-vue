<template>
  <div class="upvote-button-container">
    <button class="upvote-button upvoted" v-if="upvoted">Upvoted</button>
    <button class="upvote-button" v-else>Upvote</button>
  </div>
</template>

<script>
export default {
  props: ['upvoted'],
};
</script>

<style lang="scss" scoped>
$main-button-color: #DDAA43;
.upvote-button-container {
  display: inline;
}
.upvote-button {
  padding: 10px 20px 13px;
  border: none;
  border-radius: 8px;
  background: $main-button-color;
  font-weight: 800;
  color: white;
  cursor: pointer;

  &.upvoted {
    padding: 7px 15px 10px;
    border: 3px solid #DDAA43;
    background-color: white;
    color: #DDAA43;
  }
}
</style>
