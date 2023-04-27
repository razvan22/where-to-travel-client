import { useEffect, useState } from "react";
import "./HomePage.css";
import axios from "axios";
import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import Destination from "../../components/destination/Destination";
import { getAllDestinations } from "../../hooks/data/destination";

const HomePage: React.FC = () => {
  const [destinations, setDestinations] = useState<DestinationResponse[]>([]);

  useEffect(() => {
    const getData = async () => {
      const response = await getAllDestinations();
      setDestinations(response.data);
    };
    getData();
  }, []);

  return (
    <section className="home">
      {destinations.map((destination: DestinationResponse) => (
        <Destination destination={destination} key={destination.id} />
      ))}
    </section>
  );
};

export default HomePage;
