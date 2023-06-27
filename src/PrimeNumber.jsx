import React from "react";
import "./App.css";
import { useState } from "react";


function isPrime(num) {
    if (num < 2) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }
function PrimeNumber() {
  const [num, setNum] = useState(0);
  const [prime, setPrime] = useState(0);

  function checkPrime(cnum) {
    if (isPrime(cnum)) {
      setPrime("เป็นจำนวนเฉพาะ");
    } else {
      setPrime("ไม่เป็นจำนวนเฉพาะ");
    }
  }

  return (
    <div className="first-class">
        <p>{num}</p>
      <button
        onClick={() => {
          let n = num + 1;
          setNum(n);
          checkPrime(n);
        }}
      >
        เพิ่ม
      </button>
      <button onClick={() => {
        let n = num - 1;
        setNum(n);
        checkPrime(n);
      }}>
        ลด
      </button>
      <p>{prime}</p>
    </div>
  );
}

export default PrimeNumber;
