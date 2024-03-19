import { useState } from 'react';
import './Header.scss';

function Header() {
  const menu = [
    {
      name: 'Home',
      id: '#'
    },
    {
      name: 'About Us',
      id: '#about-us'
    },
    {
      name: 'Products',
      id: '#products'
    },
    {
      name: 'Contact',
      id: '#footer'
    }
  ]

  const [active, setActive] = useState(menu[0].id);

  const handleClickMenu = (id: string) => {
    setActive(id);
  }

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menu.map((item, key) => {
              const classMenuItem = "nav-link " + (active === item.id ? 'active' : '');
              return (
                <li className="nav-item" key={key}>
                  <a className={classMenuItem} aria-current="page" href={item.id} onClick={() => handleClickMenu(item.id)}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          <div className="d-flex">
            <a className="btn btn-outline-success">Shop</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
export default Header;