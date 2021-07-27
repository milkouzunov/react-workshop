/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import { useEffect, useState } from "react";
import * as petsService from "../../service/petsService";

import DashboardItem from "./DashboardItem";
import DashboardNavigation from "./DashboardNavigation";

export default function Dashboard({ match }) {
  const [pets, setPets] = useState(null);

  useEffect(() => {
    petsService
      .getAll(match.params.category)
      .then((pets) => setPets(pets))
      .catch((err) => console.error(err));
  }, [match]);

  return (
    <section className="dashboard">
      <h1>Dashboard</h1>

      <DashboardNavigation />

      {pets ? (
        <ul className="other-pets-list">
          {pets.map((p) => (
            <DashboardItem key={p.id} pet={p} />
          ))}
        </ul>
      ) : (
        <div style={{ display: 'inline-block' , paddingLeft: 410}}>
          <h1>No Pets</h1>
          <img style={{position: 'unset', height: 100, width: 100}} src='data:image/png;base64,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' alt="petImg" />
        </div>
      )}

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
