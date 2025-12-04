import "./Tile.css";

function Tile({tileImage, altTextOfTileImage, tileTitle, tileDescription}) {
    return (

        <section className="/">
            <img src={tileImage}/> alt={altTextOfTileImage} />
            <h2>{tileTitle}</h2>
            <p>{tileDescription}</p>
        </section>

    );
}

export default Tile;