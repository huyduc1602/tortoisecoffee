import './FollowInstagram.scss';

export default function FollowInstagram() {
  const images = [
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/852773f8-instagram1_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/2a4601fd-instagram2_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/339a06f2-instagram3_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/d434b69a-instagram7_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/a6123231-instagram6_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/d434b69a-instagram7_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/443843e4-instagram8_108m08m00000000000001o.jpg",
    "http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/a971018d-instagram9_108m08m00000000000001o.jpg"
  ]

  return (
    <section id="follow-instagram" className="follow-instagram-container py-5">
      <div className="container text-center py-5">
        <h4>Follow Us Now</h4>
        <h2>Follow on Instagram</h2>
        <div className="gallery row px-5">
          {images.map((image, key) => {
            return (
              <div className="col-md-3 py-3" key={key}>
                <div className="card rounded-5">
                  <div className="thumbnail">
                    <img src={image} className="card-img" alt="Image Instagram" />
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