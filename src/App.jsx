import './App.css'
import Button from "./components/Button.jsx";
import imageOfTheHandyBag from "./assets/bag_1.png";
import imageOfTheStylishBag from "./assets/bag_2.png";
import imageOfTheSimpleBag from "./assets/bag_3.png";
import imageOfTheTrendyBag from "./assets/bag_4.png";


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
          <article className="/">
              <span>Best seller</span>
              <img src={imageOfTheHandyBag} alt="An image of the handy bag."/>
              <p>The handy bag</p>
              <h4>€400,-</h4>
          </article>
          <article className="/">
              <span>Best seller</span>
              <img src={imageOfTheStylishBag} alt="An image of the stylish bag."/>
              <p>The stylish bag</p>
              <h4>€250,-</h4>
          </article>
          <article className="/">
              <span>Best seller</span>
              <img src={imageOfTheSimpleBag} alt="An image of the simple bag."/>
              <p>The simple bag</p>
              <h4>€300,-</h4>
          </article>
          <article className="/">
              <span>Best seller</span>
              <img src={imageOfTheTrendyBag} alt="An image of the trendy bag."/>
              <p>The trendy bag</p>
              <h4>€150,-</h4>
          </article>
      </main>





      </>

  )
}

export default App
