import './App.css'
import Button from "./components/Button.jsx";
import imageOfTheHandyBag from "./assets/bag_1.png";
import imageOfTheStylishBag from "./assets/bag_2.png";
import imageOfTheSimpleBag from "./assets/bag_3.png";
import imageOfTheTrendyBag from "./assets/bag_4.png";
import Product from "./components/Product.jsx";


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





      </>

  )
}

export default App
