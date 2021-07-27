import { useState, useEffect } from "react";

import { Link } from 'react-router-dom';

import * as petsService from "../../service/petsService";

export default function Details({ match }) {
  let [pet, setPet] = useState({});

  useEffect(() => {
    petsService
      .getOne(match.params.petId)
      .then((res) => setPet(res))
      .catch((err) => console.error(err));
  }, [match]);

  const onPetButtonClickHandler = () => {
    let incrementedLikes = Number(pet.likes) + 1;
    petsService.pet(match.params.petId, incrementedLikes)
    .then(() => {
      setPet(state => ({...state, likes: Number(state.likes) + 1}));
     });
  };

  return (
    <section className="detailsOtherPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: {pet.likes}
          <button onClick={onPetButtonClickHandler} className="button">
            <i className="fas fa-heart"></i> Pet
          </button>
      </p>
      <p className="img">
        <img src={pet.imageURL} alt="petImg" />
      </p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
            <Link to={`/pets/edit/${pet.id}`}><button className="button">Edit</button></Link>
            <Link to="#"><button className="button">Delete</button></Link>
            <i className="fas fa-heart"></i> <span>{pet.likes}</span>
          </div>
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
