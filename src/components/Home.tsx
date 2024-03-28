import Banner from '~/components/Banner/Banner';
import Features from '~/components/Features/Features';
import AboutUs from '~/components/AboutUs/AboutUs';
import Blog from '~/components/Blog/Blog';
import Products from '~/components/Products/Products';
import { scroller } from 'react-scroll';
import { useEffect } from 'react';

export default function Home(){
  useEffect(() => {
    const scrollId = window.location.hash.replace(/#/g, '');
    if (scrollId) {
      scroller.scrollTo(scrollId, {
        duration: 1500,
        delay: 100,
        smooth: true,
        offset: 50,
      });
    }
  }, [window.location.hash]);
  

  return <>
    <Banner />
    <Features />
    <AboutUs />
    <Products />
    <Blog />
  </>
}