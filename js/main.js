function initMap() {
    // The location of Uluru
    var beetroot = {lat: 48.9176274, lng: 24.7013752};
    // The map, centered at Uluru
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 16, center: beetroot});
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({position: beetroot, map: map, title: "Beetroot Academy"});
  };

//# sourceMappingURL=../sourcemaps/main.js.map

//# sourceMappingURL=../sourcemaps/main.js.map
