/* eslint-disable no-unused-vars */
import React, { useState } from "react";

function App() {

  const [text, setText] = useState("");
  const [cipher, setCipher] = useState("");
  const [realTime, setRealTime] = useState("Enable");
  let code, diff;

  const fun = (str) => {
    var temp = "", curr = str;
    for (var id = 0 ; id < curr.length ; id++ ) {
      code = curr.charCodeAt(id);
      if(code >= 65 && code <= 90) {
        diff = code - 65;
        temp += String.fromCharCode(90 - diff);
      }
      else if(code >= 97 && code <= 122) {
        diff = code - 97;
        temp += String.fromCharCode(122 - diff);
      }
      else temp += curr[id];
    }
    return temp;
  }

  const convert = (e) => {
    if(e.target.innerText === "Cipher") setCipher(fun(text));
    else setText(fun(cipher));
  }

  const changeRealTime = () => {
   setCipher('');
   setText('');
  }

  const changeText = (e) => {
    setText(e.target.value);
    if(realTime === "Disable") {
      setCipher(fun(e.target.value));
    }
  }

  const changeCipherText = (e) => {
    setCipher(e.target.value);
    if(realTime === "Disable") {
      setText(fun(e.target.value));
    }
  }

  return (
    <>
    <div className="flex flex-row ml-48 mt-24 ">
    <div>
      <h3 className="text-white"> Plain Text </h3>
      <textarea rows="5" cols="30" value={text} onChange={changeText} placeholder="Enter plain Text" className="mt-4 pr-4 pl-4 pt-4 rounded-lg"/>
      </div>
      <div className="ml-24">
      <h3 className="text-white"> Ciphered Text </h3>
      <textarea rows="5" cols="30" value={cipher} onChange={changeCipherText} placeholder="Enter Ciphered Text" className="mt-4 pr-4 pl-4 pt-4 rounded-lg"/>
      </div>
    </div>
    <div className="flex flex-row ml-48 mt-4">
        <button onClick={convert} className="bg-blue-600 rounded-full text-white pl-4 pr-4"> Cipher </button>
        <button onClick={convert} className="ml-4 bg-blue-600 rounded-full text-white pl-4 pr-4"> Decipher </button>
        <button onClick={changeRealTime} className="ml-4 bg-blue-600 rounded-full text-white pl-4 pr-4"> Clear </button>
      </div>
      </>
  );
}

export default App;
