<template>
  <section class="book-details-container">
    <div class="title-and-upvotes-container">
      <div class="title-and-author">
        <span class="title">{{ book.title }}</span>

        <br><br>

        <span class="author">{{ book.author }}</span>
      </div>

      <div class="upvotes">Upvoted {{ book.upvotes }} times &nbsp;&nbsp;
        <upvote-button
          :upvoted="book.upvoted">
        </upvote-button>
      </div>
    </div>

    <div class="cover-image">
      <img v-bind:src="book.cover" alt="" srcset="">
    </div>

    <div class="synopsis">
      <span>Synopsis:</span>

      <br><br>

      {{ book.synopsis }}
    </div>

    <div class="rating">
      Rating: {{ book.rating }}/10
    </div>
  </section>
</template>

<script>
import axios from 'axios';
import UpvoteButton from './Button';

export default {
  components: {
    'upvote-button': UpvoteButton,
  },
  data() {
    return {
      slug: this.$route.params.slug,
      book: {},
    };
  },
  mounted() {
    axios
      .get(`http://reedsy-server.herokuapp.com/books/${this.slug}`)
      // .get(`http://localhost:5000/books/${this.slug}`)
      .then(
        (response) => {
          this.book = { ...response.data };

          // ! On my local machine, and on the server I get different URL paths to pictures
          // ! locally: "http://integral:5000/images/01.jpg"
          // ! server (Heroku): "http://7a44b503-1157-4a0d-8b1f-823741679c94:43530/images/01.jpg"
          // ! so let's just go through the response and replace the url with the last part
          // ! for example with "03.jpg"
          const n = this.book.cover.lastIndexOf('/');

          // Dynamically determining the port
          // const port = location.port ? `${location.port}` : '';
          // const port = 5000; // Ermm...we actually need the server's port
          const url = 'https://reedsy-server.herokuapp.com';
          this.book.cover = `${url}/images/${this.book.cover.substring(n + 1)}`;
          // eslint-disable-next-line no-console
          console.log(this.book);
        },
      );
  },
};
</script>

<style lang="scss" scoped>
.book-details-container {
  height: 100%;
  // padding: 10px;
  margin: auto;
  max-width: 700px;
  display: flex;
  // align-items: center;
  // justify-content: center;
  flex-direction: column;
  background-color: white;
  box-shadow: 0 0 10px lightgrey;

  .title-and-upvotes-container {
    display: flex;
    flex-direction: row;
    flex: 1;
    padding: 20px;
    text-align: left;

    .title {
      flex: 1;
    }
    .upvotes {
      flex: 1;
      margin: auto;
      text-align: right;
    }
  }

  .title-and-upvotes-container,
  .cover-image,
  .synopsis,
  .rating {
    flex: 1;
  }

  .synopsis {
    padding: 20px;

    span {
      font-weight: 700;
      font-size: 1.3rem;
    }
  }

  .cover-image img {
    // width: 100%;
    border-radius: 10px;
    height: 100%;
  }

  .rating {
    text-align: left;
    padding: 20px 0 20px 20px;
    font-weight: 700;
    font-size: 1rem;
  }

  .row {
    width: auto;
    // border: 1px solid blue;
    box-shadow: 0 0 10px lightgrey;
  }
}
</style>
