import { useState } from "react";

const HandlerScroll = () => {
  const [limit, setLimit] = useState(10);

  const scrollHandler = (): void => {
    if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
      setLimit((prev) => (prev === 100 ? 100 : prev + 10));
    }
  };

  return { scrollHandler, limit, setLimit };
};

export default HandlerScroll;
