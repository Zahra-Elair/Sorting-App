import { randomArray } from "../functions/Tools";
import { motion } from "framer-motion";

const SideBar = ({
  setType,
  setSpeed,
  setArray,
  arrayLength,
  setArrayLength,
}) => {
  const click = (msg) => {
    setType(msg);
    setArray(randomArray(arrayLength, 100));
  };

  const changeArray = (length) => {
    setArrayLength(length);
    setArray(randomArray(length, 100));
  };

  return (
    <motion.div
      initial={{ y: "+100vh" }}
      animate={{ y: 0 }}
      transition={{ duration: 1 }}
      className="mostatil"
    >
      <h2 className="title">SEARCHING ALGORITHMS VISUALISATION</h2>
      <div className="container">
        <div className="types">
          <h4
            className="sortType"
            onClick={() => {
              click("Selection Sort");
            }}
          >
            Selection Sort
          </h4>
          <h4
            className="sortType"
            onClick={() => {
              click("Bubble Sort");
            }}
          >
            Bubble Sort
          </h4>
          <h4
            className="sortType"
            onClick={() => {
              click("Insertion Sort");
            }}
          >
            Insertion Sort
          </h4>
        </div>
        <div className="settings">
          <div className="speed">
            <h4>Speed :</h4>
            <select
              className="box"
              name="speed"
              id="speed"
              onChange={(e) => {
                setSpeed(parseInt(e.target.value));
              }}
              defaultValue="1000"
            >
              <option value="2000">0.5x</option>
              <option value="1000">1x</option>
              <option value="500">2x</option>
            </select>
          </div>

          <div className="speed">
            <h4>Size :</h4>
            <select
              className="box"
              onChange={(e) => {
                changeArray(parseInt(e.target.value));
              }}
              defaultValue="20"
            >
              <option value="15">15</option>
              <option value="20">20</option>
              <option value="25">25</option>
            </select>
          </div>
        </div>
      </div>
      <div className="footer">
        <p>
          Made With <span>💜</span> By{"  "}
        </p>
        <a
          href="https://github.com/Zahra-Elair"
          target="noreferrer _blank"
          className="credits"
        >
          Zahra Elair
        </a>
      </div>
    </motion.div>
  );
};

export default SideBar;
