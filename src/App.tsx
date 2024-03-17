import './App.scss'
import Header from '~/components/Header/Header'
import Home from '~/components/Home/Home';
import Features from '~/components/Features/Features';
import AboutUs from '~/components/AboutUs/AboutUs';
import Gallery from '~/components/Gallery/Gallery';

function App() {
  return (
    <>
      <Header />
      <Home />
      <Features />
      <AboutUs />
      <Gallery />
    </>
  )
}

export default App
