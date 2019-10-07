<template>
  <section class="books-container">
    <div class="row">
      <input type="text" v-model="search" placeholder="Search">

      <book
        v-for="(book, index) in filteredBooks"
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
      search: '',
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/books')
      .then(
        response => (this.books.push(...response.data.books)),
      );
  },
  computed: {
    filteredBooks() {
      return this.books.filter(book =>
        book.title.toLowerCase().match(this.search.toLowerCase()) ||
        book.synopsis.toLowerCase().match(this.search.toLowerCase()),
      );
    },
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
