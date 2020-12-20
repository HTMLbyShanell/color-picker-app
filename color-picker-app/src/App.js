import React, {useState, useRef, useEffect} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  const color = useRef(`rgb(${red},${green},${blue})`);
  const hexList = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
  function findHexCode(num){
    let firstVal,secondVal;
    firstVal = Math.floor(num/16);
    let diff = (num/16 - firstVal);
    secondVal = Math.floor(diff.toFixed(2)*16);
    let colrCode = `${hexList[firstVal]}${hexList[secondVal]}`;
    return colrCode;
  }

  useEffect(()=>{
    color.current = `rgb(${red},${green},${blue})`;
  })
  return (
    <>
    <main className='main' style={{backgroundColor: color.current}}>
        <div className="card" style={{width: '22rem'}}>
            <div className="card-body">
              <h3 className="card-title">React Color App</h3>
              <p className="card-text">Welcome to the Color Picker App! Find the code for any color, or play with the range sliders below to find your favorite color.</p>
            </div>
            <ul className="list-group list-group-flush">
              <li className="list-group-item"><input type="range" onChange={(e)=>{setRed(e.target.value)}} min="0" max="255" value={red}/><label className="text-danger px-3"><b>Red</b></label></li>
              <li className="list-group-item"><input type="range" onChange={(e)=>{setGreen(e.target.value)}} min="0" max="255" value={green}/><label className="text-success px-3"><b>Green</b></label></li>
              <li className="list-group-item"><input type="range" onChange={(e)=>{setBlue(e.target.value)}} min="0" max="255" value={blue}/><label className="text-primary px-3"><b>Blue</b></label></li>
            </ul>
            <div className="card-body row text-center">
              <p className="card-text col h5" id="rgb">{`rgb(${red},${green},${blue})`}</p>
              <p className="card-text col h5">#<span id="hexcode">{findHexCode(red)+findHexCode(green)+findHexCode(blue)}</span></p>
            </div>
          </div>
      </main>
      </>
  );
}

export default App;