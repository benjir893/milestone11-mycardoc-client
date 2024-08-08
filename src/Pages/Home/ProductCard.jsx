

const ProductCard = ({ product }) => {
    const { title, price, img, description } = product;
    return (
        <div className="card bg-base-100 w-96 shadow-xl">
            <figure>
                <img
                    src={img}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>Price: ${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary bg-orange-500">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;