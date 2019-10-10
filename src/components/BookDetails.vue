<template>
  <section class="book-details-container">
    <div class="title-and-upvotes-container">
      <div class="title">
        <span class="title">{{ book.title }}</span>
        <br>
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
