import { useLayoutEffect, useRef } from "react";

const AnimatingElements = () => {
    const elementRef = useRef(null);
  
    useLayoutEffect(() => {
      const element = elementRef.current;
  
      // Animate the element's opacity on mount
      element.style.opacity = 0;
      setTimeout(() => {
        element.style.opacity = 1;
      }, 3000);
  
      return () => {
        // Clean up animation when the component unmounts
        element.style.opacity = 0;
      };
    }, []);
  
    return <div ref={elementRef}>Animate me!</div>;
  };
export default AnimatingElements
  