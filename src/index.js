import { content, getHomeContent } from './homepage';
import { getMenuContent } from './menu';
import { getAboutContent } from './about';
import { getLocationContent } from './location';
import './style.css'

function cleanContent() {
    const body = document.querySelector( "body" );
    content.textContent = "";
    content.remove();
    body.append( content );
}

document.querySelector( ".nav-home" ).addEventListener( "click", () => {
    cleanContent();
    getHomeContent();
} );

document.querySelector( ".nav-menu" ).addEventListener( "click", () => {
    cleanContent();
    getMenuContent();
} );

document.querySelector( ".nav-location" ).addEventListener( "click", () => {
    cleanContent();
    getLocationContent();
} );

document.querySelector( ".nav-about" ).addEventListener( "click", () => {
    cleanContent();
    getAboutContent();
} );