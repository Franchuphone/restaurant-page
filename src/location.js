import { content } from "./homepage.js"
import images from './images.js';



export function getLocationContent() {

    let mapDiv = document.createElement( "div" );
    mapDiv.classList.add( "map" );
    content.append( mapDiv );

    let map = L.map( mapDiv );

    L.tileLayer( 'http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    } ).addTo( map );

    var target = L.latLng( '47.504142', '19.050525' );

    map.setView( target, 13 );

    L.marker( target ).addTo( map );

}