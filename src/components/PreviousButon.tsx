import React, { CSSProperties } from "react";
import { useGalery } from "../hooks/useGallery";

interface props {
  disabled: boolean;
}

const PreviousButton: React.FC<props> = (props) => {
  const { goToPrevious } = useGalery();

  const handlerClick = () =>{
    if(props.disabled) return false;
    goToPrevious();
  }
  const style: CSSProperties = {
    backgroundImage: `url("/images/previous.png")`,
    height: "24px",
    textIndent: "-9999em",
    top: "64px",
    width: "24px",
    position: "absolute",
    float: "none",
    left: "10px",
    opacity: props.disabled ? .2 : 1
  };


  return (
    <a href="/#previous" onClick={() => handlerClick()} className="previous" title="Next" style={style}> </a>
  );
};

export default PreviousButton;
