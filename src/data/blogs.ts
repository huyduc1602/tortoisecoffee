import BlogImg1 from '~/assets/blog-1.jpg';
import BlogImg2 from '~/assets/blog-2.jpg';
import BlogImg3 from '~/assets/blog-3.jpg';
import BlogImg4 from '~/assets/blog-4.jpg';
import BlogImg5 from '~/assets/blog-5.jpg';

export interface BlogType {
  image: string;
  title: string;
  slug: string;
  description: string;
  content: string;
};

export const blogs: BlogType[] = [
  {
    image: BlogImg1,
    title: "CÀ PHÊ TORTOISE - CHÌA KHOÁ CHO SỨC KHOẺ VÀ NĂNG LƯỢNG",
    slug: 'ca-phe-tortoise-chia-khoa-cho-suc-khoe-va-nang-luong',
    description: "Cà phê TORTOISE là một thương hiệu cà phê chất lượng cao được tạo ra từ những hạt cà phê Arabica chọn lọc từ các vùng trồng cà phê uy tín trên khắp thế giới. Với quy trình chế biến cẩn thận và phương pháp rang xay hiện đại, chúng tôi cam kết mang đến cho khách hàng những tách cà phê hoàn hảo với hương vị đặc trưng và chất lượng không thể cưỡng lại.",
    content: `<p><span style="font-weight: 400;">C&agrave; ph&ecirc; TORTOISE l&agrave; một thương hiệu c&agrave; ph&ecirc; chất lượng cao được tạo ra từ những hạt c&agrave; ph&ecirc; Arabica chọn lọc từ c&aacute;c v&ugrave;ng trồng c&agrave; ph&ecirc; uy t&iacute;n tr&ecirc;n khắp thế giới. Với quy tr&igrave;nh chế biến cẩn thận v&agrave; phương ph&aacute;p rang xay hiện đại, ch&uacute;ng t&ocirc;i cam kết mang đến cho kh&aacute;ch h&agrave;ng những t&aacute;ch c&agrave; ph&ecirc; ho&agrave;n hảo với hương vị đặc trưng v&agrave; chất lượng kh&ocirc;ng thể cưỡng lại.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Lợi &Iacute;ch của Việc Uống C&agrave; Ph&ecirc; TORTOISE</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">N&acirc;ng Cao Năng Lượng v&agrave; Sự Tỉnh T&aacute;o: C&agrave; ph&ecirc; TORTOISE chứa caffeine tự nhi&ecirc;n, gi&uacute;p k&iacute;ch th&iacute;ch sự tỉnh t&aacute;o v&agrave; tăng cường năng lượng, gi&uacute;p bạn bắt đầu ng&agrave;y mới với tinh thần sảng kho&aacute;i.</span></p>
<p>&nbsp;</p>
<ol>
<li style="font-weight: 400;"><strong>Cải Thiện Tinh Thần v&agrave; Tăng Sự Tập Trung:&nbsp;</strong></li>
</ol>
<p><span style="font-weight: 400;">Mỗi t&aacute;ch/ lon c&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ l&agrave; một trải nghiệm về hương vị m&agrave; c&ograve;n l&agrave; cơ hội để n&acirc;ng cao tư duy v&agrave; tăng khả năng tập trung trong c&ocirc;ng việc v&agrave; học tập.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Hỗ Trợ Sức Khỏe Tim Mạch</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Caffeine trong c&agrave; ph&ecirc; c&oacute; thể gi&uacute;p giảm nguy cơ mắc bệnh tim v&agrave; đột quỵ, đồng thời cải thiện sự lưu th&ocirc;ng m&aacute;u v&agrave; l&agrave;m giảm nguy cơ mắc một số bệnh l&yacute; tim mạch.</span></p>
<p>&nbsp;</p>
<ol>
<li style="font-weight: 400;"><strong>Kh&aacute;m Ph&aacute; Trải Nghiệm C&agrave; Ph&ecirc; Đa Dạng:</strong></li>
</ol>
<p><span style="font-weight: 400;">Với c&agrave; ph&ecirc; TORTOISE, bạn c&oacute; thể thưởng thức sự đa dạng của c&agrave; ph&ecirc; từ c&aacute;c hương vị đậm đ&agrave; đến nhẹ nh&agrave;ng, từ c&agrave; ph&ecirc; đen truyền thống đến c&aacute;c loại c&agrave; ph&ecirc; espresso v&agrave; latte sữa.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Sự Đảm Bảo Chất Lượng</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Ch&uacute;ng t&ocirc;i cam kết đem đến cho kh&aacute;ch h&agrave;ng những sản phẩm c&agrave; ph&ecirc; chất lượng nhất với nguồn nguy&ecirc;n liệu chọn lọc v&agrave; quy tr&igrave;nh sản xuất nghi&ecirc;m ngặt. Mỗi t&aacute;ch c&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ l&agrave; một t&aacute;ch c&agrave; ph&ecirc;, m&agrave; c&ograve;n l&agrave; một trải nghiệm tinh tế v&agrave; đầy &yacute; nghĩa.</span></p>
<p>&nbsp;</p>
<p><strong>Kết Luận</strong></p>
<p><span style="font-weight: 400;">C&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ l&agrave; một thức uống, m&agrave; c&ograve;n l&agrave; một phần của cuộc sống h&agrave;ng ng&agrave;y, mang lại lợi &iacute;ch sức khỏe v&agrave; trải nghiệm đặc biệt cho người thưởng thức. H&atilde;y kh&aacute;m ph&aacute; hương vị đặc biệt v&agrave; lợi &iacute;ch sức khỏe từ c&agrave; ph&ecirc; TORTOISE v&agrave; tạo ra những khoảnh khắc đ&aacute;ng nhớ mỗi ng&agrave;y!</span></p>`
  },
  {
    image: BlogImg2,
    title: "CAM KẾT CHẤT LƯỢNG VÀ GIÁ TRỊ: CÀ PHÊ ĐẶC BIỆT TỪ TORTOISE",
    slug: 'cam-ket-chat-luong-va-gia-tri-ca-phe-djac-biet-tu-tortoise',
    description: "Thương hiệu cà phê TORTOISE không chỉ cam kết đem đến cho khách hàng những sản phẩm chất lượng mà còn mang đến sự đa dạng và giá trị đích thực trong mỗi tách cà phê. Với quy trình chế biến cẩn thận và sự chăm sóc đặc biệt từ những hạt cà phê Arabica và Robusta chất lượng cao, chúng tôi tự tin giới thiệu đến bạn dòng sản phẩm cà phê độc đáo và tinh tế.",
    content: `<p><span style="font-weight: 400;">Thương hiệu c&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ cam kết đem đến cho kh&aacute;ch h&agrave;ng những sản phẩm chất lượng m&agrave; c&ograve;n mang đến sự đa dạng v&agrave; gi&aacute; trị đ&iacute;ch thực trong mỗi t&aacute;ch c&agrave; ph&ecirc;. Với quy tr&igrave;nh chế biến cẩn thận v&agrave; sự chăm s&oacute;c đặc biệt từ những hạt c&agrave; ph&ecirc; Arabica v&agrave; Robusta chất lượng cao, ch&uacute;ng t&ocirc;i tự tin giới thiệu đến bạn d&ograve;ng sản phẩm c&agrave; ph&ecirc; độc đ&aacute;o v&agrave; tinh tế.</span></p>
<p>&nbsp;</p>
<p><strong>Cam Kết Chất Lượng</strong></p>
<p><span style="font-weight: 400;">Nguồn Gốc Chọn Lọc: C&agrave; ph&ecirc; Aroma được tạo ra từ những hạt c&agrave; ph&ecirc; được chọn lọc một c&aacute;ch kỹ lưỡng từ c&aacute;c v&ugrave;ng trồng c&agrave; ph&ecirc; uy t&iacute;n tr&ecirc;n khắp thế giới. Ch&uacute;ng t&ocirc;i chỉ sử dụng những hạt c&agrave; ph&ecirc; chất lượng cao, c&oacute; nguồn gốc r&otilde; r&agrave;ng v&agrave; được trồng theo c&aacute;c ti&ecirc;u chuẩn bền vững.</span></p>
<p>&nbsp;</p>
<p><strong>Quy Tr&igrave;nh Chế Biến Chất Lượng</strong><span style="font-weight: 400;">: Mỗi bước trong quy tr&igrave;nh chế biến c&agrave; ph&ecirc; Aroma đều được kiểm so&aacute;t v&agrave; gi&aacute;m s&aacute;t một c&aacute;ch cẩn thận để đảm bảo rằng mỗi t&aacute;ch c&agrave; ph&ecirc; mang đến cho bạn l&agrave; sự ho&agrave;n hảo v&agrave; tinh t&uacute;y nhất.</span></p>
<p>&nbsp;</p>
<p><strong>Kiểm So&aacute;t Chất Lượng Li&ecirc;n Tục:</strong><span style="font-weight: 400;"> Ch&uacute;ng t&ocirc;i thực hiện kiểm tra chất lượng định kỳ từ việc chọn lọc nguy&ecirc;n liệu đến quy tr&igrave;nh rang xay, nhằm đảm bảo rằng mỗi t&aacute;ch c&agrave; ph&ecirc; Aroma đều đạt đến ti&ecirc;u chuẩn cao nhất về hương vị v&agrave; chất lượng.</span></p>
<p>&nbsp;</p>
<p><strong>Gi&aacute; Th&agrave;nh Ph&ugrave; Hợp</strong></p>
<p><span style="font-weight: 400;">Mặc d&ugrave; ch&uacute;ng t&ocirc;i cam kết mang đến cho bạn những sản phẩm c&agrave; ph&ecirc; chất lượng cao, nhưng ch&uacute;ng t&ocirc;i cũng lu&ocirc;n quan t&acirc;m đến việc giữ gi&aacute; th&agrave;nh ph&ugrave; hợp v&agrave; hợp l&yacute; nhất. Ch&uacute;ng t&ocirc;i tin rằng mọi người đều c&oacute; quyền thưởng thức c&agrave; ph&ecirc; chất lượng m&agrave; kh&ocirc;ng cần phải lo lắng về gi&aacute; cả.</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Với một loạt c&aacute;c sản phẩm c&agrave; ph&ecirc; đa dạng từ c&agrave; ph&ecirc; đen truyền thống đến c&aacute;c loại c&agrave; ph&ecirc; espresso v&agrave; cappuccino, c&agrave; ph&ecirc; TORTOISE mang đến cho bạn một trải nghiệm đa dạng v&agrave; đầy hấp dẫn về hương vị c&agrave; ph&ecirc;. H&atilde;y kh&aacute;m ph&aacute; v&agrave; trải nghiệm sự kh&aacute;c biệt với c&agrave; ph&ecirc; TORTOISE ngay h&ocirc;m nay!</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Kết Luận</span></p>
<p><span style="font-weight: 400;">C&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ l&agrave; một sản phẩm c&agrave; ph&ecirc;, m&agrave; c&ograve;n l&agrave; một biểu tượng của sự cam kết với chất lượng v&agrave; gi&aacute; trị đ&iacute;ch thực. H&atilde;y thưởng thức v&agrave; tận hưởng trải nghiệm c&agrave; ph&ecirc; đặc biệt từ thương hiệu TORTOISE v&agrave; kh&aacute;m ph&aacute; một thế giới mới của hương vị v&agrave; trải nghiệm c&agrave; ph&ecirc; đ&iacute;ch thực!</span></p>
<p><br /><br /></p>`,
  },
  {
    image: BlogImg3,
    title: "Khám phá TORTOISE: Nơi cà phê nguyên chất được tôn vinh",
    slug: 'kham-pha-tortoise-noi-ca-phe-nguyen-chat-djuoc-ton-vinh',
    description: "TORTOISE là thương hiệu cà phê Việt Nam chuyên cung cấp cà phê nguyên chất rang xay theo phương pháp thủ công truyền thống. Với niềm đam mê mãnh liệt với cà phê, TORTOISE mong muốn mang đến cho khách hàng những ly cà phê thơm ngon, đậm đà hương vị Việt Nam.",
    content: `<p><strong>Giới thiệu:</strong></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">TORTOISE l&agrave; thương hiệu c&agrave; ph&ecirc; Việt Nam chuy&ecirc;n cung cấp c&agrave; ph&ecirc; nguy&ecirc;n chất rang xay theo phương ph&aacute;p thủ c&ocirc;ng truyền thống. Với niềm đam m&ecirc; m&atilde;nh liệt với c&agrave; ph&ecirc;, TORTOISE mong muốn mang đến cho kh&aacute;ch h&agrave;ng những ly c&agrave; ph&ecirc; thơm ngon, đậm đ&agrave; hương vị Việt Nam.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Sản phẩm:</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">TORTOISE cung cấp đa dạng c&aacute;c loại c&agrave; ph&ecirc; nguy&ecirc;n chất từ Robusta, Arabica đến Culi, ph&ugrave; hợp với mọi sở th&iacute;ch v&agrave; khẩu vị. Hạt c&agrave; ph&ecirc; được tuyển chọn kỹ lưỡng từ những v&ugrave;ng nguy&ecirc;n liệu c&agrave; ph&ecirc; nổi tiếng nhất Việt Nam, sau đ&oacute; được rang xay thủ c&ocirc;ng bởi những nghệ nh&acirc;n l&agrave;nh nghề.</span></p>
<p>&nbsp;</p>
<p>&nbsp;</p>
<ul>
<li><strong><strong>Điểm nổi bật:</strong></strong></li>
</ul>
<p>&nbsp;</p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">C&agrave; ph&ecirc; nguy&ecirc;n chất 100%: TORTOISE cam kết c&agrave; ph&ecirc; của m&igrave;nh kh&ocirc;ng pha trộn bất kỳ tạp chất n&agrave;o, đảm bảo hương vị c&agrave; ph&ecirc; nguy&ecirc;n bản v&agrave; tinh t&uacute;y nhất.</span></p>
<p><span style="font-weight: 400;">Rang xay thủ c&ocirc;ng: Phương ph&aacute;p rang xay thủ c&ocirc;ng gi&uacute;p giữ trọn vẹn hương vị v&agrave; chất lượng c&agrave; ph&ecirc;.</span></p>
<p><strong>Đa dạng sản phẩm:</strong><span style="font-weight: 400;"> TORTOISE cung cấp nhiều loại c&agrave; ph&ecirc; ph&ugrave; hợp với mọi sở th&iacute;ch v&agrave; khẩu vị.</span></p>
<p><strong>Gi&aacute; cả hợp l&yacute;: </strong><span style="font-weight: 400;">TORTOISE lu&ocirc;n cố gắng mang đến cho kh&aacute;ch h&agrave;ng những sản phẩm c&agrave; ph&ecirc; chất lượng cao với gi&aacute; cả hợp l&yacute; nhất.</span></p>
<p><span style="font-weight: 400;">TORTOISE - Hơn cả một ly c&agrave; ph&ecirc;:</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">TORTOISE kh&ocirc;ng chỉ đơn thuần l&agrave; một thương hiệu c&agrave; ph&ecirc;, m&agrave; c&ograve;n l&agrave; nơi lưu giữ những gi&aacute; trị văn h&oacute;a c&agrave; ph&ecirc; Việt Nam. TORTOISE mong muốn mang đến cho kh&aacute;ch h&agrave;ng kh&ocirc;ng chỉ những ly c&agrave; ph&ecirc; thơm ngon m&agrave; c&ograve;n l&agrave; những trải nghiệm c&agrave; ph&ecirc; độc đ&aacute;o v&agrave; ấn tượng.</span></p>
<p>&nbsp;</p>
<p><strong>L&yacute; do n&ecirc;n chọn TORTOISE:</strong></p>
<p>&nbsp;</p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">C&agrave; ph&ecirc; nguy&ecirc;n chất 100%</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Rang xay thủ c&ocirc;ng</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Đa dạng sản phẩm</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Gi&aacute; cả hợp l&yacute;</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Mang đến trải nghiệm c&agrave; ph&ecirc; độc đ&aacute;o</span></li>
</ul>
<p><span style="font-weight: 400;">Li&ecirc;n hệ TORTOISE:</span></p>
<p>&nbsp;</p>
<p><span style="font-weight: 400;">Website: https://www.tortoisemedia.com/</span></p>
<p><span style="font-weight: 400;">Facebook: https://www.facebook.com/TRTSband/</span></p>
<p><span style="font-weight: 400;">Instagram: https://www.instagram.com/tortoise/</span></p>
<p><span style="font-weight: 400;">Hotline: [Số điện thoại TORTOISE]</span></p>
<p><span style="font-weight: 400;">TORTOISE - Vị c&agrave; ph&ecirc; Việt, đậm đ&agrave; hương vị!</span></p>
<p><br /><br /></p>`,
  },
  {
    image: BlogImg4,
    title: "\“HÀNH TRÌNH THĂNG HOA CỦA CÀ PHÊ TORTOISE: HƯƠNG VỊ ĐẬM ĐÀ TỪ VIỆT NAM CHINH PHỤC THẾ GIỚI\”",
    slug: 'hanh-trinh-thang-hoa-cua-ca-phe-tortoise-huong-vi-djam-dja-tu-viet-nam-chinh-phuc-the-gioi',
    description: "Cà phê TORTOISE không chỉ là một loại cà phê thượng hạng với hương vị tuyệt hảo, mà còn mang trong mình một sứ mệnh bền vững. Được trồng và chế biến tại Việt Nam, TORTOISE không những mang đến cho người thưởng thức những trải nghiệm cà phê tuyệt vời, mà còn góp phần vào công công cuộc bảo vệ môi trường và hỗ trợ cộng đồng nông dân. Trong bài viết này, chúng ta sẽ khám phá những điểm đặc biệt của cà phê TORTOISE và sứ mệnh bền vững mà nó mang lại.",
    content: `<p><span style="font-weight: 400;">C&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ l&agrave; một loại c&agrave; ph&ecirc; thượng hạng với hương vị tuyệt hảo, m&agrave; c&ograve;n mang trong m&igrave;nh một sứ mệnh bền vững. Được trồng v&agrave; chế biến tại Việt Nam, TORTOISE kh&ocirc;ng những mang đến cho người thưởng thức những trải nghiệm c&agrave; ph&ecirc; tuyệt vời, m&agrave; c&ograve;n g&oacute;p phần v&agrave;o c&ocirc;ng c&ocirc;ng cuộc bảo vệ m&ocirc;i trường v&agrave; hỗ trợ cộng đồng n&ocirc;ng d&acirc;n. Trong b&agrave;i viết n&agrave;y, ch&uacute;ng ta sẽ kh&aacute;m ph&aacute; những điểm đặc biệt của c&agrave; ph&ecirc; TORTOISE v&agrave; sứ mệnh bền vững m&agrave; n&oacute; mang lại.</span></p>
<p><strong><em>Nguồn gốc sản xuất</em></strong></p>
<p><span style="font-weight: 400;">THE TORTOISE COFFE được sinh ra từ tr&aacute;i tim của đất nước Việt Nam - một đất nước nổi tiếng với truyền thống trồng v&agrave; chế biến c&agrave; ph&ecirc;. Với kh&iacute; hậu v&agrave; địa h&igrave;nh độc đ&aacute;o, Việt nam đ&atilde; trở th&agrave;nh một trong những nguồn cung cấp c&agrave; ph&ecirc; h&agrave;ng đầu tr&ecirc;n thế giới. Thương hiệu tự h&agrave;o khi l&agrave; một phần của thế hệ tiếp theo của ng&agrave;nh c&agrave; ph&ecirc; Việt Nam v&agrave; mang đến hương vị đặc trưng từ những v&ugrave;ng n&uacute;i cao nguy&ecirc;n của đất nước Việt Nam.</span></p>
<p><strong><em>Hương vị đậm đ&agrave;</em></strong></p>
<p><span style="font-weight: 400;">C&aacute;c sản phẩm c&agrave; ph&ecirc; của THE TORTOISE COFFEE được l&agrave;m từ những hạt c&agrave; ph&ecirc; chất lượng cao, trồng v&agrave; thu hoạch tại c&aacute;c v&ugrave;ng cao nguy&ecirc;n của Việt Nam. Qua qu&aacute; tr&igrave;nh rang xay tinh tế, THE TORTOISE COFFEE vẫn giữ được hương vị đậm đ&agrave; v&agrave; độc đ&aacute;o của c&agrave; ph&ecirc;. Mỗi ly c&agrave; ph&ecirc; TORTOISE đều mang đến một trải nghiệm thưởng thức tuyệt vời, với m&ugrave;i hương quyến rũ v&agrave; hương vị đậm đ&agrave; m&agrave; người y&ecirc;u c&agrave; ph&ecirc; kh&ocirc;ng thể chối từ.</span></p>
<p><strong><em>Chinh phục thế giới</em></strong></p>
<p><span style="font-weight: 400;">Với những gi&aacute; trị đặc biệt của m&igrave;nh, c&agrave; ph&ecirc; TORTOISE đ&atilde; nhanh ch&oacute;ng thu h&uacute;t sự ch&uacute; &yacute; của thị trường quốc tế. Hương vị độc đ&aacute;o v&agrave; chất lượng cao đ&atilde; gi&uacute;p TORTOISE khẳng định vị thế của m&igrave;nh tr&ecirc;n bản đồ c&agrave; ph&ecirc; thế giới. Những người y&ecirc;u c&agrave; ph&ecirc; tr&ecirc;n to&agrave;n thế giới đều t&igrave;m kiếm TORTOISE để tận hưởng một trải nghiệm c&agrave; ph&ecirc; đ&iacute;ch thực từ Việt nam</span></p>
<p><strong><em>Hỗ trợ cộng đồng n&ocirc;ng d&acirc;n</em></strong></p>
<p><span style="font-weight: 400;">TORTOISE kh&ocirc;ng chỉ tạo ra cơ hội l&agrave;m việc cho cộng đồng n&ocirc;ng d&acirc;n, m&agrave; c&ograve;n hỗ trợ học trong việc n&acirc;ng cao năng suất v&agrave; chất lượng sản phẩm. TORTOISE đầu tư v&agrave;o c&aacute;c chương tr&igrave;nh đ&agrave;o tạo, c&ocirc;ng nghệ v&agrave; hợp t&aacute;c c&ugrave;ng cộng đồng để n&acirc;ng cao khả năng sản xuất v&agrave; thu nhập của n&ocirc;ng d&acirc;n. Điều n&agrave;y gi&uacute;p cải thiện cuộc sống của họ v&agrave; tạo ra sự ph&aacute;t triển bền vững trong khu vực n&ocirc;ng th&ocirc;n.</span></p>
<p>&nbsp;</p>
<p><strong><em>Cuối c&ugrave;ng,...</em></strong></p>
<p><span style="font-weight: 400;">C&agrave; ph&ecirc; TORTOISE với chất lượng cao v&agrave; sự tận tụy trong chọn lựa, TORTOISE đ&atilde; chinh phục thị trường quốc tế. Đồng thời, ch&uacute;ng t&ocirc;i cam kết tu&acirc;n thủ c&aacute;c ti&ecirc;u chuẩn bảo vệ m&ocirc;i trường v&agrave; hỗ trợ cộng đồng n&ocirc;ng d&acirc;n, tạo n&ecirc;n một sự kết nối &yacute; nghĩa. Thưởng thức c&agrave; ph&ecirc; TORTOISE kh&ocirc;ng chỉ mang lại trải nghiệm tuyệt vời m&agrave; c&ograve;n đ&oacute;ng g&oacute;p v&agrave;o bảo vệ m&ocirc;i trường v&agrave; ph&aacute;t triển cộng đồng.</span></p>
<p><br /><br /></p>`,
  },
  {
    image: BlogImg5,
    title: "Tortoise Coffee: Thưởng Thức Vị Cà Phê Nguyên Chất Thăng Hoa",
    slug: 'tortoise-coffee-thuong-thuc-vi-ca-phe-nguyen-chat-thang-hoa',
    description: "Đánh thức mọi giác quan với hương vị cà phê nguyên chất 100%, rang xay thủ công từ những hạt Arabica thượng hạng. Tortoise Coffee mang đến cho bạn trải nghiệm cà phê Việt Nam đích thực, hòa quyện giữa niềm đam mê, trách nhiệm và sự trân trọng.",
    content: `<p><strong>Đ&aacute;nh thức mọi gi&aacute;c quan với hương vị c&agrave; ph&ecirc; nguy&ecirc;n chất 100%, rang xay thủ c&ocirc;ng từ những hạt Arabica thượng hạng.</strong><span style="font-weight: 400;"> Tortoise Coffee mang đến cho bạn trải nghiệm c&agrave; ph&ecirc; Việt Nam đ&iacute;ch thực, h&ograve;a quyện giữa </span><strong>niềm đam m&ecirc;</strong><span style="font-weight: 400;">, </span><strong>tr&aacute;ch nhiệm</strong><span style="font-weight: 400;"> v&agrave; </span><strong>sự tr&acirc;n trọng</strong><span style="font-weight: 400;">.</span></p>
<p><strong>T&igrave;m kiếm điều g&igrave; ở Tortoise Coffee?</strong></p>
<ul>
<li style="font-weight: 400;"><strong>Hương vị c&agrave; ph&ecirc; nguy&ecirc;n bản:</strong><span style="font-weight: 400;"> Vị c&agrave; ph&ecirc; tinh t&uacute;y, kh&ocirc;ng pha trộn tạp chất, mang đến cho bạn cảm nhận trọn vẹn hương vị c&agrave; ph&ecirc; Việt Nam.</span></li>
<li style="font-weight: 400;"><strong>Kỹ thuật rang xay thủ c&ocirc;ng:</strong><span style="font-weight: 400;"> Từng mẻ c&agrave; ph&ecirc; được rang xay tỉ mỉ bởi những nghệ nh&acirc;n l&agrave;nh nghề, đảm bảo hương vị c&agrave; ph&ecirc; thơm ngon, đậm đ&agrave;, lưu giữ trọn vẹn tinh hoa c&agrave; ph&ecirc;.</span></li>
<li style="font-weight: 400;"><strong>Hạt Arabica chất lượng cao:</strong><span style="font-weight: 400;"> Ch&uacute;ng t&ocirc;i sử dụng 100% hạt Arabica được tuyển chọn kỹ lưỡng từ những v&ugrave;ng trồng c&agrave; ph&ecirc; nổi tiếng của Việt Nam, cho bạn trải nghiệm c&agrave; ph&ecirc; thượng hạng.</span></li>
<li style="font-weight: 400;"><strong>Mẫu m&atilde; đa dạng:</strong><span style="font-weight: 400;"> Cung cấp c&agrave; ph&ecirc; hạt v&agrave; c&agrave; ph&ecirc; dạng g&oacute;i nhỏ gọn, tiện lợi, đ&aacute;p ứng mọi nhu cầu sử dụng của bạn.</span></li>
<li style="font-weight: 400;"><strong>Đa dạng hương vị:</strong></li>
<ul>
<li style="font-weight: 400;"><strong>Classic Blend:</strong><span style="font-weight: 400;"> Hương vị c&agrave; ph&ecirc; c&acirc;n bằng, h&agrave;i h&ograve;a, ph&ugrave; hợp với mọi gu thưởng thức.</span></li>
<li style="font-weight: 400;"><strong>Dark Roast:</strong><span style="font-weight: 400;"> Vị c&agrave; ph&ecirc; đậm đ&agrave;, mạnh mẽ, d&agrave;nh cho những người y&ecirc;u th&iacute;ch c&agrave; ph&ecirc; đậm.</span></li>
<li style="font-weight: 400;"><strong>Light Roast:</strong><span style="font-weight: 400;"> Hương vị c&agrave; ph&ecirc; thanh nhẹ, chua dịu, cho những ai ưa th&iacute;ch c&agrave; ph&ecirc; nhẹ nh&agrave;ng.</span></li>
</ul>
</ul>
<p><strong>Hơn cả một thức uống, Tortoise Coffee l&agrave;:</strong></p>
<ul>
<li style="font-weight: 400;"><strong>C&acirc;u chuyện về sự tr&acirc;n trọng:</strong><span style="font-weight: 400;"> Tr&acirc;n trọng gi&aacute; trị c&agrave; ph&ecirc; Việt Nam, tr&acirc;n trọng nỗ lực của người n&ocirc;ng d&acirc;n, v&agrave; tr&acirc;n trọng từng khoảnh khắc thưởng thức c&agrave; ph&ecirc; của bạn.</span></li>
<li style="font-weight: 400;"><strong>Niềm tự h&agrave;o c&agrave; ph&ecirc; Việt Nam:</strong><span style="font-weight: 400;"> G&oacute;p phần đưa c&agrave; ph&ecirc; Việt Nam đến gần hơn với bạn b&egrave; quốc tế, khẳng định vị thế c&agrave; ph&ecirc; Việt tr&ecirc;n bản đồ c&agrave; ph&ecirc; thế giới.</span></li>
<li style="font-weight: 400;"><strong>Cam kết ph&aacute;t triển bền vững:</strong><span style="font-weight: 400;"> Hỗ trợ cộng đồng n&ocirc;ng d&acirc;n Việt Nam, n&acirc;ng cao thu nhập v&agrave; đời sống, đồng thời bảo vệ m&ocirc;i trường v&agrave; ph&aacute;t triển kinh tế địa phương.</span></li>
</ul>
<p><strong>Lựa chọn Tortoise Coffee, bạn nhận được:</strong></p>
<ul>
<li style="font-weight: 400;"><strong>Chất lượng ho&agrave;n hảo:</strong><span style="font-weight: 400;"> Cam kết sự nhất qu&aacute;n trong từng ly c&agrave; ph&ecirc;, đảm bảo hương vị c&agrave; ph&ecirc; tuyệt hảo.</span></li>
<li style="font-weight: 400;"><strong>Gi&aacute; cả hợp l&yacute;:</strong><span style="font-weight: 400;"> Mang đến cho bạn những ly c&agrave; ph&ecirc; chất lượng cao với mức gi&aacute; ph&ugrave; hợp.</span></li>
<li style="font-weight: 400;"><strong>Dịch vụ chuy&ecirc;n nghiệp:</strong><span style="font-weight: 400;"> Đội ngũ nh&acirc;n vi&ecirc;n tận t&acirc;m, lu&ocirc;n sẵn s&agrave;ng hỗ trợ v&agrave; tư vấn cho bạn.</span></li>
</ul>
<p><strong>Tortoise Coffee - Vị c&agrave; ph&ecirc; gắn kết y&ecirc;u thương:</strong></p>
<ul>
<li style="font-weight: 400;"><span style="font-weight: 400;">Gắn kết con người qua những ly c&agrave; ph&ecirc; thơm ngon, đậm đ&agrave;.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Gắn kết cộng đồng n&ocirc;ng d&acirc;n với thị trường, n&acirc;ng cao gi&aacute; trị c&agrave; ph&ecirc; Việt Nam.</span></li>
<li style="font-weight: 400;"><span style="font-weight: 400;">Gắn kết tr&aacute;ch nhiệm với m&ocirc;i trường v&agrave; sự ph&aacute;t triển bền vững.</span></li>
</ul>
<p><strong>H&atilde;y c&ugrave;ng Tortoise Coffee lan tỏa niềm tự h&agrave;o về c&agrave; ph&ecirc; Việt Nam!</strong></p>
<p><strong>Li&ecirc;n hệ với ch&uacute;ng t&ocirc;i:</strong><strong><br /></strong><span style="font-weight: 400;">Website: </span><span style="font-weight: 400;">: https://www.tortoisemedia.com</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Facebook: </span><span style="font-weight: 400;">h</span><span style="font-weight: 400;">ttps://www.facebook.com/TRTSband</span><span style="font-weight: 400;"><br /></span><span style="font-weight: 400;">Instagram: </span><span style="font-weight: 400;">https://www.instagram.com/tortoise</span><span style="font-weight: 400;"><br /><br /></span></p>`,
  },
]