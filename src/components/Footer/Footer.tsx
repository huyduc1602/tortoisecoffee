import './Footer.scss';

export default function Footer() {
  return (
    <footer id="footer" className="py-5 text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Tortoise coffee</h3>
            <p className="pt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat purus sed fames cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat purus sed fames cursus.</p>
            <div className="socials">
              <span className="pe-2">
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/17600a29-facebook-app-symbol_100p00p000000000000028.png" alt="Facebook" />
              </span>
              <span className="pe-2">
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/7b85bd99-twitter2_100p00p000000000000028.png" alt="Twitter" />
              </span>
              <span className="pe-2">
                <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/21dbf2cd-linkedin2_100p00p000000000000028.png" alt="Linkedin" />
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Get in Touch</h3>
            <div className="row">
              <div className="col-md-6 col-sm-6 pt-3">
                <div className="row">
                  <div className="col-md-3">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/7b9d25ec-phone55_101e01e000000000000028.png" alt="" />
                  </div>
                  <div className="col-md-9 ps-5">
                    <h5>Call Us</h5>
                    <p>+01 234 567</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 pt-3">
                <div className="row">
                  <div className="col-md-3">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/eef888bc-mailbox55_101e01e000000000000028.png" alt="" />
                  </div>
                  <div className="col-md-9 ps-5">
                    <h5>E-mail</h5>
                    <p>info@domain.com</p>
                  </div>
                </div>
              </div>
              <div className="address col-md-6 col-sm-6 pt-3">
                <div className="row">
                  <div className="col-md-3">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/eef888bc-mailbox55_101e01e000000000000028.png" alt="" />
                  </div>
                  <div className="col-md-9 ps-5">
                    <h5>Address</h5>
                    <p>72, Wall street, King Road, NY 20110</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}