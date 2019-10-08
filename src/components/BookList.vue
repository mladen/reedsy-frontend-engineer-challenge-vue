<template>
  <section class="books-container">
    <div class="row">
      <input type="text" v-model="search" placeholder="Search">

      <book-list-item
        v-for="(book, index) in filteredBooks"
        :book="book"
        :index="index"
        :key="book.title"
        ></book-list-item>
    </div>
    <!-- {{ books }} -->
  </section>
</template>

<script>
import axios from 'axios';
import BookListItem from './BookListItem';

export default {
  components: {
    'book-list-item': BookListItem,
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
