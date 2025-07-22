import { createBrowserRouter, RouterProvider } from "react-router";
import ProductsHome from "./pages/ProductsHome";
import ViewSingleProduct from "./pages/ViewSingleProduct";
import AboutUs from "./pages/AboutUs";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const kanzoniCosmeticsRouter = createBrowserRouter([
  {path: '/', element: <ProductsHome />},
  {path: '/view-single-product', element: <ViewSingleProduct />},
  {path: '/about-us', element: <AboutUs />},
  {path: '/process', element: <Process />},
  {path: '/contact', element: <Contact />},
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