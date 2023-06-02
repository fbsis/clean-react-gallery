import { GalleryContext } from "../context/GalleryProvider";
import { useContext } from "react";

export function useGalery() {
  const context = useContext(GalleryContext);

  return context;
}
