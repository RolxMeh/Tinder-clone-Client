import React, { useEffect, useState } from "react";
import TinderCards from "react-tinder-card";


import axios from "../../API/axios";
import "./TinderCards.css";

const TinderCard = () => {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const req = await axios.get("/tinder/cards");

      setPeople(req.data);
    }

    fetchData();
  }, []);

  console.log(people);
  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((person) => {
          return (
            <TinderCards
              className="swipe"
              key={person.name}
              preventSwipe={["up", "down"]}
            >
              <div
                className="card"
                style={{ backgroundImage: `url(${person.imgUrl})` }}
              >
                <h3>{people.name}</h3>
              </div>
            </TinderCards>
          );
        })}
      </div>
    </div>
  );
};

export default TinderCard;
