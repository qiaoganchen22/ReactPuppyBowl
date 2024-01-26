import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDeletePlayerMutation } from "../api/puppyBowlApi";
import { useDispatch } from "react-redux"; //use to update state in reducer must be called because not extra reducer
import { setPlayer } from "./PlayerSlice";

const Players = () => {
  const { players, player } = useSelector((state) => state.playerSlice);
  const [show, setShow] = useState(players);
  const navigate = useNavigate();
  const [deletePuppy] = useDeletePlayerMutation();

  const search = (e) => {
    //filter what is typed in the text
    setShow(
      players.filter(
        (player) =>
          e.target.value === player.name.substring(0, e.target.value.length)
      )
    );
  };

  const dispatch = useDispatch();

  const deletePlayer = async (e) => {
    const data = players.filter((players) => {
      return players.id === Number(e.target.name);
    });
    dispatch(setPlayer(data[0]));
    await deletePuppy(e.target.name);
    setShow(players.filter((player) => Number(e.target.name) !== player.id));
  };

  return (
    <>
      <input type="text" onChange={search} placeholder="search"></input>
      <div className="players">
        {show.length ? (
          show.map((player, index) => (
            <div key={player.id} className="player-card">
              <div className="player-image-container">
                <img
                  src={player.imageUrl}
                  alt={player.name}
                  className="player-image"
                  onClick={() => {
                    navigate(`/player/${player.id}`);
                  }}
                />
              </div>
              <div className="player-details">
                <h2
                  onClick={() => {
                    navigate(`/player/${player.id}`);
                  }}
                >
                  {" "}
                  {player.name}{" "}
                </h2>

                <p
                  onClick={() => {
                    navigate(`/player/${player.id}`);
                  }}
                >
                  {" "}
                  {player.breed}{" "}
                </p>

                <p
                  onClick={() => {
                    navigate(`/player/${player.id}`);
                  }}
                >
                  {" "}
                  {player.status}{" "}
                </p>

                <button name={player.id} onClick={deletePlayer}>
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <>Not Found...</>
        )}
      </div>{" "}
    </>
  );
};

export default Players;
