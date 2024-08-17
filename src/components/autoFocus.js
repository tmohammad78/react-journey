import { useEffect, useLayoutEffect, useRef } from 'react';

function AutoFocus() {
    const el = useRef(null)


    useLayoutEffect(() => {
        el.current.focus();
    }, []);


  return (
    <div>
        This input is auto focus
        <input ref={el} type='text' />
    </div>
  );
}

export default AutoFocus;
