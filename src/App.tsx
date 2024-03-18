import './App.scss'
import Header from '~/components/Header/Header'
import Home from '~/components/Home/Home';
import Features from '~/components/Features/Features';
import AboutUs from '~/components/AboutUs/AboutUs';
import Gallery from '~/components/Gallery/Gallery';
import Footer from '~/components/Footer/Footer';
import Testimonial from '~/components/Testimonial/Testimonial';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <AboutUs />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  )
}

export default App
