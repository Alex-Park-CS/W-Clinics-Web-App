const userLocation = [-122.964274, 49.236082]

// Function to display the map with the user's location and event pins
function showMap() {
    navigator.geolocation.getCurrentPosition(position => {
        const userLocation = [position.coords.longitude, position.coords.latitude];

        //-----------------------------------------
        // Define and initialize basic mapbox data
        //-----------------------------------------
        mapboxgl.accessToken = 'pk.eyJ1IjoiYWRhbWNoZW4zIiwiYSI6ImNsMGZyNWRtZzB2angzanBjcHVkNTQ2YncifQ.fTdfEXaQ70WoIFLZ2QaRmQ';

        const map = new mapboxgl.Map({
            container: 'map', // Container ID
            style: 'mapbox://styles/mapbox/streets-v11', // Styling URL
            center: userLocation, // Starting position
            zoom: 11.5 // Starting zoom
        });

        // Add user controls to map
        map.addControl(new mapboxgl.NavigationControl());

        // Continue with loading map features after the map has loaded
        map.on('load', () => {

            // Defines map pin icon for events
            map.loadImage(
                'https://cdn.iconscout.com/icon/free/png-256/pin-locate-marker-location-navigation-16-28668.png',
                (error, image) => {
                    if (error) throw error;

                    // Add the image to the map style.
                    map.addImage('eventpin', image); // Pin Icon

                    // READING information from "hikes" collection in Firestore
                    db.collection('clinics').get().then(clinics => {
                        const features = []; // Defines an empty array for information to be added to

                        clinics.forEach(doc => {
                            lat = doc.data().lat;
                            lng = doc.data().lng;
                            console.log(lat, lng);
                            coordinates = [lng, lat];
                            console.log(coordinates);
                            // Coordinates
                            event_name = doc.data().clinicName; // Event Name
                            hoursPreview = doc.data().hours + "<br><br>"; // Text Preview
                            distancePreview = Number((distanceFromCurrent(userLocation[0], userLocation[1], lng, lat)).toFixed(2))
                            console.log(typeof distancePreview)
                            
                            // Pushes information into the features array
                            features.push({
                                'type': 'Feature',
                                'properties': {
                                    'description': `<strong>${event_name}</strong><p> <br> ${hoursPreview}</p>
                                                    <p>${distancePreview} km away</p>
                                                    <a href="/clinic_profile_page.html?docID=${doc.id}" class="view-clinic-button" title="Opens in a same window">View Clinic</a>`
                                },
                                'geometry': {
                                    'type': 'Point',
                                    'coordinates': coordinates
                                }
                            });
                        });

                        // Adds features as a source of data for the map
                        map.addSource('places', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': features
                            }
                        });

                        // Creates a layer above the map displaying the pins
                        // by using the sources that was just added
                        map.addLayer({
                            'id': 'places',
                            'type': 'symbol',
                            // source: 'places',
                            'source': 'places',
                            'layout': {
                                'icon-image': 'eventpin', // Pin Icon
                                'icon-size': 0.1, // Pin Size
                                'icon-allow-overlap': true // Allows icons to overlap
                            }
                        });

                        //-----------------------------------------------------------------------
                        // Add Click event listener, and handler function that creates a popup
                        // that displays info from "clinic" collection in Firestore
                        //-----------------------------------------------------------------------
                        map.on('click', 'places', (e) => {
                            // Extract coordinates array.
                            // Extract description of that place
                            const coordinates = e.features[0].geometry.coordinates.slice();
                            const description = e.features[0].properties.description;

                            // Ensure that if the map is zoomed out such that multiple copies of the feature are visible, the popup appears over the copy being pointed to.
                            while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
                                coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
                            }

                            new mapboxgl.Popup()
                                .setLngLat(coordinates)
                                .setHTML(description)
                                .addTo(map);
                        });

                        //-----------------------------------------------------------------------
                        // Add mousenter event listener, and handler function to 
                        // Change the cursor to a pointer when the mouse is over the places layer.
                        //-----------------------------------------------------------------------
                        map.on('mouseenter', 'places', () => {
                            map.getCanvas().style.cursor = 'pointer';
                        });

                        // Defaults cursor when not hovering over the places layer
                        map.on('mouseleave', 'places', () => {
                            map.getCanvas().style.cursor = '';
                        });
                    });
                }
            );

            map.loadImage(
                'https://cdn-icons-png.flaticon.com/512/61/61168.png',
                (error, image) => {
                    if (error) throw error;

                    // Add the image to the map style with width and height values
                    map.addImage('userpin', image, { width: 10, height: 10 });

                    if (userLocation) {
                        map.addSource('userLocation', {
                            'type': 'geojson',
                            'data': {
                                'type': 'FeatureCollection',
                                'features': [{
                                    'type': 'Feature',
                                    'geometry': {
                                        'type': 'Point',
                                        'coordinates': userLocation
                                    },
                                    'properties': {
                                        'description': 'Your location'
                                    }
                                }]
                            }
                        });

                        // Creates a layer above the map displaying the user's location
                        map.addLayer({
                            'id': 'userLocation',
                            'type': 'symbol',
                            'source': 'userLocation',
                            'layout': {
                                'icon-image': 'userpin', // Pin Icon
                                'icon-size': 0.05, // Pin Size
                                'icon-allow-overlap': true // Allows icons to overlap
                            }
                        });

                        // Map On Click function that creates a popup displaying the user's location
                        map.on('click', 'userLocation', (e) => {
                            // Copy coordinates array.
                            const coordinates = e.features[0].geometry.coordinates.slice();
                            const description = e.features[0].properties.description;

                            new mapboxgl.Popup()
                                .setLngLat(coordinates)
                                .setHTML(description)
                                .addTo(map);
                        });

                        // Change the cursor to a pointer when the mouse is over the userLocation layer.
                        map.on('mouseenter', 'userLocation', () => {
                            map.getCanvas().style.cursor = 'pointer';
                        });

                        // Defaults
                        // Defaults cursor when not hovering over the userLocation layer
                        map.on('mouseleave', 'userLocation', () => {
                            map.getCanvas().style.cursor = '';
                        });
                    }
                });
        });
    }
    )
};


// Save the appointment document ID to local storage and redirect to appointment page
function saveAppmntDocumentIDAndRedirect() {
    let params = new URL(window.location.href) //get the url from the search bar
    let appointmentdoc = params.searchParams.get("docID");

    localStorage.setItem('appointmentID', appointmentdoc);
    window.location.href = 'appointment.html';
}

// Call the function to display the map with the user's location and event pins
showMap();

// Function to calculate distance between two coordinate points
function distanceFromCurrent(current_x, current_y, clinicLng, clinicLat){
    distance =(((111.320 * 0.555 * (current_x - clinicLng)) ** 2 + (110.574 * (current_y - clinicLat)) ** 2) ** 0.5)
    console.log(typeof distance)
    console.log(distance)
    return distance
}