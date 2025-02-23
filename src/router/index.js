import Vue from 'vue';
import Router from 'vue-router';
import home from '@/components/Home';
import blog from '@/components/Blog';
import gallery from '@/components/Gallery';
import about from '@/components/About';
import contact from '@/components/Contact';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
    },
    {
      path: '/blog',
      name: 'blog',
      component: blog,
    },
    {
      path: '/gallery',
      name: 'gallery',
      component: gallery,
    },
    {
      path: '/about',
      name: 'about',
      component: about,
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact,
    },
  ],
});
