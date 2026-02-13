import { content } from "./homepage.js"
import images from './images.js';

class menuItem {

    constructor ( name, description, price, image ) {
        this.name = name;
        this.description = description;
        this.price = price;
        this.image = image;
    }

    get priceEuro() {
        return `${ this.price } €`;
    }

}

const menuList = [];
menuList[ 0 ] = new menuItem( "California Roll Salmon", "A classic savour from the west.\nMade with fresh salmon fish from our coasts", 10, "sushi-california-roll-salmon.jpg" );
menuList[ 1 ] = new menuItem( "Edonae sushi", "Traditional sushi from Tokyo.\nA delicious mix of vinegared rice and shrimp marinated in soy sauce", 15, "sushi-edomae.jpg" );
menuList[ 2 ] = new menuItem( "Gunkan maki", "A strip of nori seaweed wrapping a ball of rice.\nTopping made with finest fish's eggs", 12, "sushi-gunkan.jpg" );
menuList[ 3 ] = new menuItem( "Maki cucumber sushi", "For vegeterian lovers : nori seaweed and sea cucumber.\nA silent explosion in your mouth", 25, "sushi-maki-cucumber.jpg" );
menuList[ 4 ] = new menuItem( "Sashimi salmon", "They name it the forgotten star.\nSalmon on its perfect shape : freshly cut", 50, "sushi-sashimi-salmon.jpg" );
menuList[ 5 ] = new menuItem( "Ura maki tuna", "If you don't know it, you'll never forget it.\nTuna, nori seaweed and a lot of secrets.", 35, "sushi-ura-maki.jpg" )


export function getMenuContent() {
    for ( let i = 0; i < menuList.length; i++ ) {
        const itemDiv = document.createElement( "div" );
        const itemName = document.createElement( "h2" );
        const itemDescription = document.createElement( "p" );
        const itemPrice = document.createElement( "p" );
        const itemImage = document.createElement( "img" );

        itemName.textContent = menuList[ i ].name;
        itemDescription.textContent = menuList[ i ].description;
        itemPrice.textContent = menuList[ i ].priceEuro;
        itemImage.src = images[ menuList[ i ].image ];
        itemImage.alt = menuList[ i ].name;

        itemDiv.append( itemName, itemDescription, itemPrice, itemImage );

        content.append( itemDiv );
    }
}