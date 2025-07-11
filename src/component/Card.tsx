interface Product {
    title: string;
    images: string[];
    description: string;
    price: number;
}

interface CardProps {
    product: Product;
}

const Card = (props: CardProps) => {

    const {product} = props;
    return (
        <div>
            <h1>{product.title}</h1>
            <img src={product.images[0]} alt={product.title} style={{ width: "300px" }} />
            <p>{product.description}</p>
            <p>{product.price}</p>
        </div>
    )
}

export default Card;
