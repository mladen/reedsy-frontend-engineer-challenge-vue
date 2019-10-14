<template>
  <section class="books-container">
    <div class="title-and-search-container">
      <div class="main-title">Top books of all time</div>

      <div class="search-and-show-books">
        <input type="text" v-model="search" placeholder="Search" class="search-books">

        <input type="text" v-model="booksPerPage" name="offset"
          v-bind:placeholder="`Number of books shown is ` + booksPerPage + ` (default)`"
          id="showBooks" class="show-books">
      </div>
    </div>

    <button v-on:click="increase">Idi na sledecu stranicu</button>

    <book-list-item
      v-for="(book, index) in filteredBooksForOnePage"
      :book="book"
      :index="index"
      :key="book.title"
      ></book-list-item>
    <!-- {{ books }} -->

    <!-- <pagination :numberOfPages="numberOfPages"></pagination> -->
  </section>
</template>

<script>
import axios from 'axios';
import BookListItem from './BookListItem';
import Pagination from './Pagination';

export default {
  components: {
    'book-list-item': BookListItem,
    pagination: Pagination,
  },
  data() {
    return {
      search: '',
      books: [],
      numberOfFilteredBooks: '', // For example 4
      booksPerPage: 3, // Let this be a default (at least for now)
      filteredBooks: [], // A list of 4 books that we'll get after filtering
      filteredBooksForOnePage: [], // A list of 3 books (and in a second
      // iteration it's gonna be 1 more book)
      numberOfPages: '', // This will be calculated and we'll get 2 pages
      currentPage: 0, // Place where we'll keep an information about the
      // current page. Default is 1 (first page).
    };
  },
  mounted() {
    axios
      .get('http://localhost:3000/books')
      .then(
        (response) => {
          this.books.push(...response.data.books);
          this.renderAList();
        },
      );

    // this.$nextTick(
    // );
  },
  computed: {
    // Test computed property
    redoList() {
      // If the number of books is 10
      // and if the number of those 10 books, that we want to show per page, is 3
      // const offset = floor(this.books.length / this.booksPerPage);
      const lastPage = this.books.length % this.booksPerPage;

      return lastPage;
    },
  },
  methods: {
    // Test method
    increase() {
      this.currentPage += 1;
    },
    renderAList() {
      // Filter books and put the filtered books into a this.filteredBooks
      // Here, we got an array of 4 books
      this.filteredBooks = this.books.filter(book =>
        book.title.toLowerCase().match(this.search.toLowerCase()) ||
        book.synopsis.toLowerCase().match(this.search.toLowerCase()),
      );

      // Here we have 4
      this.numberOfFilteredBooks = this.filteredBooks.length;

      // Here we get 1
      const numberOfFullPages = Math.floor(this.numberOfFilteredBooks / this.booksPerPage);
      // Calculating modulus (if the remainer of the division is not zero that
      // means that the modulus exists and therefore we need an extra page for those results)
      // Here we get 1 more page (for the remaining results)
      const remainderPageExists = this.numberOfFilteredBooks % this.booksPerPage;

      // So we got 2 pages (adding the 1 full and 1 partial pages
      // that we got in the previous steps)
      this.numberOfPages = (remainderPageExists !== 0) ?
        numberOfFullPages + 1 :
        numberOfFullPages;

      // debugger;
      this.filteredBooksForOnePage = this.filteredBooks.slice(
        (this.currentPage * this.booksPerPage),
        ((this.currentPage * this.booksPerPage) + this.booksPerPage),
      );
    },
  },
  watch: {
    // When data's "search" variable is changed, do the following
    search() {
      this.renderAList();
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

      .search-and-show-books {
        display: flex;

        .search-books,
        .show-books {
          height: 50px;
          font-size: 1.3rem;
          // width: 40%;
          text-align: center;
          margin: auto 30px;
          color: #757575;
          // border: thin solid lighten($color: $main-gold-color, $amount: 50);
          border: none;
        }

        .search-books {
          flex: 2;
        }

        .show-books {
          flex: 1;
        }
      }
    }

    .row {
      width: auto;
      // border: 1px solid blue;
    }
}
</style>
