import Header from "../UI/Header/Header";

const MainLayout = (props) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(135deg, rgba(2,0,36,0) 55%, rgba(119,30,135,.5) 100%)",
        minHeight: "100vh",
        backgroundAttachment: 'fixed'
      }}
    >
      <Header />
      <section className="content-container">{props.children}</section>
    </div>
  );
};

export default MainLayout;
