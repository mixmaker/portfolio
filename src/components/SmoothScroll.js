import { useEffect } from "react";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const overscrollOptions = {
  enable: true,
  effect: "bounce",
  damping: 0.14,
  maxOverscroll: 150,
};
const options = {
  damping: 0.07,
  plugins: {
    overscroll: { ...overscrollOptions },
  },
};
const Scroll = () => {
  useEffect(() => {
    const fixedNav = document.getElementById("navbar");
    Scrollbar.use(OverscrollPlugin);
    const scrollbar = Scrollbar.init(document.body, options);
    scrollbar.addListener(({ offset }) => {
      fixedNav.style.top = offset.y + "px";
      fixedNav.style.left = offset.x + "px";
    });
  }, [document]);

  return null;
};
export default Scroll;
