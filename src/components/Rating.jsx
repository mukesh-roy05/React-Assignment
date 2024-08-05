import React, { useState } from "react";

function Rating() {
  return <Random />;
}

function Loop({ no }) {
  let loopArr = [];
  for (let i = 0; i < no; i++) {
    loopArr.push(<i className="fa fa-star goldStar" key={i}></i>);
    // console.log(i);
  }
  return loopArr;
}

const Random = () => {
  const [num, setNum] = useState(0);

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    // console.log(min, max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const HandleClick = () => {
    setNum(randomNumberInRange(1, 5));
  };

  return (
    <div>
      <div className="rating">
        <HandleClick />
        <Loop no={num} />
      </div>
    </div>
  );
};

export default Rating;
