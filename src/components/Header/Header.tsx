import './Header.scss';
import Logo from '~/assets/logo.png';

function Header() {
  const menu = [
    {
      name: 'Trang chủ',
      id: ''
    },
    {
      name: 'Về chúng tôi',
      id: 'about-us'
    },
    {
      name: 'Sản phẩm',
      id: 'products'
    },
    {
      name: 'Tin tức',
      id: 'blog'
    },
    {
      name: 'Liên hệ',
      id: 'contact'
    }
  ]

  return (
    <nav className="navbar fixed-top navbar-expand-lg bg-light shadow-lg">
      <div className="container">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggler" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarToggler">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menu.map((item, key) => {
              return (
                <li className="nav-item" key={key}>
                  <a href={window.location.origin + '#' + item.id}>{item.name}</a>
                </li>
              )
            })}
          </ul>
          <div className="d-flex">
            <img className="logo" src={Logo} alt="Tortoise coffee" />
          </div>
        </div>
        <img className="logo mobile" src={Logo} alt="Tortoise coffee" />
      </div>
    </nav>
  );
}
export default Header;