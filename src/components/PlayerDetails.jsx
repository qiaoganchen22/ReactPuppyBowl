import React from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useGetPlayerQuery } from "../api/puppyBowlApi";

export default function PlayerDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { players, player } = useSelector((state) => state.playerSlice);
  let data = [];
  if (!players.length) {
    //if no players are loaded fetch the player
    useGetPlayerQuery(id);
    data.push(player);
  } else {
    //if all players are loaded, filter the player
    data = players.filter((player) => player.id === Number(id));
  }
  return data[0] ? (
    <div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        home
      </button>
      <p>{data[0].id}</p>
      <p>{data[0].name}</p>
      <p>{data[0].breed}</p>
      <p>{data[0].status}</p>
      <img src={data[0].imageUrl} alt={data.name} />
    </div>
  ) : (
    <>Loading...</>
  );
}
