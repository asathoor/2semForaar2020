# Mapbox Samples

Here are some of the Mapbox samples from today's class. Remember to change the token and the url to your map style.

## Token and Style

~~~~
mapboxgl.accessToken = 'YOUR-TOKEN-HERE';
		var map = new mapboxgl.Map({
			container: 'map', // container id
			style: 'mapbox://styles/YOUR-STYLE-URL-HERE', // stylesheet location
			center: [10.185, 56.179], // starting position [lng, lat]
			pitch: 66, // pitch in degrees
			bearing: 0, // bearing in degrees
			zoom: 8 // starting zoom
		});
~~~~

## jQuery

Probably jQuery will come in handy. In the head section link to jQuery either to the CDN or to a file. Below we link to a CDN:

~~~~
<script 
  src="https://code.jquery.com/jquery-3.4.1.min.js" 
  integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
  crossorigin="anonymous"
  ></script>
~~~~
