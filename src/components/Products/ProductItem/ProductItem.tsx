import './ProductItem.scss';

interface PropsProductItem { name: string, image: string, description: string, price: string }

export default function ProductItem({ name, image, description, price }: PropsProductItem) {
  return (
    <article className="product">
      <div className="product-wrapper">
        <figure>
          <img loading="lazy" src={image} alt={name} />
        </figure>
        <div className="product-body">
          <h2>{name}</h2>
          <p>
            {description}
          </p>
          <p className="card-text price">${price}</p>
          <a href="#" className="read-more">
            Buy now
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </article>
  );
}