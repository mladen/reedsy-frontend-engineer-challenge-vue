<template>
  <section class="one-book-container">
    <div class="left-part">
      <span class="title"><span>{{ index + 1 }}</span>. {{ book.title }}</span>
      <span class="rating">({{ book.rating }}/10)</span>

      <br><br>

      <span class="author">{{ book.author }}</span>

      <br><br>

      <p class="synopsis">{{ book.synopsis }}</p>
    </div>
  </section>
</template>

<script>
export default {
  props: ['book', 'index'],
};
</script>

<style lang="scss" scoped>
.one-book-container {
    background-color: white;
    padding: 15px;
    // margin: 10px;
    line-height: 20px;
    color: #292929;
    // font-weight: bold;
    font-size: 1em;
    text-align: left;
    max-width: 700px;

    .left-part {
      .title {
        color: #A97721;
        font-size: 2em;
        font-weight: 700;
      }

      .rating {
        font-size: 1.5em;
      }

      .author {
        color: #555555;
        font-size: 1em;
        font-style: italic;
      }

      .synopsis {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        max-width: 200ch;
      }
    }
}
</style>
