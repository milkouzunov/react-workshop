/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from 'react';
import * as petsService from '../../service/petsService';

import DashboardItem from './DashboardItem';
import DashboardNavigation from './DashboardNavigation';

export default function Dashboard({match}) {
  const [pets, setPets] = useState([]);

  useEffect (() => {
        petsService.getAll(match.params.category)
          .then(pets => setPets(pets))
          .catch(err => console.error(err));
  }, [match]); 

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>

      <DashboardNavigation />

      <ul className="other-pets-list">
        {pets.map(p => <DashboardItem key={p.id} pet={p}/>)}
      </ul>

      <style jsx>
        {`
          .dashboard > nav > ul {
            display: flex;
          }
          .dashboard > nav > ul li:not(:last-child) {
            padding-right: 1rem;
          }
          .dashboard .navbar {
            justify-content: center;
          }
          .dashboard nav {
            background: transparent;
          }
          .dashboard h1 {
            text-align: center;
            margin: 0rem;
            padding: 2rem 0 1rem 0;
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
          .otherPet {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .otherPet > p:nth-child(2) {
            font-size: 1.2rem;
            font-weight: bold;
          }
          .dashboard .other-pets-list {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
          }
        `}
      </style>
    </section>
  );
}
