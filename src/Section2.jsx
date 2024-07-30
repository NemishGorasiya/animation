import { useInView } from "framer-motion";
import { useRef } from "react";

const Section2 = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div
      ref={ref}
      style={{
        minHeight: "100vh",
      }}
    >
      Section New
    </div>
  );
};

export default Section2;
