<template>
  <section class="book">
    <book v-for="(book, index) in books" :book="book" :index="index" :key="book.title"></book>
  </section>
</template>

<script>
import Book from './Book';

export default {
  components: {
    book: Book,
  },
  data() {
    return {
      books: 'some books',
    };
  },
};
</script>
