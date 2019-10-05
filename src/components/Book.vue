<template>
  <section class="one-book">
    {{ book.author }}
  </section>
</template>

<script>
export default {
  props: ['book'],
};
</script>

<style lang="scss" scoped>
.one-book {
    background-color: tomato;
    padding: 15px;
    margin: 10px;
    line-height: 20px;
    color: white;
    font-weight: bold;
    font-size: 2em;
    text-align: center;
}
</style>
