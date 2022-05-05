import Link from "next/link";
import { useStateContext } from "../../HBOProvider";

const Account = (props) => {
  const globalState = useStateContext();

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index < digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div
      className={`account ${
        globalState.accountModelOpen ? "account--active" : ""
      }`}
    >
      <div className="account__details">
        <div className="account__title">My List</div>
        <div className="account__watch-list">
          {loopComp(
            <div className="account__watch-video">
              <img src="https://m.media-amazon.com/images/I/713K3DnSH0L._AC_SL1024_.jpg" />
              <div className="account__watch-overlay">
                <div className="account__watch-buttons">
                  <div className="account__watch-circle">
                    <i className="fas fa-play"></i>
                  </div>
                  <div className="account__watch-circle">
                    <i className="fas fa-times" />
                  </div>
                </div>
              </div>
            </div>,
            6
          )}
        </div>
      </div>
      <div className="account__menu">
        <ul className="account__main">
          <li>
            <Link href="/">
              <a className="active">My List</a>
            </Link>
          </li>
        </ul>
        <div className="side-nav__divider" />
        <ul className="account__main">
          <li>
            <Link href="/" className="">
              Account
            </Link>
          </li>
          <li>
            <Link href="/" className="">
              Sign Out
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
