// on delay scroll https://codepen.io/mikun/pen/wJBeRK

// When the user scrolls the page, execute myFunction 
 // light box
$(document).ready(function(){

  function openModal() {
    document.getElementById('myModal').style.display = "block";
  }

  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }


  function plusSlides(n) {
    showSlides(slideIndex += n);
  }

  function currentSlide(n) {
    showSlides(slideIndex = n);
  }

  function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

   slides[slideIndex-1].style.display = "block";

    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }


// map
  mapboxgl.accessToken = 'pk.eyJ1IjoiYnJpbGxpYW50a2luIiwiYSI6ImNqb251ZGd6ZDBnOGozcW4xcTlibWVxNjIifQ.qEtt5skJyTsCOpGb3e1rZA';

// map_whole
var map1 = new mapboxgl.Map({
  container: 'Whole_map_in_grid',
    style: 'mapbox://styles/brilliantkin/cjonueman0dja2rmtbs5s349s',
    zoom: 5.64,
    center: [-18.846, 64.952]
});

var frameCount1 = 90;
var currentImage1 = 0;

function getPath1() {
    return "https://raw.githubusercontent.com/Xi-Jin/puilab/master/Assignment%207/website_code/assets/gif/wholeIsland/"+ currentImage1 +".png";
}

map1.on('load', function() {

    map1.addSource("wholemap", {
        type: "image",
        url: getPath1(),
        coordinates: [
            [-24, 65.9],
            [-12.3, 65.9],
            [-12.3, 63.419],
            [-24, 63.419]
        ]
    });
    map1.addLayer({
        id: "wholemap-layer",
        "type": "raster",
        "source": "wholemap",
        "paint": {
            "raster-fade-duration": 0
        }
    });

    setInterval(function() {
        currentImage1 = (currentImage1 + 1) % frameCount1;
        map1.getSource("wholemap").updateImage({ url: getPath1() });
    }, 100);
  });


// map_rek vik
  var map2 = new mapboxgl.Map({
  container: 'map_rek_vik',
    style: 'mapbox://styles/brilliantkin/cjonueman0dja2rmtbs5s349s',
    zoom: 7,
    center: [-20.44397, 64.06333]
});

var frameCount2 = 5;
var currentImage2 = 0;

function getPath2() {
    return "https://raw.githubusercontent.com/Xi-Jin/puilab/master/Assignment%207/website_code/assets/gif/rek2vik/rek-to-vik_0000_Layer-35.png";
}

map2.on('load', function() {

    map2.addSource("rekvik", {
        type: "image",
        url: getPath2(),
        coordinates: [
            [-21.953, 64.137],
            [-19.001, 64.137],
            [-19.001, 63.419],
            [-21.953, 63.419]
        ]
    });
    map2.addLayer({
        id: "rekvik-layer",
        "type": "raster",
        "source": "rekvik",
        "paint": {
            "raster-fade-duration": 0
        }
    });

    setInterval(function() {
        currentImage2 = (currentImage2 + 1) % frameCount2;
        map2.getSource("rekvik").updateImage({ url: getPath2() });
    }, 100);
  });

// // map vik hof
// var map = new mapboxgl.Map({
//   container: 'map_vik_hof',
//     style: 'mapbox://styles/brilliantkin/cjonueman0dja2rmtbs5s349s',
//     zoom: 7,
//     center: [-16.785, 64.031]
// });

// var frameCount = 5;
// var currentImage = 0;

// function getPath3() {
//     return "https://raw.githubusercontent.com/Xi-Jin/puilab/master/Assignment%207/website_code/assets/gif/rek2vik/rek-to-vik_0000_Layer-35.png";
// }

// map.on('load', function() {

//     map.addSource("vikhof", {
//         type: "image",
//         url: getPath3(),
//         coordinates: [
//             [-21.953, 64.137],
//             [-19.001, 64.137],
//             [-19.001, 63.419],
//             [-21.953, 63.419]
//         ]
//     });
//     map.addLayer({
//         id: "vikhof-layer",
//         "type": "raster",
//         "source": "vikhof",
//         "paint": {
//             "raster-fade-duration": 0
//         }
//     });

//     setInterval(function() {
//         currentImage = (currentImage + 1) % frameCount;
//         map.getSource("vikhof").updateImage({ url: getPath3() });
//     }, 300);
//   });

// // map hof be
// var map = new mapboxgl.Map({
//   container: 'map_hof_be',
//     style: 'mapbox://styles/brilliantkin/cjonueman0dja2rmtbs5s349s',
//     zoom: 7,
//     center: [-13.64512, 64.94192]
// });

// var frameCount = 5;
// var currentImage = 0;

// function getPath4() {
//     return "https://raw.githubusercontent.com/Xi-Jin/puilab/master/Assignment%207/website_code/assets/gif/rek2vik/rek-to-vik_0000_Layer-35.png";
// }

// map.on('load', function() {

//     map.addSource("hofbe", {
//         type: "image",
//         url: getPath4(),
//         coordinates: [
//             [-21.953, 64.137],
//             [-19.001, 64.137],
//             [-19.001, 63.419],
//             [-21.953, 63.419]
//         ]
//     });
//     map.addLayer({
//         id: "hofbe-layer",
//         "type": "raster",
//         "source": "hofbe",
//         "paint": {
//             "raster-fade-duration": 0
//         }
//     });

//     setInterval(function() {
//         currentImage = (currentImage + 1) % frameCount;
//         map.getSource("hofbe").updateImage({ url: getPath4() });
//     }, 300);
//   });

// // map be ak
// var map = new mapboxgl.Map({
//   container: 'map_be_ak',
//     style: 'mapbox://styles/brilliantkin/cjonueman0dja2rmtbs5s349s',
//     zoom: 7,
//     center: [-16.39383, 65.62130]
// });

// var frameCount = 5;
// var currentImage = 0;

// function getPath5() {
//     return "https://raw.githubusercontent.com/Xi-Jin/puilab/master/Assignment%207/website_code/assets/gif/rek2vik/rek-to-vik_0000_Layer-35.png";
// }

// map.on('load', function() {

//     map.addSource("beak", {
//         type: "image",
//         url: getPath5(),
//         coordinates: [
//             [-21.953, 64.137],
//             [-19.001, 64.137],
//             [-19.001, 63.419],
//             [-21.953, 63.419]
//         ]
//     });
//     map.addLayer({
//         id: "beak-layer",
//         "type": "raster",
//         "source": "beak",
//         "paint": {
//             "raster-fade-duration": 0
//         }
//     });

//     setInterval(function() {
//         currentImage = (currentImage + 1) % frameCount;
//         map.getSource("beak").updateImage({ url: getPath5() });
//     }, 300);
//   });

// // map ak rek
// var map = new mapboxgl.Map({
//   container: 'map_ak_rek',
//     style: 'mapbox://styles/brilliantkin/cjonueman0dja2rmtbs5s349s',
//     zoom: 7,
//     center: [-20.22400, 64.97565]
// });

// var frameCount = 5;
// var currentImage = 0;

// function getPath6() {
//     return "https://raw.githubusercontent.com/Xi-Jin/puilab/master/Assignment%207/website_code/assets/gif/rek2vik/rek-to-vik_0000_Layer-35.png";
// }

// map.on('load', function() {

//     map.addSource("akrek", {
//         type: "image",
//         url: getPath6(),
//         coordinates: [
//             [-21.953, 64.137],
//             [-19.001, 64.137],
//             [-19.001, 63.419],
//             [-21.953, 63.419]
//         ]
//     });
//     map.addLayer({
//         id: "akrek-layer",
//         "type": "raster",
//         "source": "akrek",
//         "paint": {
//             "raster-fade-duration": 0
//         }
//     });

//     setInterval(function() {
//         currentImage = (currentImage + 1) % frameCount;
//         map.getSource("akrek").updateImage({ url: getPath6() });
//     }, 300);
//   });
})