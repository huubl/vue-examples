var calculator_button = Vue.component('calculator-button', {
    template:  '<button>{{ this.text }}</button>',
    props: {
        text: '',
    }
});

var calculator = Vue.component('calculator', {
    template: '<div class="calculator">' +
            '<p><input type="text" v-model="displayContents" readonly /></p>' +
            '<div class="numbers"><calculator-button v-for="n in 10" v-bind:text="n-1" v-on:click.native="addToSum(n-1)"></calculator-button></div>' +
            '<div class="conditions">' +
            '<calculator-button text="+" v-on:click.native="addition"></calculator-button>' +
            '<calculator-button text="-" v-on:click.native="subtract"></calculator-button>' +
            '<calculator-button text="*" v-on:click.native="multiple"></calculator-button>' +
            '<calculator-button text="/" v-on:click.native="divide"></calculator-button>' +
            '</div> ' +
            '<div class="equals">' +
            '<calculator-button text="C" v-on:click.native="clear"></calculator-button>' +
            '<calculator-button text="=" v-on:click.native="sum"></calculator-button>' +
            '</div>' +
            '</div>'
    ,
    data: function () {
        return {
            sumContents: [],
            answer: '',
            answered: false
        };
    },
    methods:
    {
        addToSum: function(number)
        {
            if(this.answered)
            {
                return;
            }

            this.sumContents.push(number);
        },
        addition: function()
        {
            this.addToSum(' + ');
        },
        subtract: function()
        {
            this.addToSum(' - ');
        },
        multiple: function()
        {
            this.addToSum(' * ');
        },
        divide: function()
        {
            this.addToSum(' / ');
        },
        sum: function()
        {
            try
            {
                for (var i in this.sumContents) {
                    this.answer += this.sumContents[i];
                }

                this.answer = eval(this.answer);

                this.sumContents.push(' = ');
                this.sumContents.push(this.answer);

                this.answered = true;
            }
            catch(er)
            {

            }
        },
        clear: function()
        {
            this.sumContents = [];
            this.answer = '';
            this.answered = false;
        }
    },
    computed:
    {
        displayContents: function(){
            return this.sumContents.join('');
        }
    }
});

var app = new Vue({
    el: '#app',
})