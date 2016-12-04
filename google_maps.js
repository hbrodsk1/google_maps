var marker;
var map;

function myMap() {
	var mapCanvas = document.getElementById('map');

	var mapOptions = {
		center: new google.maps.LatLng(51.5, -0.2),
		zoom: 10
	}

	map = new google.maps.Map(mapCanvas, mapOptions);

	marker = new google.maps.Marker({position: mapOptions.center});
	marker.setMap(map);

	

}

var updateMap = function() {
	var lat = parseFloat(document.getElementById('latitude').value);
	var lng = parseFloat(document.getElementById('longitude').value);
	var msg = (document.getElementById('message').value);
	if(lat && lng) {
		var newLatLng = new google.maps.LatLng(lat, lng);
		
		map.setCenter({lat: lat, lng: lng});
		marker.setPosition(newLatLng);

		var infowindow = new google.maps.InfoWindow({
			content: msg
		});

		google.maps.event.addListener(marker, 'click', function() {
			infowindow.open(map, marker);
		});
	}	else {
		alert("Please enter all info!");
	}

}



