import './Footer.scss';
import FacebookIcon from '~/assets/icons/facebook.svg';
import InstagramIcon from '~/assets/icons/instagram.svg';
import TiktokIcon from '~/assets/icons/tiktok.svg';
import YoutubeIcon from '~/assets/icons/youtube.svg';

export default function Footer() {
  return (
    <footer id="contact" className="py-5 text-white">
      <div className="container py-5">
        <div className="row">
          <div className="col-md-6 py-5">
            <h3>Tortoise coffee</h3>
            <p className="pt-3">Mục tiêu của chúng tôi là hỗ trợ nông dân Việt Nam và phát triển kinh tế địa phương. Chúng tôi cam kết duy trì chất lượng và tính nhất quán của sản phẩm, để mọi người có thể tin tưởng vào nguồn gốc và chất lượng của TORTOISE COFFEE.
              Hãy tham gia cùng chúng tôi trên hành trình tận dụng nguồn cà phê tuyệt vời của Việt Nam! 🌱</p>
            <div className="socials">
              <span className="pe-2">
                <a href="https://www.facebook.com/profile.php?id=61557723262481">
                  <img loading="lazy" data-aos="fade-up" src={FacebookIcon} alt="Facebook" />
                </a>
              </span>
              <span className="pe-2">
                <a href="https://www.instagram.com/the_tortoise24/">
                  <img loading="lazy" data-aos="fade-up" src={InstagramIcon} alt="Instagram" />
                </a>
              </span>
              <span className="pe-2">
                <a href="https://www.tiktok.com/@thetortoisecoffee">
                  <img loading="lazy" data-aos="fade-up" src={TiktokIcon} alt="Tiktok" />
                </a>
              </span>
              <span className="pe-2">
                <a href="https://www.youtube.com/channel/UCFHQo0_xcSGWsDRQpAiJddQ">
                  <img loading="lazy" data-aos="fade-up" src={YoutubeIcon} alt="Youtube" />
                </a>
              </span>
            </div>
          </div>
          <div className="col-md-6">
            <h3>Thông tin liên hệ</h3>
            <div className="row contact">
              <div className="col-md-6 col-sm-6 pt-3">
                <div className="row">
                  <div className="col-md-3 pe-5 pb-3">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/7b9d25ec-phone55_101e01e000000000000028.png" alt="" />
                  </div>
                  <div className="col-md-9 info">
                    <h5>Hotline</h5>
                    <p>0977776568</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-sm-6 pt-3">
                <div className="row">
                  <div className="col-md-3 pe-5 pb-3">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/eef888bc-mailbox55_101e01e000000000000028.png" alt="" />
                  </div>
                  <div className="col-md-9 info">
                    <h5>E-mail</h5>
                    <p>cskh@tortoisecoffee.click</p>
                  </div>
                </div>
              </div>
              <div className="address col-md-6 col-sm-6 pt-3">
                <div className="row">
                  <div className="col-md-3 pe-5 pb-3">
                    <img src="http://d9hhrg4mnvzow.cloudfront.net/unbouncepages.com/coffeera/eef888bc-mailbox55_101e01e000000000000028.png" alt="" />
                  </div>
                  <div className="col-md-9 info">
                    <h5>Địa chỉ</h5>
                    <p>171 Đường Điện Biên Phủ, Đa Kao, Quận 1, Thành phố Hồ Chí Minh</p>
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