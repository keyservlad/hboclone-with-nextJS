import Link from "next/link";
import { useStateContext } from "../../HBOProvider";
import { useEffect } from "react";
import { useRouter } from "next/router";
import ls from "local-storage";

const Account = (props) => {
  const globalState = useStateContext();
  const router = useRouter();

  // const loopComp = (comp, digit) => {
  //   let thumbnails = [];
  //   for (let index = 0; index < digit; index++) {
  //     thumbnails.push(comp);
  //   }
  //   return thumbnails;
  // };
  useEffect(() => {
    if (globalState.accountModelOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.accountModelOpen]);

  const watchMedia = (url) => {
    router.push(url);
    globalState.setAccountModelOpenAction(!globalState.accountModelOpen);
  };

  const showWatchList = () => {
    return globalState.watchList.map((item, index) => {
      return (
        <div className="account__watch-video" key={index}>
          <img src={item.mediaUrl} />
          <div className="account__watch-overlay">
            <div className="account__watch-buttons">
              <div
                className="account__watch-circle"
                onClick={() => watchMedia(`/${item.mediaType}/${item.mediaID}`)}
              >
                <i className="fas fa-play"></i>
              </div>
              <div
                className="account__watch-circle"
                onClick={() => globalState.removeFromList(item.mediaID)}
              >
                <i className="fas fa-times" />
              </div>
            </div>
          </div>
        </div>
      );
    });
  };

  const signOut = () => {
    ls.remove("users");
    router.push("/create");
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
          {globalState.watchList !== null && globalState.watchList.length > 0
            ? showWatchList()
            : "No movies added"}
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
          <li onClick={signOut}>
            <a>Account</a>
          </li>
          <li onClick={signOut}>
            <a>Sign Out</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Account;
