/**
 * file: js/js.js
 * project: mapbox workshop suggested solution
 **/
$(document).ready(function () {
	
    console.log("hi from js/js.js - the document is ready.");

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/asathoor/cjlosbtut7gct2ro3v6s7uqbx',
        center: [8.8, 53.07], // bremen
        zoom: 17,
		pitch: 54
    });

	// map on load: when the map loads certain features are collected
    map.on('load', function () {
		
		/*
		In this function we add features to the map
		such as layers and images
		the formula is: map.addSource, map.addLayer, map.addImage etc.
		*/
		
        map.loadImage( // in this case we load an image
            'images/atache.png', // image file
            function (error, image) { // error handler
                if (error) throw error;
                map.addImage('atache', image); // atache is a name for the image
                map.addSource('point', { 
                    'type': 'geojson', // geoJSON
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [10, 56] // lat lng
                                }
                            }
                        ]
                    }
                });
				
				// will add a layer to the image
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'atache', // adding the atache image to the layer
                        'icon-size': 0.1 // scaling the image if you need it
                    }
                });
            }
        );
    });

    /* jQuery Stuff */
    $('#btn_1').click(function () { // detect a click on the "button"

        // using flyTo options from the Mapbox API
        map.flyTo({
            center: [10, 56],
            zoom: 9,
            speed: .8,
            curve: 2,
			bearing: 33,
            easing(t) {
                return t;
            }
        });

        // JQ stuff: change some styles
        $(this).css("background-color", "lime"); // this === #btn_1
        $(this).css("color", "black"); // .. alternative: several styles in one
    })

}); // ends the document ready function
