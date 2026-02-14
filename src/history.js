import { content } from "./homepage.js"
import images from './images.js';


export function getHistoryContent() {
    const historyDiv = document.createElement( "div" );
    const image1 = document.createElement( "img" );
    const image2 = document.createElement( "img" );
    const text1 = document.createElement( "p" );
    const text2 = document.createElement( "p" );

    image1.src = images[ "history01.jpg" ];
    image2.src = images[ "history02.jpg" ];
    text1.textContent = "Since the dawn of time, humanity had been looking for the best ingredients to eat\n\nOur family reaches this house 2 centuries ago\n\nAnd from then, we begin to cook the fresh fish from the river";
    text2.textContent = "Our commitment is to bring you the best taste experience possible\n\nAnd so share with you the most important thing for us : our History";

    historyDiv.classList.add( "history" );

    historyDiv.append( image1, text1, text2, image2 );
    content.append( historyDiv );
}