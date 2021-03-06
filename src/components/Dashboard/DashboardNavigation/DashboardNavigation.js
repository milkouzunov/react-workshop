import { NavLink } from 'react-router-dom';


export default function DashboardNavigation () {
    return (
        <nav className="navbar">
        <ul>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/categories/all">All</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/categories/cats">Cats</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/categories/dogs">Dogs</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/categories/parrots">Parrots</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/categories/reptiles">Reptiles</NavLink>
          </li>
          <li>
            <NavLink activeClassName="nav-link-selected" to="/categories/other">Other</NavLink>
          </li>
        </ul>

        <style jsx>
           {`
              .nav-link-selected {
                  background-color: rgb(248, 215, 107) !important;
              }
           `}
        </style>
      </nav>
    );
}