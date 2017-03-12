const Home = { template: '<div class="container"><h1>Home</h1></div>' };
const About = { template: '<div class="container"><h1>About</h1></div>' };
const Portfolio = { template: '<div class="container"><h1>Portfolio</h1></div>' };
const Blog = { template: '<div class="container"><h1>Blog</h1></div>' };
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
        path: '/portfolio',
        component: Portfolio
    },
    {
        path: '/blog',
        component: Blog
    },
    {
        path: '/contact',
        component: Contact
    }
];
const router = new VueRouter({ routes: routes });
const app = new Vue({ router,

    data: {
        selectedAnimationIn: '',
        selectedAnimationOut: ''
    },

    methods: {
        enter: function(el)
        {
            el.classList.add('animated');
            el.classList.add(this.selectedAnimationIn);
        },
        leave: function(el)
        {
            el.classList.add('animated');
            el.classList.add(this.selectedAnimationOut);
        }
    }
}).$mount('#app');