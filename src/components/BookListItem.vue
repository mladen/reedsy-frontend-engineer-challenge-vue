<template>
  <section class="one-book-container">
    <div class="books-basic-info">
      <span class="title">
        {{ index + 1 }}. &nbsp;

        <router-link v-bind:to="'/books/' + book.slug">
          {{ book.title }}
        </router-link>
      </span>

      &nbsp;

      <span class="rating">({{ book.rating }}/10)</span>

      <br><br>

      <span class="author">{{ book.author }}</span>

      <br><br>

      <p class="synopsis">{{ book.synopsis }}</p>

      <br><br>

      <upvote-button
        :upvoted="book.upvoted">
      </upvote-button>

      <span class="upvotes">&nbsp;&nbsp; Upvoted {{ book.upvotes }} times</span>
    </div>

    <div class="books-cover-page">
      <img v-bind:src="book.cover" alt="" srcset="">
    </div>
  </section>
</template>

<script>
import UpvoteButton from './Button';

export default {
  components: {
    'upvote-button': UpvoteButton,
  },
  props: ['book', 'index'],
};
</script>

<style lang="scss" scoped>
.one-book-container {
    background-color: white;
    padding: 40px 30px 25px;
    // margin: 10px;
    line-height: 20px;
    color: #292929;
    // font-weight: bold;
    // font-size: 1em;
    text-align: left;
    // max-width: 700px;
    flex: 1;

    &:nth-child(even) {
      background-color: #FAFAF3;
    }

    // Setting this as a flex container
    display: flex;
    flex-direction: row;

    .books-basic-info {
      // background-color: blue;
      width: 65%;
      // align-self: auto;

      .synopsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200ch;
      }

      .rating {
        font-size: 1.3rem;
      }
    }

    .books-cover-page {
      // background-color: red;
      width: 35%;
      padding: 5px 20px;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 10px;
      }
    }

    // }
}
</style>
