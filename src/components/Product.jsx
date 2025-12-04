import "./Product.css";

function Product({labelText, imageOfTheBag, altTextOfTheBagImage, productDescription, productPrice}) {

    return (
        <article className="/">
            <span>{labelText}</span>
            <img src={imageOfTheBag} alt={altTextOfTheBagImage}/>
            <p>{productDescription}</p>
            <h4>€{productPrice},-</h4>
        </article>
    );

}

export default Product;