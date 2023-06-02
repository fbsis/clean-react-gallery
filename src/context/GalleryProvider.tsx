import React, { createContext, useState, useEffect } from "react";
import { getTemplates } from "../services/GalleryService";
import { GaleryContexData } from "../types/gallery/GalleryContextData";
import { GalleryItem } from "../types/gallery/GalleryItem";

export const GalleryContext = createContext<GaleryContexData>(
  {} as GaleryContexData
);

interface GalleryProviderProps {
  children?: React.ReactNode;
}

export const GalleryProvider: React.FC<GalleryProviderProps> = ({
  children,
}) => {
  const [currentItem, setCurrentItem] = useState<GalleryItem | null>(null);
  const [galleryItems, setGalleryItems] = useState<GalleryItem[] | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [hasPrevious, setHasPrevious] = useState<boolean>(false);
  const [hasNext, setHasNext] = useState<boolean>(true);

  const apiCall = async (page: number): Promise<void> => {
    const apiCall = await getTemplates(page);
    setGalleryItems(apiCall.data.template);
    setHasNext(apiCall.data.hasNext);
    setHasPrevious(apiCall.data.hasPrevious);
    setCurrentPage(page);
    if(currentItem === null){
        setCurrentItem(apiCall.data.template[0])   
    }
  };

  const goToNext = async (): Promise<void> => {
    console.log('next')
    await apiCall(currentPage + 1);
  };

  const goToPrevious = async (): Promise<void> => {
    await apiCall(currentPage - 1);
  };

  const setCurrentItemById = (itemId: string): void => {
    setCurrentItem(galleryItems?.find(e=>e.id === itemId) || null)
  };

  useEffect(() =>{
    if(galleryItems === null){
        apiCall(1)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [galleryItems])

  return (
    <GalleryContext.Provider
      value={{
        currentItem,
        setCurrentItemById,
        galleryItems,
        hasPrevious,
        hasNext,
        goToPrevious,
        goToNext,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
};
