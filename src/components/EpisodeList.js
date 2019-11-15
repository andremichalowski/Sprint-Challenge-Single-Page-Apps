import React, { useEffect, useState } from "react";

import axios from 'axios';
import EpisodeCard from "./EpisodeCard";

export default function EpisodeList() {
  const [episode, changeEpisode] = useState([]);

  useEffect(() => {
    axios 
      .get ('https://rickandmortyapi.com/api/episode/')
      .then ( res => {
        console.log(res.data.results);
        changeEpisode(res.data.results);
      })
      .catch(err => {
        console.log(err);
      })
    }, []);

  return (
    <section className="character-list">
      <h2>Wub a lub a dub dub episodes.</h2>
      {
        episode.map((episode, index) => {
          return(
            <EpisodeCard key={index} episode={episode} />
          )
        })
      }
    </section>
  );
}