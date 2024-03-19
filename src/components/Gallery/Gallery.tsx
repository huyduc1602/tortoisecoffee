import './Gallery.scss';

export default function Gallery() {
  const gallery = [
    {
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/4cd48a88-anna-tukhfatullina-food-photographer-stylist-xs3ivs2dlso-unsplash_109q0dh09q06y00003p01o.jpg",
      title: "Americano Coffee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/3d79d961-martin-widenka-0ri80lqco18-unsplash_109q0cz09q06y00002a01o.jpg",
      title: "Black Coffee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/b98c237b-pablo-merchan-montes-tw4vcs9c-8-unsplash_109q0c509q06y00003i01o.jpg",
      title: "Espresso Coffee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/aa36b3d3-taisiia-shestopal-0rrhuwyzhbm-unsplash_109q0el09q06y00006j01o.jpg",
      title: "Cappuccino Coffee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/3d79d961-martin-widenka-0ri80lqco18-unsplash_109q0cz09q06y00002a01o.jpg",
      title: "Macchiato Coffee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    },
    {
      image: "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/b98c237b-pablo-merchan-montes-tw4vcs9c-8-unsplash_109q0c509q06y00003i01o.jpg",
      title: "Decaf Coffee",
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod"
    }
  ]

  return (
    <section id="gallery" className="gallery-container py-5">
      <div className="container text-center py-5">
        <h4>Our Special Menu</h4>
        <h2>Photo Gallery</h2>
        <div className="image-container">
          <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/310756ba-shape-01-1_106y08v000000000000028.png" alt="coffee" />
        </div>
        <div className="gallery row px-5">
          {gallery.map((item,key) => {
            return (
              <div className="col-md-4 pb-3" key={key}>
                <div className="card">
                  <div className="thumbnail">
                    <img src={item.image} className="card-img-top" alt={item.title} />
                  </div>
                  <div className="card-body">
                    <h4>{item.title}</h4>
                    <p className="card-text">{item.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}