const Product = ({ name, price }: { name: string; price: number }) => {
    return (
       <div>
          <h3>{name}</h3>
          <p>Price: ${price}</p>
       </div>
    );
};

export default Product;
