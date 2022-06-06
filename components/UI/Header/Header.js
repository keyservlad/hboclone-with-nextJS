import Account from "../Account/Account";
import SearchModel from "../SearchModel/SearchModel";
import { useStateContext } from "../../HBOProvider";
import SideNav from "../SideNav/SideNav";
import Link from "next/link";

const Header = (props) => {
  const globalState = useStateContext();

  return (
    <header
      className={`top-header ${
        globalState.accountModelOpen || globalState.sideNavOpen
          ? "top-header--menu-open"
          : ""
      }`}
    >
      <div className="top-header__left-side">
        <div
          className="top-header__menu-btn"
          onClick={() =>
            globalState.setSideNavOpenAction(!globalState.sideNavOpen)
          }
        >
          <i className="fas fa-bars" />
        </div>
        <div
          className="top-header__search-btn"
          onClick={() =>
            globalState.setSearchOpenAction(!globalState.searchOpen)
          }
        >
          <i className="fas fa-search" />
        </div>
      </div>
      <Link href="/">
        <a>
          <div className="top-header__logo"></div>
        </a>
      </Link>
      <div
        className="top-header__account"
        onClick={() =>
          globalState.setAccountModelOpenAction(!globalState.accountModelOpen)
        }
      >
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          className="top-header__user-img"
        />
        <div className="top-header__user-name">Arnaud</div>
      </div>
      <SideNav />
      <Account />
      <SearchModel />
    </header>
  );
};

export default Header;
