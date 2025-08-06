import { createBrowserRouter, RouterProvider } from "react-router";
import ProductsHome from "./pages/ProductsHome";
import AboutUs from "./pages/AboutUs";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";
import ProductsDetail from "./pages/ProductsDetail";
import CombinedProductDetail from "./pages/CombinedProductDetail";
import OurProducts from "./pages/OurProducts";

const withScroll = (element) => (
  <>
    <ScrollToTop />
    {element}
  </>
);

const kanzoniCosmeticsRouter = createBrowserRouter([
  { path: '/', element: withScroll(<ProductsHome />) },
  // { path: '/view-single-product', element: withScroll(<ViewSingleProduct />) },
  { path: '/products/:id', element: withScroll(<ProductsDetail />) },
  { path: '/products/combo', element: withScroll(<CombinedProductDetail />) },
  { path: '/our-products', element: withScroll(<OurProducts />) },
  { path: '/about-us', element: withScroll(<AboutUs />) },
  { path: '/process', element: withScroll(<Process />) },
  { path: '/contact', element: withScroll(<Contact />) },
  {path: '*', element: <NotFound />},
]);

function App() {

  return (
    <>
      <RouterProvider router={kanzoniCosmeticsRouter} />
    </>
  )
}

export default App