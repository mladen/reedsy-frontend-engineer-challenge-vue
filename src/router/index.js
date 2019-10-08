import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld';
import BookList from '@/components/BookList';
import BookDetails from '@/components/BookDetails';

Vue.use(Router);

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'BookList',
      component: BookList,
    },
    {
      path: '/books/:slug',
      name: 'BookDetails',
      component: BookDetails,
    },
  ],
});
