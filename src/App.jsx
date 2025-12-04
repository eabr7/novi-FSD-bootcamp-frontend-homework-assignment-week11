import './App.css'

function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>


      <nav>
          <button className="/" type="button" onClick={() => console.log("to the collection")}>to the collection</button>
          <button className="/" type="button" onClick={() => console.log("shop all bags")}>shop all bags</button>
          <button className="/" type="button" disabled={true}>pre-orders</button>
      </nav>


      </>

  )
}

export default App
