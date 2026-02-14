import { content, getHomeContent } from './homepage';
import { getMenuContent } from './menu';
import { getHistoryContent } from './history';
import { getLocationContent } from './location';
import './style.css'

function cleanContent() {
    const footer = document.querySelector( "footer" );
    content.innerHTML = "";
    content.className = "content-display";
    content.remove();
    footer.before( content );
}

document.querySelector( ".nav-home" ).addEventListener( "click", () => {
    cleanContent();
    content.classList.add( "home" );
    getHomeContent();
} );

document.querySelector( ".nav-menu" ).addEventListener( "click", () => {
    cleanContent();
    content.classList.add( "menu" )
    getMenuContent();
} );

document.querySelector( ".nav-location" ).addEventListener( "click", () => {
    cleanContent();
    getLocationContent();
} );

document.querySelector( ".nav-history" ).addEventListener( "click", () => {
    cleanContent();
    getHistoryContent();
} );