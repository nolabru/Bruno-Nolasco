import { useEffect } from "react";

import ScrollReveal from "scrollreveal";

const useScrollReveal = (selector, config = {}) => {
  useEffect(() => {
    ScrollReveal().reveal(selector, {
      distance: "50px",
      duration: 800,
      easing: "ease-out",
      origin: "top",
      reset: false,
      ...config,
    });
  }, [selector, config]);
};

export default useScrollReveal;
