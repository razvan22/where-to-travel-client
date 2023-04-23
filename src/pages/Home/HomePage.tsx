import { useEffect, useState } from "react";
import Destination from "../../components/destination/Destination";
import "./HomePage.css";
import { DestinationDTO } from "../../models/location/DestinationDTO";
import axios from "axios";

const HomePage: React.FC = () => {
  const [destinations, setDestinations] = useState<DestinationDTO[]>([]);

  useEffect(() => {
    const getAllDestinations = async () => {
      const response = await axios.get<DestinationDTO[]>(
        "http://localhost:8080/api/v1/destination/all"
      );
      setDestinations(response.data);
    };
    getAllDestinations();
  }, []);

  return (
    <section className="home">
      {destinations.map((destination: DestinationDTO) => (
        <Destination destination={destination} key={destination.id} />
      ))}
    </section>
  );
};

export default HomePage;
