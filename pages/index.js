export default function Home() {
  return (
    <div className="container">
      <div>
        <div className="login-user">
          <div className="login-user__top">
            <div className="login-user__logo" />
            <span className="login-user__title">Who is Watching?</span>
          </div>
          <div className="login-user__form">
            <div className="login-user__user-box">
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt=""
                className="login-user__user-img"
              />
              <div className="login-user__user-name">Bryan</div>
            </div>
          </div>
          <div className="login-user__buttons">
            <button className="login-user__adult">Add Adult</button>
            <button className="login-user__kid">Add kid</button>
          </div>
        </div>
      </div>
    </div>
  );
}
