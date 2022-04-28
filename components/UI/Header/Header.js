import Account from "../Account/Account";

const Header = (props) => {
  return (
    <header className="top-header">
      <div className="top-header__left-side">
        <div className="top-header__manu-btn">
          <i className="fas fa-bars" />
        </div>
        <div className="top-header__search-btn">
          <i className="fas fa-search" />
        </div>
      </div>
      <div className="top-header__logo"></div>
      <div className="top-header__account">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="top-header__user-img"
        />
        <div className="top-header__user-name">Bryan</div>
      </div>
      <Account />
    </header>
  );
};

export default Header;
