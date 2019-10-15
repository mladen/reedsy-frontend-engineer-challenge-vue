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
        :class="{ active: index - 1 === currentPage }"
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
    currentPage: {
      type: Number,
      required: true,
    },
  },
  // props: ['numberOfPages'],
};
</script>

<style lang="scss" scoped>
$main-button-color: lighten(#DDAA43, 15%);
.one-paginator-container {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 30px;
  font-size: 1.2rem;
  padding-top: 30px;

  .one-paginator {
    padding: 12px 19px;
    border: none;
    border-radius: 50%;
    background: $main-button-color;
    font-weight: 800;
    color: white;
    cursor: pointer;

    &.active {
      padding: 7px 16px 10px;
      border: 3px solid $main-button-color;
      background-color: white;
      color: $main-button-color;
    }
  }
}
</style>
