import { useState, useEffect } from 'react';
import * as petsService from '../../service/petsService';
import InputError from '../Shared/FormError/InputError';

export default function Edit({ match, history }) {
    const [pet, setPet] = useState({});
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        petsService
        .getOne(match.params.petId)
        .then((res) => setPet(res))
        .catch((err) => console.error(err));
    }, []);

    const onDescriptionSaveSubmit = async (e) => {
        e.preventDefault();
        
        let updatedPet = {...pet, description: e.target.description.value};
        
        try {
           await petsService.update(updatedPet);
           history.push(`/pets/details/${updatedPet.id}`);
        } catch (err) {
            setErrorMessage(err);
        }

    };
    
    const onDescriptionChange = (e) => {

        if(e.target.value.length < 10) {
            setErrorMessage('Description too short');
        } else {
            setErrorMessage('');
        }
    };

  return (
    <section className="detailsMyPet">
      <h3>{pet.name}</h3>
      <p>
        Pet counter: <i className="fas fa-heart"></i> {pet.likes}
      </p>
      <p className="img">
        <img src={pet.imageURL} alt="img" />
      </p>
      <form onSubmit={onDescriptionSaveSubmit}>
        <textarea onBlur={onDescriptionChange} defaultValue={pet.description} type="text" name="description"></textarea>
        <InputError>{errorMessage}</InputError>
        <button className="button">Save</button>
      </form>
      <style jsx>
        {`
          .detailsMyPet > form {
            display: flex;
            flex-direction: column;
            padding-bottom: 1rem;
          }
          .detailsMyPet textarea {
            margin-bottom: 2rem;
          }
          .detailsMyPet {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .detailsMyPet > p:nth-child(2) {
            font-size: 1.2rem;
            font-weight: bold;
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
