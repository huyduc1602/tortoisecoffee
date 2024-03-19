import ProductItem from './ProductItem/ProductItem';
import './Products.scss';

export default function Products() {
  const products = [
    {
      name: "Americano Coffee",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      price: "13.6"
    },
    {
      name: "Americano Coffee",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      price: "13.6"
    },
    {
      name: "Americano Coffee",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      price: "13.6"
    },
    {
      name: "Americano Coffee",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      price: "13.6"
    },
    {
      name: "Americano Coffee",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      price: "13.6"
    },
    {
      name: "Americano Coffee",
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/26d42fc0-cimg-01_1000000000000000000028.png",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod",
      price: "13.6"
    }
  ];

  return (
    <section id="products">
      <div className="container py-5">
        <h4>Special Online Shop</h4>
        <h2>Our Popular Products</h2>
        <div className="gallery row py-5">
          {products.map((product, key) => {
            return (
              <div className="col-md-4 pb-3" key={key}>
                <ProductItem name={product.name} image={product.image} description={product.description} price={product.price} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}