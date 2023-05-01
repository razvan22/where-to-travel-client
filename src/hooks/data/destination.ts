import axios from "axios";
import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import { baseUrl } from "../baseUrl";

export const getAllDestinations = async () => {
	return await axios.get<DestinationResponse[]>(`${baseUrl()}/destination/all`);
};
