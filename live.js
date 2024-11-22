function initialize() {
    var styleArray = [
      {
        stylers: [{ visibility: "off" }]
      },
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "poi",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "poi",
        elementType: "labels.text",
        stylers: [
          { visibility: "off" },
          { color: "#fff" },
          { saturation: 36 },
          { lightness: 2 }
        ]
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 17 }]
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 20 }]
      },
      {
        featureType: "landscape",
        elementType: "labels",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }]
      },
      {
        featureType: "road.highway",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#4DBBE9" }, { lightness: 17 }]
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [
          { visibility: "on" },
          { saturation: 36 },
          { color: "#000000" },
          { lightness: 16 }
        ]
      },
      {
        featureType: "road.highway",
        elementType: "labels.icon",
        stylers: [{ visibility: "on" }]
      },
      {
        featureType: "road.arterial",
        elementType: "geometry",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }]
      },
      {
        featureType: "road.arterial",
        elementType: "labels.text.fill",
        stylers: [{ saturation: 36 }, { color: "#ffffff" }, { lightness: 40 }]
      },
      {
        featureType: "road.local",
        elementType: "geometry.fill",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 17 }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text",
        stylers: [{ visibility: "on" }, { color: "#000000" }, { lightness: 16 }]
      },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 40 }]
      }
    ];
  
    var mapOptions = {
      zoom: 8,
      center: new google.maps.LatLng(-1.2907906, 36.808536),
      disableDefaultUI: true,
      styles: styleArray
    };
  
    var map = new google.maps.Map(
      document.getElementById("map-canvas"),
      mapOptions
    );
  
    var markerPosition = new google.maps.LatLng(-1.2719, 36.795521);
  
    var marker = new google.maps.Marker({
      position: markerPosition,
      map: map,
      icon: "https://i.postimg.cc/LXVcxZRm/corporation.png",
      title: "Trakexcel"
      // https://i.postimg.cc/13Pc9BjH/trakexcel-white.png
    });
  
    // DirectionsService object
    var directionsService = new google.maps.DirectionsService();
  
    // DirectionsRenderer object
    var directionsDisplay = new google.maps.DirectionsRenderer({
      map: map,
      panel: document.getElementById("directions-panel")
    });
  
    // Define the origin and destination for directions
    var start = new google.maps.LatLng(-1.280504, 36.817688);
    var end = new google.maps.LatLng(-1.2719, 36.795521);
  
    // Define the custom icon for point B
    var pointBIcon = {
      url: "https://i.postimg.cc/fRyCx622/skyscrapers.png", // Replace with the path to your icon image
      scaledSize: new google.maps.Size(54, 54), // Adjust the size of the icon
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(16, 32) // Adjust the anchor point
    };
  
    // Create a marker for point B with the custom icon
    var pointBMarker = new google.maps.Marker({
      position: start,
      map: map,
      icon: pointBIcon,
      title: "Nairobi,Kenya",
      label: ""
    });
  
    // Add an event listener to show an image on hover
    var infoWindow = new google.maps.InfoWindow({
      content:
        '<img src="https://i.postimg.cc/qqgSDjp4/2022-03-31.jpg"  style="width:160px;height:140px;margin:0;padding:0" />'
    });
  
    pointBMarker.addListener("mouseover", function () {
      infoWindow.open(map, pointBMarker);
    });
  
    pointBMarker.addListener("mouseout", function () {
      infoWindow.close();
    });
  
    var request = {
      origin: start,
      destination: end,
      travelMode: google.maps.TravelMode.DRIVING
    };
  
    // Get directions and display them on the map
    directionsService.route(request, function (response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        directionsDisplay.setDirections(response);
      }
    });
  
    function calculateRoute() {
      // code to calculate and display the route here
    }
  
    function clearRoute() {
      // code to clear the route and directions here
    }
  }
  
  google.maps.event.addDomListener(window, "load", initialize);
  
  //lets control the columns
  $(document).ready(function () {
    $("#col-md-8").toggleClass("col-md-8 col-md-11");
    $("#mapimagefake").toggleClass("col-md-4 col-md-1");
  
    var maphide = document.querySelectorAll(".maphide");
    var maplinksIcon = document.querySelectorAll(".menumap-body a svg");
    var mapLinksMain = document.querySelectorAll(".menumap-body a");
    var toggleButtonMap = document.getElementById("toggleButtonMap");
    var mapsidetitle = document.querySelector(".menumap-header-title");
  
    var texts = ["Find us", "Menu"];
  
    var currentState = 0;
  
    for (var i = 0; i < maphide.length; i++) {
      maphide[i].classList.toggle("maphideall");
    }
    for (var i = 0; i < maplinksIcon.length; i++) {
      maplinksIcon[i].classList.toggle("maplinksicon");
    }
  
    for (var i = 0; i < mapLinksMain.length; i++) {
      mapLinksMain[i].classList.toggle("maplinksmain");
    }
  
    currentState = 1 - currentState;
    mapsidetitle.innerHTML = texts[currentState];
  });
  
  //other
  
  let mapModal = document.querySelector("#map-modal"),
    mapModalClose = document.querySelector("#map-modal-close"),
    toggleButtonMap = document.querySelector("#toggleButtonMap"),
    toggleNavigation = document.querySelector("#toggleNavigation"),
    mapModalBody = document.querySelector(".modal-container-body"),
    directionsPanel = document.querySelector("#directions-panel"),
    mapModalTitle = document.querySelector(".modal-container-title");
  
  mapModalClose.addEventListener("click", () => {
    mapModal.classList.remove("map-modal-active");
  });
  
  toggleButtonMap.addEventListener("click", () => {
    mapModal.classList.remove("map-modal-active");
  });
  
  toggleNavigation.addEventListener("click", () => {
    mapModal.classList.add("map-modal-active");
    directionsPanel.style.display = "block";
    mapModalTitle.innerHTML = "Directions &nbsp;&#9992;";
    mapModalTitle.style.textAlign = "center";
  });
  
  //icons?
  feather.replace();
  
  // Just a tiny bit of JavaScript to add classnames to the HTML-element on toggle
  var html = document.getElementsByTagName("html");
  var radios = document.getElementsByName("themes");
  
  for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", function () {
      html[0].classList.remove(html[0].classList.item(0));
      html[0].classList.add(this.id);
    });
  }
  