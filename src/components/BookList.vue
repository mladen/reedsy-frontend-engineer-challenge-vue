<template>
  <section class="book">
    <book
      v-for="(book, index) in books"
      :book="book"
      :index="index"
      :key="book.title"
      ></book>
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
