import imgHouse from "./img/house.jpg";
import imgFood from "./img/food.jpg"
import { content } from "./homepage.js"

export function getMenuContent() {
    const title = document.createElement( "h1" );
    const imageDiv = document.createElement( "div" );
    const imageSecond = document.createElement( "img" );
    const descriptionFirst = document.createElement( "p" );
    const descriptionSecond = document.createElement( "p" );

    title.textContent = "Welcome to the Fish's Paradise !";
    imageDiv.classList.add( "img-bar" );
    imageSecond.src = imgFood;
    imageSecond.alt = "Some sushis on a wooden board";
    descriptionFirst.textContent = "Surrounded by an incredible landscape, you'll be welcome on a sanctuary of savours and smellings.";
    descriptionSecond.textContent = "Here, in a typycal japanese house of the 19th century, you will experience a food travel like no other one.";

    imageDiv.append( imageSecond );
    content.append( title, imageDiv, descriptionFirst, descriptionSecond );
    content.classList.add( "content-display" );
}