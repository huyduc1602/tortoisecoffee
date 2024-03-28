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

  const url = window.location.search;
  const urlParams = new URLSearchParams(url);
  const blogParam = urlParams.get('blog')

  const arrSlug = blogs.map(blog => blog.slug);

  arrSlug.forEach(blogSlug => {
    if (blogSlug === blogParam){
      pageContent = <BlogDetail slug={blogSlug} />
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
