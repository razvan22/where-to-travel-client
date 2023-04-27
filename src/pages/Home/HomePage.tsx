import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllDestinations } from "../../hooks/data/destination";
import Destination from "../../components/destination/Destination";
import { DestinationResponse } from "../../shared/types/location/DestinationResponse";
import "./HomePage.css";
import { Skeleton } from "@mui/material";
import LoadingLogo from "../../shared/loading-logo/LoadingLogo";

const HomePage: React.FC = () => {
  const { isLoading, data } = useQuery(
    ["destinations-all"],
    getAllDestinations
  );

  return (
    <section className="home">
      {isLoading ? (
        <LoadingLogo />
      ) : (
        data?.data.map((destination: DestinationResponse) => (
          <Destination destination={destination} key={destination.id} />
        ))
      )}
    </section>
  );
};

export default HomePage;
