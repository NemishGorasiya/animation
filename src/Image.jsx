import { motion } from "framer-motion";
import "./Image.scss";

const Image = () => {
  return (
    <motion.div layoutId="image" className="image">
      <img src="https://picsum.photos/200/300" alt="" />
    </motion.div>
  );
};

export default Image;
