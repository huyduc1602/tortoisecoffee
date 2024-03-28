import './App.scss'
import Header from '~/components/Header/Header'
import { blogs } from '~/data/blogs';
import BlogDetail from '~/components/BlogDetail/BlogDetail';
import Footer from '~/components/Footer/Footer';
import Home from '~/components/Home';

function App() {

  let pageContent = <>
    <Home />
  </>

  const url = window.location.href;
  const arrSlug = blogs.map(blog => window.location.origin + '/blog/' + blog.slug);

  arrSlug.forEach(blogSlug => {
    if (blogSlug === url){
      let slug = url.substring(url.lastIndexOf('/') + 1);
      pageContent = <BlogDetail slug={slug} />
    }
  });

  return (
    <>
      <Header />
      {pageContent}
      <Footer />
    </>
  )
}

export default App
