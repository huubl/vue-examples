var app = new Vue({
    el: '#app',
    data: {
        markdown: '# Hello'
    },

    computed:
    {
      compiledMarkdown: function () {
        return marked(this.markdown || '', { sanitize: true })
      }
    },
})