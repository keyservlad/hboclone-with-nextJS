import React, { useContext, useState } from "react";
import ls from "local-storage";

export const StateContext = React.createContext();

export function useStateContext() {
  return useContext(StateContext);
}

export function HBOProvider({ children }) {
  const [user, setUser] = useState("");
  const defaultUserImg = "https://randomuser.me/api/portraits/men/32.jpg";

  const createUserAction = (e) => {
    setUser(e.target.value);
    // console.log(user);
  };

  const [sideNavOpen, setSideNavOpenAction] = useState(false);
  const [accountModelOpen, setAccountModelOpenAction] = useState(false);
  const [searchOpen, setSearchOpenAction] = useState(false);
  const [watchList, setWatchList] = useState(ls.get("myList"));

  const addToList = (video) => {
    let myList;
    if (ls("myList") !== null) {
      myList = ls.get("myList");
      myList.push(video);
      ls.set("myList", myList);
      setWatchList(myList);
    } else {
      ls.set("myList", [video]);
    }
  };

  const removeFromList = (videoID) => {
    let myList = ls("myList");
    myList = myList.filter((item) => item.mediaID != videoID);
    ls.set("myList", myList);
    setWatchList(myList);
  };

  const thumbTypes = ["large-v", "small-v", "large-h", "small-h"];

  return (
    <StateContext.Provider
      value={{
        user,
        createUserAction,
        defaultUserImg,
        sideNavOpen,
        setSideNavOpenAction,
        accountModelOpen,
        setAccountModelOpenAction,
        searchOpen,
        setSearchOpenAction,
        thumbTypes,
        addToList,
        removeFromList,
        watchList,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}
