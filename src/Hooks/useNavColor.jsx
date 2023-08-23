import { useState, useEffect } from "react";

const observerOptions = {
  root: null, //si es "null" es cuando entra al vewport, sino se puede indicar al coponente al que entra
  rootMargin: "0px", //en cuanto se vea el elemento
  threshold: 0.95, //porcentaje de visibilidad
};

export const useNavColor = () => {
  const [items, setItems] = useState([]);
  const [navBar, setNavBar] = useState([]);

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((item) => {
      const { isIntersecting } = item;

      if (isIntersecting && navBar !== "undefined") {
        const colorNav = item.target.getAttribute("data-nav-color");
        navBar.style.color = colorNav;
      }
    });
  }, observerOptions);

  useEffect(() => {
    observer.disconnect()
    if (items.length > 0 && navBar !== 0) {
      items.forEach((item) => {
        observer.observe(item);
      });
    }

    return () => {
      if (observer) observer.disconnect();
    };
  }, [items, navBar]);

  return { setItems, setNavBar, navBar };
};
