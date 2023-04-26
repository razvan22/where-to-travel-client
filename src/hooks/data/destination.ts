import axios, { AxiosResponse } from "axios";
import { DestinationResponse } from "../../models/location/DestinationResponse";
const baseUrl = process.env.REACT_APP_BASE_URL;

export const getAllDestinations = async (): Promise<
  AxiosResponse<DestinationResponse[]>
> => {
  return await axios.get<DestinationResponse[]>(`${baseUrl}/destination/all`);
};
