import AboutCoffeeImg from '~/assets/about-coffee.png';

export default function AboutUs() {
  return (
    <section id="about-us" className="py-5">
      <div className="container mx-auto row py-5">
        <div className="col-md-6" data-aos="fade-right">
          <h4>Về chúng tôi</h4>
          <h2>Câu chuyện của Tortoise coffee</h2>
          <p>Thương hiệu cà phê độc đáo, đóng gói tiện lợi. Chúng tôi tin rằng Việt Nam là một trong những quốc gia quan trọng nhất trong ngành trồng cà phê. Với sản lượng lớn thứ hai thế giới, chúng tôi tận dụng nguồn nguyên liệu tốt nhất từ đất nước này để tạo ra những sản phẩm chất lượng.</p>
          <div className="items">
            <div className="row">
              <div className="col-md-3">
                <img loading="lazy" width="50" height="50" src="https://img.icons8.com/ios/50/beer-can.png" alt="coffee-can" />
              </div>
              <div className="col-md-9">
                <h4>Lon tiện lợi</h4>
                <p>Thiết kế lon nhôm: Sử dụng lon nhôm với nắp đậy chắc chắn để bảo quản cà phê. Lon nhôm không chỉ giúp giữ cho cà phê tươi lâu mà còn bảo vệ khỏi ánh sáng và oxy hóa.</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <img loading="lazy" src="https://img.icons8.com/ios-filled/50/coffee-bag.png" alt="coffee-bag" />
              </div>
              <div className="col-md-9">
                <h4>Bao giấy</h4>
                <p>Bao giấy chất lượng cao: Sử dụng loại giấy chất lượng cao để đảm bảo bảo quản cà phê tốt nhất, đồng thời cung cấp một cái nhìn tự nhiên và thân thiện hơn cho sản phẩm.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6" data-aos="fade-left">
          <img loading="lazy" className="rounded w-100" src={AboutCoffeeImg} />
        </div>
      </div>
    </section>
  );
}