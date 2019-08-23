import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import { Grid } from "semantic-ui-react";
import Circle from "./Circle";

export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/episode/")
      .then(res => {
        console.log(res.data.results);
        setEpisode(res.data.results);
      })
      .catch(err => console.log("Error happened in episodes API ", err));
  }, []);

  return (
    <section className="episode-list grid-view">
      <Grid container columns={2}>
        {episode.length ? (
          episode.map(episodes => {
            return <EpisodeCard key={episodes.id} episode={episodes} />; // return episode component
          })
        ) : (
          <Circle />
        )}
      </Grid>
    </section>
  );
}
