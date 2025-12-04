import "./Product.css";

function Product({textOfTheBestSellerLable, imageOfTheBag, altTextOfTheBagImage, productDescription, productPrice}) {

    return (

        <article className="/">
            <span>{textOfTheBestSellerLable}</span>
            <img src={imageOfTheBag} alt={altTextOfTheBagImage}/>
            <p>{productDescription}</p>
            <h4>{productPrice}</h4>
        </article>
    );


}

export default Product;