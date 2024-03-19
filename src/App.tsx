import './App.scss'
import Header from '~/components/Header/Header'
import Home from '~/components/Home/Home';
import Features from '~/components/Features/Features';
import AboutUs from '~/components/AboutUs/AboutUs';
import Gallery from '~/components/Gallery/Gallery';
import Footer from '~/components/Footer/Footer';
import Testimonial from '~/components/Testimonial/Testimonial';
import Products from '~/components/Products/Products';
import FollowInstagram from '~/components/FollowInstagram/FollowInstagram';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <Products />
      <FollowInstagram />
      <Footer />
    </>
  )
}

export default App
