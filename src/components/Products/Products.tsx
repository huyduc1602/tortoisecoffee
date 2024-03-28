import ProductItem from './ProductItem/ProductItem';
import './Products.scss';
import Product1 from '~/assets/product-1.jpg';
import Product2 from '~/assets/product-2.jpg';
import Product3 from '~/assets/product-3.jpg';
import Product4 from '~/assets/product-4.jpg';
import Product5 from '~/assets/product-5.jpg';
import Product6 from '~/assets/product-6.jpg';

export default function Products() {
  const products = [
    {
      name: "Cafe gói Robusta",
      image: Product1,
      price: "150.000"
    },
    {
      name: "Cafe lon",
      image: Product2,
      price: "25.000"
    },
    {
      name: "Túi Tote",
      image: Product3,
      price: "200.000"
    },
    {
      name: "Cafe gói America",
      image: Product4,
      price: "150.000"
    },
    {
      name: "Ly giữ nhiệt Tortoise",
      image: Product5,
      price: "50.000"
    },
    {
      name: "Ly sứ Tortoise",
      image: Product6,
      price: "80.000"
    }
  ];

  return (
    <section id="products">
      <div className="container py-5">
        <h4>Sản phẩm của chúng tôi</h4>
        <h2>Các sản phẩm phổ biến</h2>
        <div className="gallery row py-5">
          {products.map((product, key) => {
            return (
              <div className="col-md-4 pb-4" key={key} data-aos="fade-up"
                data-aos-anchor-placement="top-bottom">
                <ProductItem name={product.name} image={product.image} price={product.price} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}