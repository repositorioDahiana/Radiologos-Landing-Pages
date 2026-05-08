import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {

  const location = useLocation();

  useEffect(() => {

    // SI EXISTE HASH (#id)
    if (location.hash) {

      const element = document.getElementById(
        location.hash.replace("#", "")
      );

      if (element) {

        setTimeout(() => {

          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });

        }, 100);

      }

    } else {

      // SI NO HAY HASH
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth",
      });

    }

  }, [location]);

  return null;
}

export default ScrollToTop;