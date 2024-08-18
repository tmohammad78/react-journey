import { useState } from "react";


const MovingDots = () => {

    const [position,setPosition] = useState({
        x: 0,
        y: 0
    })

    return (
        <div
        onPointerMove={e => {
          setPosition({
            x: e.clientX,
            y: e.clientY
          });
        }}
        style={{
            position: 'relative',
            width: "400px",
            height: "500px",
            border: "2px solid"
        }}>
        <div style={{
          position: 'absolute',
          backgroundColor: 'red',
          borderRadius: '50%',
          transform: `translate(${position.x}px, ${position.y}px)`,
          left: -10,
          top: -10,
          width: 20,
          height: 20,
        }} />
      </div>
    )
}
export default MovingDots;