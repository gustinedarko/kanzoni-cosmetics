import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
// import ProductsDetail from "./pages/ProductsDetail";
// import OurProducts from "./pages/OurProducts";
import CartProductDetails from "./pages/CartProductDetails";
import CombinedProductDetail from "./pages/CombinedProductDetail";
import ShopNowProducts from "./pages/ShopNowProducts";
import Cart from "./pages/Cart";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const withScroll = (element) => (
  <>
    <ScrollToTop />
    {element}
  </>
);

const kanzoniCosmeticsRouter = createBrowserRouter([
  { path: '/', element: withScroll(<Home />) },
  // { path: '/view-single-product', element: withScroll(<ViewSingleProduct />) },
  // { path: '/products/:id', element: withScroll(<ProductsDetail />) },
  // { path: '/our-products', element: withScroll(<OurProducts />) },
  { path: '/cart/product/:id', element: withScroll(<CartProductDetails />) },
  { path: '/products/combo', element: withScroll(<CombinedProductDetail />) },
  { path: '/shopnow-products', element: withScroll(<ShopNowProducts />) },
  { path: '/about-us', element: withScroll(<AboutUs />) },
  { path: '/process', element: withScroll(<Process />) },
  { path: '/contact', element: withScroll(<Contact />) },
  { path: '/cart', element: withScroll(<Cart />) },
  { path: '*', element: <NotFound /> },
]);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false, startEvent: "DOMContentLoaded" });
  }, []);

  return (
    <>
      <RouterProvider router={kanzoniCosmeticsRouter} />
    </>
  )
}

export default App