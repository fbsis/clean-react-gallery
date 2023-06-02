import React, { CSSProperties } from 'react';
import { useGalery } from '../hooks/useGallery';
interface props {
  disabled: boolean;
}

const NextButton: React.FC<props> = (props) => {
  const { goToNext } = useGalery();

  const handlerClick = () =>{
    if(props.disabled) return false;
    goToNext();
  }

  const style:CSSProperties = {
    backgroundImage: `url("/images/next.png")`, 
    position: "absolute",
    float: "none",
    right: "10px",
    height: "24px",
    textIndent: "-9999em",
    top: "64px",
    width: "24px",
    opacity: props.disabled ? .2 : 1
  }

  return (
    <a href='/#next' title="Next" className="next" onClick={() => handlerClick()} style={style}> </a>
  );
}

export default NextButton;