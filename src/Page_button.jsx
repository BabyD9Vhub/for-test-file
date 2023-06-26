import React from "react";
import { useState } from "react";


function Page_button(){
    const [num, setNum] = useState(0);
    const [primeR, setPrime] = useState("กดคลิกเพิ่ม หรือ ลด");

    function AddPrimeNumber() {
      let prime = true;
      let num_x = num + 1;
      setNum(num_x);
      if (num_x === 0 || num_x === 1) setPrime("ไม่เป็นจำนวนเฉพาะ")
      else {
        for (let i = 2; i < num_x; i++) {
          if (num_x % i === 0) {
            prime = false;
            break;
          }
        }
        if (prime) setPrime("เป็นจำนวนเฉพาะ");
        else setPrime("ไม่เป็นจำนวนเฉพาะ");
      }
    }
  
    function SubtractPrimeNumber() {
      let prime = true;
      let num_x = num - 1;
      if (num_x >= 0) {
      setNum(num_x);
      }


      
        if (num_x === 0 || num_x === 1) {
            setPrime("ไม่เป็นจำนวนเฉพาะ");
    }else {
            for (let i = 2; i < num_x; i++) {
            if (num_x % i === 0) {
                prime = false;
                break;
            }
            }
            if (prime && num_x >= 1 ) setPrime("เป็นจำนวนเฉพาะ");
            else setPrime("ไม่เป็นจำนวนเฉพาะ");
        }

      
    }    

    return(
        <div className="container">
            <div className="Botton">

                <div className="Bottonlist">
                <h1 className="text-center">{num}</h1> 
                <p className="text-center">{primeR}</p>
                <button className="btn btn-success" onClick={AddPrimeNumber}>เพิ่ม</button>
                <button className="btn btn-danger" onClick={SubtractPrimeNumber}>ลด</button>
        
                </div>
            </div>
        </div>
    );
}


export default Page_button;