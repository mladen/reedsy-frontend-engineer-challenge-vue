<template>
  <section class="one-paginator-container">
    <!-- <a
      v-for="index in numberOfPages"
      v-bind:key="index"
      v-bind:href="'#/' + index" class="one-paginator">Page {{ index }}</a> -->
      <button
        v-for="index in numberOfPages"
        v-bind:key="index"
        v-on:click="$emit('goto-page', index - 1)"
        class="one-paginator"
        >{{ index }}
      </button>
  </section>
</template>

<script>
export default {
  props: {
    numberOfPages: {
      type: Number,
      required: true,
    },
  },
  // props: ['numberOfPages'],
};
</script>

<style lang="scss" scoped>
$main-button-color: #DDAA43;
.one-paginator-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
  font-size: 1.2rem;
  border-top: 2px solid $main-button-color;
  padding-top: 30px;

  .one-paginator {
    padding: 10px 30px;
    border: none;
    border-radius: 8px;
    background: $main-button-color;
    font-weight: 800;
    color: white;
    cursor: pointer;

    &.active {
      padding: 7px 15px 10px;
      border: 3px solid $main-button-color;
      background-color: white;
      color: $main-button-color;
    }
  }
}
</style>
