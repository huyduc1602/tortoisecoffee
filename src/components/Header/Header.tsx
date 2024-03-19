import './Header.scss';

function Header() {

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about-us">About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#products">Product</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#footer">Contact</a>
            </li>
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