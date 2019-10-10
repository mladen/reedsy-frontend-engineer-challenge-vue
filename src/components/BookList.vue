<template>
  <section class="books-container">
    <div class="title-and-search-container">
      <div class="main-title">Top books of all time</div>
      <input type="text" v-model="search" placeholder="Search" class="search-books">
    </div>

    <book-list-item
      v-for="(book, index) in filteredBooks"
      :book="book"
      :index="index"
      :key="book.title"
      ></book-list-item>
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
$main-gold-color: #A97721;

.books-container {
    height: 100%;
    padding: 0;
    margin: auto;
    // width: auto;
    max-width: 700px;
    display: flex;
    // align-items: center;
    // justify-content: center;
    flex-direction: column;
    box-shadow: 0 0 10px lightgrey;

    .title-and-search-container {
      // flex: 1;
      display: flex;
      flex-direction: column;

      .main-title {
        flex: 1;
        margin: auto;
        font-size: 2rem;
        font-weight: 700;
        color: lighten($color: $main-gold-color, $amount: 20);
        padding: 20px 0 20px 0;
      }

      .search-books {
        flex: 1;
        height: 50px;
        font-size: 1.3rem;
        width: 70%;
        text-align: center;
        margin: auto;
        color: #757575;
        // border: thin solid lighten($color: $main-gold-color, $amount: 50);
        border: none;
      }
    }

    .row {
      width: auto;
      // border: 1px solid blue;
    }
}
</style>
