import './Blog.scss';
import { blogs, BlogType } from '../../data/blogs';

export default function Blog() {
  return (
    <section id="blog" className="blog-container py-5">
      <div className="container py-5">
        <h4 data-aos="fade-down" className="text-center">
          Tin tức của chúng tôi
        </h4>
        <h2 data-aos="fade-down" className="text-center">Bài viết</h2>
        <div className="blog row">
            {blogs.map((item: BlogType, key:number) => {
            return (
              <div className="col-md-12 pb-3 px-2" key={key} data-aos="flip-up">
                <div className="card">
                  <div className="row g-0">
                    <div className="col-md-2">
                      <div className="thumbnail px-0">
                        <img loading="lazy" src={item.image} className="card-img-top" alt={item.title} />
                      </div>
                    </div>
                    <div className="col-md-10 float-left">
                      <div className="card-body">
                        <h4>
                          <a className="link" href={window.location.origin + '/?blog='+item.slug}>{item.title}</a>
                        </h4>
                        <p className="card-text">{item.description}</p>
                      </div>
                    </div>
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