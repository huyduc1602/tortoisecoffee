export default function AboutUs() {
  return (
    <section id="about-us" className="py-5">
      <div className="container mx-auto row py-5">
        <div className="col-md-6">
          <h4>About Us</h4>
          <h2>There is all about Coffee house</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
          <div className="items">
            <div className="row">
              <div className="col-md-3">
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/f5f1a7be-icon-2-1920x1_1000000000000000000028.png" alt="" />
              </div>
              <div className="col-md-9">
                <h4>Etiam orci</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/ec094016-icon-4-1920x1_1000000000000000000028.png" alt="" />
              </div>
              <div className="col-md-9">
                <h4>Turpis faucibus</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <img className="rounded" src="https://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/6c35f294-sung-wang-g4dgcf90em4-unsplash_109q0cs00000000000001o.jpg" />
        </div>
      </div>
    </section>
  );
}