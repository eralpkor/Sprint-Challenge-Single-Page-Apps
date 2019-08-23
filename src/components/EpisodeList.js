import React, { useEffect, useState } from "react";
import axios from "axios";
import EpisodeCard from "./EpisodeCard";
import { Grid } from "semantic-ui-react";

export default function EpisodeList() {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/episode/").then(res => {
      console.log(res.data.results);
      setEpisode(res.data.results);
    });
  }, []);

  return (
    <section className="episode-list grid-view">
      <Grid container columns={2}>
        {episode.length ? (
          episode.map(episodes => {
            return <EpisodeCard key={episodes.id} episode={episodes} />; // return episode component
          })
        ) : (
          <p>Loading...</p>
        )}
      </Grid>
    </section>
  );
}
