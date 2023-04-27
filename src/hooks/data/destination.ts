import axios, { AxiosError, AxiosResponse } from "axios";
import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllDestinations = async () => {
  return await axios.get<DestinationResponse[]>(`${baseUrl}/destination/all`);
};
