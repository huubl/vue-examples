const AccountMain = {
    template: '<div class="container">' +
    '<h1>Account</h1>' +
    '<ul>' +
        '<li><router-link to="/account">Account</router-link></li>' +
        '<li><router-link to="/account/security">Security</router-link></li>' +
        '<li><router-link to="/account/notifications">Notifications</router-link></li>' +
        '<li><router-link to="/account/billing">Billing</router-link></li>' +
    '</ul>' +
    '<router-view class="child"></router-view>' +
    '</div>'
};
const Account = { template: '<div class="content"><p>Account information</p></div>' };
const Security = { template: '<div class="content"><p>Security</p></div>' };
const Notifications = { template: '<div class="content"><p>Notifications</p></div>' };
const Billing = { template: '<div class="content"><p>Billing</p></div>' };

const routes = [
    {
        path: '/account',
        component: AccountMain,
        children: [
            { path:'', component: Account },
            { path:'security', component: Security },
            { path:'notifications', component: Notifications },
            { path:'billing', component: Billing },
        ]
    }
];
const router = new VueRouter({ routes: routes });
const app = new Vue({ router }).$mount('#app');