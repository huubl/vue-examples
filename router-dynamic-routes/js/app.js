const Blog = { template: '<div class="container"><h1>Blog post page - {{ $route.params.postname }}</h1></div>' };

const routes = [
    {
        path: '/blog/:postname',
        component: Blog
    }
];
const router = new VueRouter({ routes: routes });
const app = new Vue({ router }).$mount('#app');