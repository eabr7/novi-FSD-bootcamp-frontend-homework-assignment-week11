import "./Tile.css";

function Tile({tileImage, tileTitle, altTextOfTileImage, children}) {
    return (

        <section className="/">
            <img src={tileImage} alt={altTextOfTileImage} />
            <h2>{tileTitle}</h2>
            {children}
        </section>

    );
}

export default Tile;