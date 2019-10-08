<template>
  <section class="book-details-container">
    <div class="title-and-upvotes-container">
      <div class="title">{{ book.title }} <br> {{ book.author }}</div>
      <div class="upvotes">{{ book.upvotes }}</div>
    </div>

    <div class="cover-image">
      <img v-bind:src="book.cover" alt="" srcset="">
    </div>

    <div class="synopsys">
      {{ book.synopsis }}
    </div>

    <div class="rating">
      <!-- {{ book.rating }} -->
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      slug: this.$route.params.slug,
      book: {},
    };
  },
  mounted() {
    axios
      .get(`http://localhost:3000/books/${this.slug}`)
      .then(
        (response) => {
          this.book = { ...response.data };
        },
      );
  },
};
</script>

<style lang="scss" scoped>
.book-details-container {
  height: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  .row {
    width: auto;
    // border: 1px solid blue;
    box-shadow: 0 0 10px lightgrey;
  }
}
</style>
