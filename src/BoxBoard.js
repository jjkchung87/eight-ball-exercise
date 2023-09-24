import React, { useState } from 'react';
import Box from './Box';

const BoxBoard = (props) => {
  const [boxes, setBoxes] = useState(() => {
    const initialBoxes = [];
    for (let i = 0; i < props.boxCount; i++) {
      const color = props.colors[Math.floor(Math.random() * props.colors.length)];
      initialBoxes.push({ key: i, color, isChanged: false });
    }
    return initialBoxes;
  });

  const clickButton = () => {
    const idx = Math.floor(Math.random() * boxes.length);
    const newColor = props.colors[Math.floor(Math.random() * props.colors.length)];
  
    // Create a new array with isChanged set to false for all boxes
    const newBoxes = boxes.map((box, index) => ({
      ...box,
      isChanged: index === idx ? true : false,
      color: index === idx ? newColor : box.color,
    }));
  
    setBoxes(newBoxes);
  };
  

  return (
    <div className="BoxBoard">
      <h1>Boxes</h1>
      {boxes.map((box) => (
        <Box key={box.key} color={box.color} isChanged={box.isChanged} />
      ))}
      <button className="BoxBoard-button" onClick={clickButton}>
        Change color
      </button>
    </div>
  );
};

BoxBoard.defaultProps = {
  boxCount: 16,
  colors: [
    "red",
    "blue",
    "green",
    "yellow",
    "purple",
    "orange",
    "pink",
    "brown",
  ],
};

export default BoxBoard;
