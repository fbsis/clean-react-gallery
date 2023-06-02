import { GalleryItem } from "./GalleryItem";

export interface GaleryContexData {
  currentItem: GalleryItem | null;
  setCurrentItemById(itemId: string): void;
  galleryItems: GalleryItem[] | null;
  hasPrevious: boolean;
  hasNext: boolean;
  goToPrevious(): Promise<void>;
  goToNext(): Promise<void>;
}
