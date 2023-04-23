import { ImageDTO } from "./ImageDTO";

export type DestinationDTO = {
  id: string;
  title: string;
  description: string;
  images: ImageDTO[];
};
