/* eslint-disable jsx-a11y/anchor-is-valid */
import {Link} from 'react-router-dom';

export default function DashboardItem({pet}) {
  return (
    <li className="otherPet">
      <h3>Name: {pet.name}</h3>
      <p>Category: {pet.category}</p>
      <p className="img">
        <img src={pet.imageURL} alt="petImg" />
      </p>
      <p className="description">{pet.description}</p>
      <div className="pet-info">
        <Link to="#">
          <button className="button">
            <i className="fas fa-heart"></i> Pet
          </button>
        </Link>
        <Link to={`/pets/details/${pet.id}`}>
          <button className="button">Details</button>
        </Link>
        <i className="fas fa-heart"></i> <span> {pet.likes}</span>
      </div>
    </li>
  );
}
