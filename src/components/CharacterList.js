import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import { Grid } from "semantic-ui-react";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependencies array!
    axios.get("https://rickandmortyapi.com/api/character/").then(res => {
      console.log(res.data.results);
      setCharacter(res.data.results);
    });
  }, []);

  return (
    <section className="character-list grid-view">
      <Grid container columns={2}>
        {character.length ? (
          character.map(person => {
            return <CharacterCard key={person.id} person={person} />; // return Person component
          })
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </section>
  );
}
