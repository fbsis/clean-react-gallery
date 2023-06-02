/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { useGalery } from "../hooks/useGallery";

const BigImage: React.FC = () => {
  const { currentItem } = useGalery();

  return (
    <div id="large">
      <div className="group">
        <img src={`/images/large/${currentItem?.image}`} alt="Large Image" width="430" height="360" />
        <div className="details">
          <p><strong>Title</strong> {currentItem?.title}</p>
          <p><strong>Description</strong> {currentItem?.description}</p>
          <p><strong>Cost</strong> ${currentItem?.cost}</p>
          <p><strong>ID #</strong> {currentItem?.id}</p>
          <p><strong>Thumbnail File</strong> {currentItem?.thumbnail}</p>
          <p><strong>Large Image File</strong> {currentItem?.image}</p>
        </div>
      </div>
  </div>
  );
};

export default BigImage;
