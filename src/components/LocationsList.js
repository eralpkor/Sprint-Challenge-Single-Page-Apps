import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import LocationCard from "./LocationCard";

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location/").then(res => {
      console.log(res.data.results);
      setLocation(res.data.results);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <Grid container columns={2}>
        {location.length ? (
          location.map(place => {
            return <LocationCard key={place.id} place={place} />; // return location component
          })
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </section>
  );
}
