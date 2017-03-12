Vue.component('app-header', {

    template: '<div id="app-header">' +
    '<p>This is the app header</p>' +
    '<div class="notification"><slot></slot></div>' +
    '</div>'
});

Vue.component('app-footer', {

    template: '<div id="app-footer">' +
    '<p>This is the app footer</p>' +
    '<div class="notification is-warning"><slot></slot></div>' +
    '</div>'
});

Vue.component('content-slot', {

    template: '<div id="content"><slot><p>This is the content area</p></slot></div>'
});



Vue.component('app-layout', {

    template: '<div id="app-layout">' +
        '<div id="app-header">' +
        '<p>This is the app header</p>' +
        '<div class="notification"><slot name="header"></slot></div>' +
        '</div>' +
        '<div id="app-footer">' +
        '<p>This is the app footer</p>' +
        '<div class="notification is-warning"><slot name="footer"></slot></div>' +
        '</div>' +
    '</div>'
});


var app = new Vue({
    el: '#app',
    data: {
    }
});