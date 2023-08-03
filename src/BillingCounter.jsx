import React, { useState, useEffect } from 'react';

const getRandomNumber = () => Math.floor(Math.random() * 5) + 1;

const BillingCounter = () => {
  const [counters, setCounters] = useState([getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber(), getRandomNumber()]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounters((prevCounters) => {
        return prevCounters.map((counter) => {
          if (counter === 0) {
            return getRandomNumber();
          } else {
            return counter - 1;
          }
        });
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const triangle = (count) => {
    // console.log(count);
    let temp = [];
    for (let i = 0; i < count; i++) {
      temp.push(i);
    }
    return temp.map((item, index) => {
      return <svg key={index} width="50" height="50" >
        <polygon
          points="12.5,40 25,10 37.5,40"
          fill="orange"
        />
      </svg>
    });
  }

  return (
    <div style={{ display: "flex" }}>
      {/* {counters.map((counter, index) => (
        <div key={index} className="counter">
          <svg width="50" height="50">
            <circle cx="25" cy="25" r="20" fill="lightblue" />
            {Array.from({ length: counter }).map((_, i) => (
              <polygon
                key={i}
                points="12.5,40 25,10 37.5,40"
                fill="orange"
              />
            ))}
          </svg>
        </div>
      ))} */}
      {counters.map((counter, index) => (
        <div key={index} style={{display: "flex", flexDirection: "column"}}>
          <svg width="50" height="50"><circle cx="25" cy="25" r="20" fill="lightblue" /></svg>
          {/* <svg></svg> */}
          <div style={{display: "flex", flexDirection: "column"}}>
          {triangle(counter)}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BillingCounter;