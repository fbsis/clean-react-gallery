import React from "react";
import { useGalery } from "../hooks/useGallery";
import { GalleryItem } from "../types/gallery/GalleryItem";
import NextButton from "./NextButton";
import PreviousButton from "./PreviousButon";

const Image = (props: { src: string; id: string, onClick: any }) => {
  const getIdImage = props.src.split("-")[0];
  const { setCurrentItemById, currentItem } = useGalery();

  return (
    <a href="/#" className={currentItem?.id === props.id ? "active" : "" } title={getIdImage} onClick={() => setCurrentItemById(props.id)}>
      <img
        src={`/images/thumbnails/${props.src}`}
        alt={props.src}
        width="145"
        height="121"
      />
      <span>{getIdImage}</span>
    </a>
  );
};

const Thumbnails: React.FC = () => {
  const { galleryItems, hasPrevious, hasNext, setCurrentItemById } = useGalery();

  const images: GalleryItem[] | null = galleryItems;

  return (
    <div className="thumbnails">
      <div className="group">
        {images &&
          images.map((image) => <Image key={image.id} src={image.thumbnail} id={image.id} onClick={setCurrentItemById} />)}

        <PreviousButton disabled={!hasPrevious} />
        <NextButton disabled={!hasNext} />
      </div>
    </div>
  );
};

export default Thumbnails;
