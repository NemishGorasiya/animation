import { useInView } from "framer-motion";
import "./App.scss";
import { useRef } from "react";
import Image from "./Image";

const App = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-1px" });
  return (
    <div className="main">
      <div className="section section1" style={{ display: "flex" }}>
        <div className="content" style={{ flex: 1, padding: "150px" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          illo ullam dicta aliquam error consequatur quam unde assumenda harum
          recusandae quisquam iure nobis, dolore ad, numquam optio ratione
          laborum animi. Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Doloribus illo ullam dicta aliquam error consequatur quam unde
          assumenda harum recusandae quisquam iure nobis, dolore ad, numquam
          optio ratione laborum animi. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Doloribus illo ullam dicta aliquam error consequatur
          quam unde assumenda harum recusandae quisquam iure nobis, dolore ad,
          numquam optio ratione laborum animi. Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Doloribus illo ullam dicta aliquam error
          consequatur quam unde assumenda harum recusandae quisquam iure nobis,
          dolore ad, numquam optio ratione laborum animi. Lorem ipsum dolor sit
          amet, consectetur adipisicing elit. Doloribus illo ullam dicta aliquam
          error consequatur quam unde assumenda harum recusandae quisquam iure
          nobis, dolore ad, numquam optio ratione laborum animi. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Doloribus illo ullam
          dicta aliquam error consequatur quam unde assumenda harum recusandae
          quisquam iure nobis, dolore ad, numquam optio ratione laborum animi.
        </div>
        <div
          style={{
            marginLeft: "auto",
            flex: 1,
            padding: "150px",
          }}
        >
          <Image />
        </div>
      </div>
      <div
        className="section section2"
        ref={ref}
        style={{ display: "flex", justifyContent: "center" }}
      >
        <div style={{ height: "100%", width: "100%" }}>
          {isInView && <Image />}
        </div>
      </div>
    </div>
  );
};

export default App;
