<template>
  <section class="one-paginator-container">
    <!-- <a
      v-for="index in numberOfPages"
      v-bind:key="index"
      v-bind:href="'#/' + index" class="one-paginator">Page {{ index }}</a> -->
      <button
        v-for="index in numberOfPages"
        v-bind:key="index">{{ index }}
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

  .one-paginator {
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
}
</style>
