import { useEffect } from "react";
import { useLocation } from "react-router";
import AOS from "aos";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  
  // Delay refresh so page elements exist before AOS recalculates
  setTimeout(() => {
    AOS.refresh();
    }, 200);
  }, [pathname]);

  return null;
}