import "./Tile.css";

function Tile(props) {
    return (

        <section className="/">
            <img src={props.tileImage} alt={props.altTextOfTileImage} />
            <h2>{props.tileTitle}</h2>
            {props.children}
        </section>

    );
}

export default Tile;