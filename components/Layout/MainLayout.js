import Header from "../UI/Header";

const MainLayout = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(2,0,36,1) 11%, rgba(119,30,135,1) 100%)",
        minHeight: "100vh",
      }}
    >
      <Header />
      <section className="content-container">{props.children}</section>
    </div>
  );
};

export default MainLayout;
