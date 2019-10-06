<template>
  <section class="books-container">
    <div class="row">
      <book
        v-for="(book, index) in books"
        :book="book"
        :index="index"
        :key="book.title"
        ></book>
    </div>
    <!-- {{ books }} -->
  </section>
</template>

<script>
import axios from 'axios';
import Book from './Book';

export default {
  components: {
    book: Book,
  },
  data() {
    return {
      books: [],
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/books')
      .then(
        response => (this.books.push(...response.data.books)),
      );
  },
};
</script>

<style lang="scss" scoped>
.books-container {
    height: 100%;
    padding: 0;
    margin: 0;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -webkit-flex;
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
