import './App.css'
import imageOfTheHandyBag from "./assets/bag_1.png";
import imageOfTheStylishBag from "./assets/bag_2.png";
import imageOfTheSimpleBag from "./assets/bag_3.png";
import imageOfTheTrendyBag from "./assets/bag_4.png";
import imageOfTheBrand from "./assets/brand.png";
import imageOfOurStory from "./assets/our_story.png";
import Button from "./components/Button.jsx";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>

            <nav>
                <Button
                    buttonAction="to the collection"
                    description="to the collection"
                />
                <Button
                    buttonAction="shop all bags"
                    description="shop all bags"
                />
                <Button
                    buttonAction="/"
                    description="pre-orders"
                    disableButton={true}
                />
            </nav>

            <main>
                <Product
                    imageOfTheBag={imageOfTheHandyBag}
                    altTextOfTheBagImage="An image of the handy bag."
                    productDescription="The handy bag"
                    productPrice="€400,-"
                />
                <Product
                    imageOfTheBag={imageOfTheStylishBag}
                    altTextOfTheBagImage="An image of the stylish bag."
                    productDescription="The stylish bag"
                    productPrice="€250,-"
                />
                <Product
                    imageOfTheBag={imageOfTheSimpleBag}
                    altTextOfTheBagImage="An image of the simple bag."
                    productDescription="The simple bag"
                    productPrice="€300,-"
                />
                <Product
                    imageOfTheBag={imageOfTheTrendyBag}
                    altTextOfTheBagImage="An image of the trendy bag."
                    productDescription="The trendy bag"
                    productPrice="€150,-"
                />
            </main>

            <footer>
                <Tile tileTitle="the brand">
                    <p>lorem ipsum sit amet consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga
                        pariatur praesentium quia sequi similique sunt.</p>
                    <p>lorem ipsum sit amet consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga
                        pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
               <Tile
               tileImage={imageOfTheBrand}
               altTextOfTileImage="An image of the brand."
               />
               <Tile
                   tileImage={imageOfOurStory}
                   altTextOfTileImage="An image of our story."
               />
                <Tile tileTitle="our story">
                    <p>lorem ipsum sit amet consectetur adipiscing elit. Aliquid culpa dolorum enim excepturi, fuga
                        pariatur praesentium quia sequi similique sunt. lorem ipsum sit amet consectetur adipiscing
                        elit. Aliquid culpa dolorum enim excepturi, fuga
                        pariatur praesentium quia sequi similique sunt.</p>
                </Tile>
            </footer>
        </>
    )
}

export default App
