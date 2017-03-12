const Home = { template: '<div class="container"><h1>Home</h1></div>' };
const About = { template: '<div class="container"><h1>About</h1></div>' };
const Contact = { template: '<div class="container"><h1>Contact</h1></div>' };

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/contact',
        component: Contact
    }
];
const router = new VueRouter({ routes: routes });
const app = new Vue({ router }).$mount('#app');