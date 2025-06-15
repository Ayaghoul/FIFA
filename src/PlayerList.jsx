import React from "react";
import players from "./Players";
import Player from "./Player";

const PlayerList = () => {
  return (
    <>
      {players.map((player, index) => (
        <Player
          key={index}
          name={player.name}
          team={player.team}
          nationality={player.nationality}
          jerseyNumber={player.jerseyNumber}
          age={player.age}
          image={player.image}
        />
      ))}
    </>
  );
};

export default PlayerList;
