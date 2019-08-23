import React, { useEffect, useState } from "react";
import axios from "axios";
import { Grid } from "semantic-ui-react";
import LocationCard from "./LocationCard";
import Circle from "./Circle";

export default function LocationsList() {
  const [location, setLocation] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/location/")
      .then(res => {
        console.log(res.data.results);
        setLocation(res.data.results);
      })
      .catch(err => console.log("Error happened in location API ", err));
  }, []);

  return (
    <section className="character-list grid-view">
      <Grid container columns={2}>
        {location.length ? (
          location.map(place => {
            return <LocationCard key={place.id} place={place} />; // return location component
          })
        ) : (
          <Circle />
        )}
      </Grid>
    </section>
  );
}
