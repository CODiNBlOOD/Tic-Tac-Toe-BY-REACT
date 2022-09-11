import React from "react";

function SquareComponent(props) {
    const classes=props.className?`${props.className} Square`:`Square`; 
    // means if there is a class ( bottom or right border) then print both (props.classname and square) : else print square
  return (
<span className={classes} onClick={props.onClick}>
   {props.state}  
</span>
  );
}

export default SquareComponent;
