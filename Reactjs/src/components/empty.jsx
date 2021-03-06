import Circles from "./circles";
import "./empty.css";
import { useEffect, useState } from "react";

const Empty = () => {
  const [balloon, setBalloon] = useState([]);

  const [input, setInput] = useState("");

  const [shift, setShift] = useState([]);

  useEffect(() => {
    getRandomColor();
  }, []);

 // generationg random colors

  const getRandomColor = () => {
    let color = [];
    for (let i = 1; i <= 5; i++) {
      color.push([`#${Math.floor(Math.random() * 16777215).toString(16)}`, i]);
    }
    setBalloon(color);
  };

  // useEffect(() => {
  //   let col = getColors();
  //   setBalloon(col);
  // }, []);

  // const getColors = () => {
  //   let arr = ["#8d5c21", "#cd92fa", "#fdff5f", "#80ffff", "#ee7fa8"];

  //   let color = [];
  //   for (let i = 0; i <5; i++) {
  //     let index = getRandom(0, arr.length - 1);
  //     color.push(arr[index]);
  //     arr.splice(index, 1);
  //   }
  //   return color;
  // };
  // const getRandom = (min, max) => {
  //   let step1 = max - min + 1;
  //   let step2 = Math.random() * step1;
  //   let result = Math.floor(step2) + min;
  //   return result;
  // };

  // shifting balloons into an empty div

  const handleShoot = () => {
   
    let circle = balloon.find((el) => el[1] == input);
    if (!circle) {
      alert("not a valid no");
      return;
    }
    const ans = balloon.filter((el) => el[1] != input);
    setBalloon([...ans]);
    setShift([...shift, circle]);
    
  };

  // sending back balloons to their original places
  const handleReplace = (item) => {
    let circles = shift.filter((el) => item[1] != el[1]);
    setShift([...circles]);
    setBalloon([...balloon, item].sort((a, b) => a[1] - b[1]));
  };

  return (
    <>
      <h1>ReactJS-Balloon-Assignment</h1>
      <div className="container">
        <div className="circles">
          {balloon.map((item) => (
            <Circles key={item[1]} color={item[0]} value={item[1]} />
          ))}
        </div>

        <div className="empty">
          {shift.map((item) => {
            return (
              <div onClick={() => handleReplace(item)}>
                <Circles key={item[1]} color={item[0]} value={item[1]} />
              </div>
            );
          })}
        </div>
      </div>
      <div className="Shoot">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Enter Balloon Number"
        />
        <button className="button-64" role="button" onClick={handleShoot}>
          <span class="text">Shoot</span>
        </button>
      </div>
    </>
  );
};

export default Empty;
