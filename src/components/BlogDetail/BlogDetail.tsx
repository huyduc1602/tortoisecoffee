import './BlogDetail.scss';
import { BlogType, blogs } from '~/data/blogs';

interface BlogDetail {
  slug:string|undefined;
}

export default function BlogDetail({ slug }: BlogDetail) {
  console.log('slug',slug);
  const blog:BlogType | undefined = blogs.find(item => item.slug === slug);

  return <section id="blog-detail" className="py-5">
    <div className="container">
      <h1>{blog?.title}</h1>
      <img src={blog?.image} className="w-100 pt-3" />
      <div className="pt-5" dangerouslySetInnerHTML={{ __html: blog?.content ?? '' }} />
    </div>
  </section>
}