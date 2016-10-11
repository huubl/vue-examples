Vue.component('comment', {
    template: '<div class="comment">' +
            '<h2>{{ commentdata.name }}</h2>' +
            '<p>{{ commentdata.text }}</p>' +
            '<hr/>' +
    '</div>',
    props: ['commentdata']
});

Vue.component('comment-list', {
    template: '<div class="comment-list"><comment v-for="commentdata in comments" v-bind:commentdata="commentdata"></comment></div>',
    props: ['comments']
});

Vue.component('comment-form', {
    template: '<form v-on:submit.prevent="postComment">' +
        '<p><label for="name">Name</label><input type="text" name="name" id="name" v-model="name" placeholder="Enter name"></p>' +
        '<p><label for="text">Comment</label><textarea name="text" id="text" v-model="text" placeholder="Enter comment"></textarea></p>' +
        '<p><label for="submit"></label><button name="submit" id="submit" class="btn btn-primary">Submit</button></p>' +
    '</form>',
    data: function(){
        return {
            name: '',
            text: ''
        };
    },
    methods: {
        postComment: function()
        {
            var comment = { 'name': this.name, 'text': this.text };

            // POST /someUrl
            this.$http.post('/api/comments', comment).then((response) => {
                this.$parent.comments.push(comment);
            }, (response) => {
                console.log('Error');
            });
        }
    }
});

Vue.component('comments', {
    template: '<div class="comments"><comment-list v-bind:comments="comments"></comment-list><comment-form></comment-form></div>',
    data: function()
    {
        return {
            comments : []
        }
    },
    created: function()
    {
        return this.$http.get('/api/comments').then((response) => {
            this.comments = response.body;
        });
    },
    methods:
    {
        addComment: function( comment )
        {
            this.comments.push( comment );
        }
    }
});


var app = new Vue({
    el: '#app',
})