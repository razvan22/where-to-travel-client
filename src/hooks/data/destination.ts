import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import axios from "../../api/axios";

export const getAllDestinations = async () => {
  return await axios.get<DestinationResponse[]>(`/destination/all`);
};
