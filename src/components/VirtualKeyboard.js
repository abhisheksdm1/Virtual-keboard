import React, { useEffect , useState } from 'react';
import './VirtualKeyboard.css';

export default function VirtualKeyboard() {
  
  const [count, setCount] = useState([]);
  const [flag, setFlag] = useState(0);
  const a=[];
  console.log(flag);
  function abc(event)
  {
    if(flag===1)
    {
      const a=event.target.innerHTML;
      console.log(a);
    setCount(count+a.toUpperCase());
  }
  else
  {
    setCount(count+event.target.innerHTML);
  }
  }
  console.log(flag);
  {
    console.log(JSON.stringify(count));
  }
  
  const deleteByValue = ()=> {
    setCount([]);

  }

  return (
    <div>
      {/* <input type='text' className='text'/> */}
      <div className='container'>
       <input type='text' className='text' onChange={abc} value={count}/>
        <div className='keyboard_wrapper'>
            <div className='keyboard_keys'>
                <div className='row'>
                    <div className='keys' >`</div>
                    <div className='keys' onClick={abc}>1</div>
                    <div className='keys'  onClick={() => setCount(count + 2)}>2</div>
                    <div className='keys' onClick={() => setCount(count + 3)}>3</div>
                    <div className='keys' onClick={() => setCount(count + 4)}>4</div>
                    <div className='keys' onClick={() => setCount(count + 5)}>5</div>
                    <div className='keys' onClick={() => setCount(count + 6)}>6</div>
                    <div className='keys' onClick={() => setCount(count + 7)}>7</div>
                    <div className='keys' onClick={() => setCount(count + 8)}>8</div>
                    <div className='keys' onClick={() => setCount(count + 9)}>9</div>
                    <div className='keys' onClick={() => setCount(count + 0)}>0</div>
                    <div className='keys'>-</div>
                    <div className='keys'>=</div>
                    <div className='keys backspace_key'onClick={deleteByValue}>Backspace</div>
                </div>
                <div className='row'>
                    <div className='keys tab_key' onClick={() => setCount(count + "     ")}>tab</div>
                    <div className='keys' onClick={abc}>q</div>
                    <div className='keys' onClick={abc}>w</div>
                    <div className='keys' onClick={abc}>e</div>
                    <div className='keys' onClick={abc}>r</div>
                    <div className='keys' onClick={abc}>t</div>
                    <div className='keys' onClick={abc}>y</div>
                    <div className='keys' onClick={abc}>u</div>
                    <div className='keys' onClick={abc}>i</div>
                    <div className='keys' onClick={abc}>o</div>
                    <div className='keys' onClick={abc}>p</div>
                    <div className='keys'></div>
                    <div className='keys'></div>
                    <div className='keys'>\</div>
                    </div>
                <div className='row'>
                <div className='keys caps_lock_key' onClick={()=>setFlag(1)}>Caps Lock</div>
                    <div className='keys' onClick={() => setCount(count + "a")}>A</div>
                    <div className='keys' onClick={() => setCount(count + "s")}>S</div>
                    <div className='keys' onClick={() => setCount(count + "d")}>D</div>
                    <div className='keys' onClick={() => setCount(count + "f")}>F</div>
                    <div className='keys' onClick={() => setCount(count + "g")}>G</div>
                    <div className='keys' onClick={() => setCount(count + "h")}>H</div>
                    <div className='keys' onClick={() => setCount(count + "j")}>J</div>
                    <div className='keys' onClick={() => setCount(count + "k")}>K</div>
                    <div className='keys' onClick={() => setCount(count + "l")}>L</div>
                    <div className='keys'>:</div>
                    <div className='keys'>"</div>
                    <div className='keys enter_key'>Enter</div>
                </div>
                <div className='row'>
                    <div className='keys shift_key shift_left'>Shift</div>
                    <div className='keys remove' onClick={() => setCount(count + "z")}>Z</div>
                    <div className='keys' onClick={() => setCount(count + "x")}>X</div>
                    <div className='keys' onClick={() => setCount(count + "c")}>C</div>
                    <div className='keys' onClick={() => setCount(count + "v")}>V</div>
                    <div className='keys' onClick={() => setCount(count + "b")}>B</div>
                    <div className='keys' onClick={() => setCount(count + "n")}>N</div>
                    <div className='keys' onClick={() => setCount(count + "m")}>M</div>
                    <div className='keys'></div>
                    <div className='keys'></div>
                    <div className='keys'>,</div>
                    <div className='keys'>.</div>
                    <div className='keys'>?</div>
                    <div className='keys shift_key shift_right'>Shift</div>
                    </div>
                <div className='row'>
                    <div className='keys  ctrl_key ctrl_left'>Ctrl</div>
                    <div className='keys win_key'>Win</div>
                    <div className='keys alt_key alt_left'>Alt</div>
                    <div className='keys space_key' onClick={() => setCount(count + " ")}></div>
                    <div className='keys alt_key alt_right'>Alt</div>
                    <div className='keys fn_key'>Fn</div>
                    <div className='keys ctrl_key ctrl_right'>Ctrl</div>
                    </div>
            </div>
        </div>
      </div>
    </div>
  )
}
