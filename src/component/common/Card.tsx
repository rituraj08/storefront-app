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
  const { product } = props;
  return (
    <div>
      <h2>{product.title}</h2>
      <img src={product.images[0]} alt={product.title} className="card" />
      <p style={{backgroundColor: "lightbeige"}}>{product.description}</p>
      <b>
        {" "}
        <p>{product.price}</p>
      </b>
    </div>
  );
};

export default Card;
