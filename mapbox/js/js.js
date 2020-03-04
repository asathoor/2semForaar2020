/**
 * file: js/js.js
 * project: mapbox workshop suggested solution
 **/
$(document).ready(function () {
    console.log("hi from js/js.js - the document is ready.");

    mapboxgl.accessToken = 'pk.eyJ1IjoiYXNhdGhvb3IiLCJhIjoiY2oyd3hlbzU3MDA5NzJxbm9iMjczanJndCJ9.HahDB7Z1rrD5THIYQh6t4g';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/asathoor/ck7d5gplq11od1imzpb8hobsz',
        center: [-74.5, 40],
        zoom: 17,
    });

    map.on('load', function () {
        map.loadImage(
            'images/atache.png',
            function (error, image) {
                if (error) throw error;
                map.addImage('cat', image);
                map.addSource('point', {
                    'type': 'geojson',
                    'data': {
                        'type': 'FeatureCollection',
                        'features': [
                            {
                                'type': 'Feature',
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': [10, 56]
                                }
                            }
                        ]
                    }
                });
                map.addLayer({
                    'id': 'points',
                    'type': 'symbol',
                    'source': 'point',
                    'layout': {
                        'icon-image': 'cat',
                        'icon-size': 0.25
                    }
                });
            }
        );
    });

    /* jQuery Stuff */
    $('#btn_1').click(function () {

        // using flyTo options
        map.flyTo({
            center: [10, 56],
            zoom: 9,
            speed: .8,
            curve: 2,
            easing(t) {
                return t;
            }
        });

        // chage style after the click
        $(this).css("background-color", "lime"); // this === #btn_1
        $(this).css("color", "black");
    })

}); // ends the document ready function
