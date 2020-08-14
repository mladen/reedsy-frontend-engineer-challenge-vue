<template>
  <section class="books-container">
    <div class="title-and-search-container">
      <div class="main-title">Top books of all time</div>

      <div class="search-and-show-books">
        <input type="text" v-model="search" placeholder="Search" class="search-books">

        <div class="incrementDecrementPageSize">
          <div class="decrementPageSize" v-on:click="booksPerPage += 1">&uarr;</div>
            Page size is {{ booksPerPage }}
          <div class="incrementPageSize" v-on:click="booksPerPage -= 1">&darr;</div>
        </div>
      </div>
    </div>

    <book-list-item
      v-for="(book, index) in filteredBooksForOnePage"
      :book="book"
      :index="index"
      :key="book.title"
      ></book-list-item>
    <!-- {{ books }} -->

    <pagination
      :numberOfPages="numberOfPages"
      :currentPage="currentPage"
      v-on:goto-page="goToPage">
    </pagination>
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
      numberOfPages: 0, // This will be calculated and we'll get 2 pages
      currentPage: 0, // Place where we'll keep an information about the
      // current page. Default is 1 (first page).
    };
  },
  mounted() {
    axios
      .get('http://reedsy-server.herokuapp.com/books')
      // .get('http://localhost:5000/books')
      .then(
        (response) => {
          response.data.books.forEach((book, index) => {
            // eslint-disable-next-line no-console
            console.log(book);

            // ! On my local machine, and on the server I get different URL paths to pictures
            // ! locally: "http://integral:5000/images/01.jpg"
            // ! server (Heroku): "http://7a44b503-1157-4a0d-8b1f-823741679c94:43530/images/01.jpg"
            // ! so let's just go through the response and replace the url with the last part
            // ! for example with "03.jpg"
            const n = book.cover.lastIndexOf('/');

            // Dynamically determining the port
            // const port = location.port ? `${location.port}` : '';
            // const port = 5000; // Ermm...we actually need the server's port
            /* eslint-disable no-unused-vars */
            const url = 'https://reedsy-server.herokuapp.com/images';
            // const url = `${location.protocol}//${location.hostname}:${port}/images`;
            const wholeUrl = `${url}/${book.cover.substring(n + 1)}`;
            // debugger;

            // Push a whole book (to a books array)
            this.books.push(book);
            // but replace the cover value by a modified value (which doesn't contain
            // that 7a44b503-1157-4a0d-8b1f-823741679c94, or similar, type of a string)
            this.books[index].cover = wholeUrl;
          });

          this.renderAList();
        },
      );
  },
  methods: {
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
    goToPage(newPageNumber) {
      // Goes from 0 (to 3 in our simple example) - because we have 4 pages
      this.currentPage = newPageNumber;
    },
  },
  watch: {
    // When data's "search" variable is changed, do the following
    search() {
      if (this.currentPage !== 0) {
        this.currentPage = 0;
      }
      this.renderAList();
    },
    booksPerPage() {
      if (this.booksPerPage < 1) {
        this.booksPerPage = 1; // Min Page Size
      } else if (this.booksPerPage > this.filteredBooks.length) {
        this.booksPerPage = this.filteredBooks.length; // Max Page Size
      }
      this.renderAList();
    },
    currentPage() {
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

        .search-books {
          height: 50px;
          font-size: 1.3rem;
          // width: 40%;
          text-align: center;
          margin: auto 30px;
          color: #757575;
          // border: thin solid lighten($color: $main-gold-color, $amount: 50);
          border: none;
          flex: 2;
        }

        .incrementDecrementPageSize {
          flex: 1;
          margin: auto;
          font-size: 1.3rem;

          .incrementPageSize,
          .decrementPageSize {
            cursor: pointer;
          }
        }
      }
    }

    .row {
      width: auto;
      // border: 1px solid blue;
    }
}
</style>
