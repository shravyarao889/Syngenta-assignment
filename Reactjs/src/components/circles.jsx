import React from "react";
import { useEffect, useState } from "react";
import { useRef } from "react";
import "./Style.css"

function Circles() {
  let [color, setColor] = useState([]);
  let value = useRef();

  useEffect(() => {
    let col = getColors();
    setColor(col);
  }, []);

  const getColors = () => {
    let arr = ["#8d5c21", "#cd92fa", "#fdff5f", "#80ffff", "#ee7fa8"];

    let store = [];
    for (let i = 0; i < 5; i++) {
      let index = getRandom(0, arr.length - 1);
      store.push(arr[index]);
      arr.splice(index, 1);
    }
    return store;
  };

  const getRandom = (min, max) => {
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let result = Math.floor(step2) + min;
    return result;
  };
  return  (
    <>
    <div className="container">
      <div className="empty"></div>
      <div className="circles">
        {color.map((el, index) => {
          return (
            <div
              id={index + 1}
              key={index}
              style={{ background: `${el}` }}
              onClick={(e) => {
                console.log(e.target.id);
              }}
            ></div>
          );
        })}
      </div>
    
    </div>
     <div className="input">
     <input ref={value} type="number" maxLength="1" max="5" min="1"></input>
     <button
       onClick={() => {
         console.log(value.current.value);
       }}
     >
       Shoot
     </button>
   </div>
   </>
  );
}

export default Circles;
