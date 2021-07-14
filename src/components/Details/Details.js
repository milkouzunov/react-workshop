import { useState, useEffect } from "react";

import * as petsService from "../../service/petsService";

export default function Details({ match }) {
  let [pet, setPet] = useState({});

  useEffect(() => {
    petsService
      .getOne(match.params.petId)
      .then((res) => setPet(res))
      .catch((err) => console.error(err));
  }, [match]);

  return (
    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: {pet.likes}
        <a href="#">
          <button className="button">
            <i className="fas fa-heart"></i> Pet
          </button>
        </a>
      </p>
      <p className="img">
        <img src={pet.imageURL} alt="petImg" />
      </p>
      <p className="description">{pet.description}</p>
      <style jsx>
        {`
          .detailsOtherPet {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .fa-heart {
            color: red;
          }

          .img {
            width: 15rem;
            position: relative;
            overflow: hidden;
            padding: 0rem;
          }

          .img::after {
            display: block;
            content: "";
            padding-top: 100%;
          }
        `}
      </style>
    </section>
  );
}
