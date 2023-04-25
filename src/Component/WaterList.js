import styles from "./Water.module.css";
import fullWater from "../svg/FullGlass.svg";
import halfWater from "../svg/HalfFullGlass.svg";
import quarterWater from "../svg/QuarterFullGlass.svg";
import emptyWater from "../svg/EmptyGlass.svg";
import { useState, useEffect, useCallback } from "react";

const WaterList = () => {
  const [count, setCount] = useState(0);
  const [image, setImage] = useState("");
  const handleClickAdd = () => {
    if (count <= 2) {
      setCount(count + 1);
    } else {
      alert("water is full");
      setCount(count);
    }
  };

  const updateImage = useCallback(() => {
    switch (count) {
      case 0:
        return setImage(emptyWater);
      case 1:
        return setImage(quarterWater);
      case 2:
        return setImage(halfWater);

      case 3:
        return setImage(fullWater);
      default:
        return console.log("wrong input");
    }
  }, [count]);
  console.log(updateImage);
  useEffect(() => {
    updateImage();
  }, [updateImage]);

  const handleClickDecrease = () => {
    if (count > 0 && count <= 3) {
      setCount(count - 1);
    } else if (count <= 0) {
      alert("there is no more water");
      setCount(0);
    }
  };
  return (
    <div className={styles["water-container"]}>
      <div className={styles["outer-container"]}>
        <div className={styles["inner-container"]}>
          <button onClick={handleClickAdd}>Add Water(+)</button>
          <button onClick={handleClickDecrease}>Deacrease Water(-)</button>
        </div>
        <div className={styles["image-container"]}>
          <img src={image} alt="glass of water " />
        </div>
      </div>
    </div>
  );
};

export default WaterList;
