import { useEffect, useLayoutEffect } from 'react';

function OrderEffects() {

  useEffect(() => {
    console.log("useEffect runs second")
  })

  useLayoutEffect(() => {
    console.log("useEffectLayout runs first")
  })

  return (
    <div>
        Check console log to see order of effects
    </div>
  );
}

export default OrderEffects;
