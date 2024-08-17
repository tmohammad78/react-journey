import '../App.css';
import OrderEffects from '../components/orderEffect';
import AnimatetMe from '../components/animateMe';
import AutoFocus from '../components/autoFocus';

function Effects() {
  return (
    <div>
      <h1> Examples of Effects of React, useEffect and useLayoutEffect </h1>

      <div className='wrapper'>
        <b>1: useEffect vs useLayoutEffect</b>
        <OrderEffects />
      </div>

      <div className='wrapper'>
            <b>2: Animation and change DOM</b> 
            <div>
              It will displayed next 3 sec : <AnimatetMe />
            </div>
      </div>

      <div className='wrapper'>
        <b>3: Auto focus input</b> 
        <AutoFocus />
      </div>
    </div>
  );
}

export default Effects;
