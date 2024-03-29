import { useStateContext } from "../components/HBOProvider";
import ls from "local-storage"; // using librairy local-storage but doable with vanilla js (stringify, parse, etc)
import { v4 } from "uuid";
import { useRouter } from "next/router";

export default function CreateUser() {
  const globalState = useStateContext();
  const router = useRouter();

  const saveUser = () => {
    let users = [],
      user;

    if (ls("users") < 1) {
      users = [];
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
      };
      users.push(user);
      ls("users", users);
      router.push("/login");
    } else {
      users = ls("users");
      user = {
        id: v4(),
        user: globalState.user,
        myListID: [],
      };
      users.push(user);
      ls("users", users);
      router.push("/login");
    }
  };
  return (
    <div className="container">
      <div>
        <div className="create-user">
          <div className="create-user__top">
            <div className="create-user__logo" />
            <span className="create-user__title">Who is Watching?</span>
          </div>
          <div className="create-user__form">
            <img
              src={globalState.defaultUserImg}
              alt=""
              className="create-user__user-img"
            />
            <div className="create-user__input-group">
              <label>Name</label>
              <input
                type="text"
                className="create-user__inputText"
                value={globalState.user}
                onChange={globalState.createUserAction}
              />
              <div className="create-user__colors">
                <div
                  className="create-user__color create-user__color--active"
                  style={{
                    background: "rgb(2,0,36)",
                    background:
                      "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(119,30,135,1) 100%)",
                  }}
                />
                <div
                  className="create-user__color"
                  style={{
                    background: "rgb(2,0,36)",
                    background:
                      "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(44,135,30,1) 100%)",
                  }}
                />
                <div
                  className="create-user__color"
                  style={{
                    background: "rgb(2,0,36)",
                    background:
                      "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(135,30,30,1) 100%)",
                  }}
                />
                <div
                  className="create-user__color"
                  style={{
                    background: "rgb(2,0,36)",
                    background:
                      "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(30,41,135,1) 100%)",
                  }}
                />
                <div
                  className="create-user__color"
                  style={{
                    background: "rgb(2,0,36)",
                    background:
                      "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(133,135,30,1) 100%)",
                  }}
                />
              </div>
            </div>
          </div>
          <div className="create-user__buttons">
            <button className="create-user__cancel">Cancel</button>
            <button className="create-user__save" onClick={saveUser}>
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
