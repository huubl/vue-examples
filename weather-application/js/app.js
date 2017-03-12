Vue.component('coord', {
    props: ['coord'],

    template: '<div id="coord" class="col-xs-4">' +
                '<h2>Coordinates</h2>' +
                '<p><strong>Lng</strong> {{ coord.lon }}</p>' +
                '<p><strong>Lat</strong> {{ coord.lat }}</p></div>'
});

Vue.component('weather-display', {
    props: ['weatherDisplay'],

    template: '<div id="weatherDisplay" class="col-xs-4">' +
                '<h2>{{ weatherDisplay.main }}</h2>' +
                '<p>{{ weatherDisplay.description }}</p>' +
                '</div>'
});

Vue.component('temperature', {
    props: ['temperature'],

    methods: {
        displayTemp: function( temp )
        {
            return parseFloat(temp - 273.15).toFixed(2);
        }
    },

    template: '<div id="temp" class="col-xs-4">' +
                '<h2>Temperature</h2>' +
                '<p>Avg Temp - {{ displayTemp(temperature.temp) }}c</p>' +
                '<p>Min Temp - {{ displayTemp(temperature.temp_min) }}c</p>' +
                '<p>Max Temp - {{ displayTemp(temperature.temp_max) }}c</p>' +
                '</div>'
});

Vue.component('winds', {
    props: ['wind'],

    methods: {
        degreesToCompass: function(deg)
        {
            var val = Math.floor((deg / 22.5) + 0.5);
            var dir = ["N","NNE","NE","ENE","E","ESE", "SE", "SSE","S","SSW","SW","WSW","W","WNW","NW","NNW"];

            return dir[(val % 16)];
        }
    },

    template: '<div id="wind" class="col-xs-4">' +
                '<h2>Wind</h2>' +
                '<p>Speed - {{ wind.speed }}</p>' +
                '<p>Directions - {{ degreesToCompass(wind.deg) }}</p>' +
                '</div>'
});

Vue.component('clouds', {
    props: ['cloud'],

    template: '<div id="cloud" class="col-xs-4">' +
                '<h2>Clouds</h2>' +
                '<p>Coverage - {{ cloud.all }}%</p>' +
                '</div>'
});

Vue.component('sun', {
    props: ['sun'],

    methods: {
        timestampToDate: function( timestamp ){
            var date = new Date(timestamp*1000);
            return date.toString();
        }
    },

    template: '<div id="sun" class="col-xs-4">' +
                '<h2>Sun</h2>' +
                '<p>Sunrise - {{ timestampToDate(sun.sunrise) }}</p>' +
                '<p>Sunset - {{ timestampToDate(sun.sunset) }}</p>' +
            '</div>'
});

Vue.component('weather', {

    data: function(){
        return {
            location: '',
            apiKey: '05911854df7aa0be884df72549a75fd9',
            weather: [],
            displayWeather: false
        }
    },

    methods: {
        getWeather: function()
        {
            return this.$http.get('http://api.openweathermap.org/data/2.5/weather?q='+ this.location +'&appid=' + this.apiKey).then((response) => {
                this.weather = response.body;
                this.displayWeather = true
            }, (response) => {
                this.weather = [];
                this.displayWeather = false
            });
        }
    },

    template: '<div id="weatherApp"><form v-on:submit.prevent="getWeather"><p><input type="text" name="location" v-model="location"></p><p>' +
                '<button class="btn btn-primary">Search</button>' +
                '</p>' +
            '</form>' +
            '<div v-if="displayWeather" class="container display-weather-section"><h1>{{ weather.name }}</h1>' +
            '<coord v-bind:coord="weather.coord"></coord>' +
            '<weather-display v-bind:weatherDisplay="weather.weather[0]"></weather-display>' +
            '<temperature v-bind:temperature="weather.main"></temperature>' +
            '<winds v-bind:wind="weather.wind"></winds>' +
            '<clouds v-bind:cloud="weather.clouds"></clouds>' +
            '<sun v-bind:sun="weather.sys"></sun>' +
            '</div></div>'
});

var app = new Vue({
    el: '#app',
    data: {
    }
});