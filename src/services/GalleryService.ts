import { GalleryItem } from "../types/gallery/GalleryItem";
import api from "./Api";

interface apiGetTemplateResponse {
  template: GalleryItem[];
  hasPrevious: boolean;
  hasNext: boolean;
  total: number;
}

export function getTemplates(page: number = 0): Promise<any> {
  return api.get<apiGetTemplateResponse>("/template?page=" + page);
}
