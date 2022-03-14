import { sort } from "../functions/Sorts";
import { motion } from "framer-motion";

const Body = ({ Type, speed, array }) => {
  let play = true;
  let a;

  const sorting = () => {
    if (!a) {
      a = new sort(Type, speed, array);
      play = false;
      document.getElementById("speed").disabled = true;
      a.start();
    } else {
      if (play) {
        a.sorting();
        play = false;
      }
    }
  };
  const btnPause = () => {
    if (a) {
      if (!play) {
        a.stop();
        play = true;
      }
    }
  };

  return (
    <motion.div
      className="main"
      initial={{ x: "+100vw" }}
      animate={{ x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="chart" id="chart"></div>
      <div className="info">
        <h3>{Type}</h3>
        <div className="icons">
          <i className="fas fa-pause icon" onClick={() => btnPause()}></i>
          <i className="fas fa-play icon" onClick={() => sorting()}></i>
        </div>
      </div>
    </motion.div>
  );
};

export default Body;
