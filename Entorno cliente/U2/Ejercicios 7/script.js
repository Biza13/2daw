// Inicializar el mapa
var map = L.map('map').setView([51.505, -0.09], 13); // Coordenadas iniciales y nivel de zoom

// Cargar la capa de mapa
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

//para que cuando cliques te salgan las coordenadas
var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

// Función para obtener la ubicación del usuario
function locateUser() {
    //con el if se verifica si el navegador soporta la api de geolocalizacion en caso de que no la soporte se ira al else
    if (navigator.geolocation) {
        //getCurrentPosition intenta acceder a nuestra posicion llamando a una funcion position
        navigator.geolocation.getCurrentPosition(position => {
            //en caso de que se hayan podido obtener la posicion, se extraen las coordenas del objeto position.coords el cual contiene mas datos
            const { latitude, longitude } = position.coords;

            // centrar la vista del mapa en la ubicacion del usuario, el 13 es el zoom
            map.setView([latitude, longitude], 13);

            // Añadir un marcador en la ubicación del usuario
            L.marker([latitude, longitude]).addTo(map)
                .bindPopup('Estás aquí')
                .openPopup();
        }, () => {
            //en caso de no poder acceder a la ubicacion del usuario
            alert('No se pudo obtener tu ubicación.');
        });
    } else {
        //en caso de que el navegador no soporte la api de geolocalizacion
        alert('La geolocalización no es soportada por tu navegador.');
    }
}

// Llamar a la función para localizar al usuario
locateUser();

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);