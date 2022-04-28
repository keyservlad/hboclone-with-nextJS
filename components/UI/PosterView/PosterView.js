const PosterView = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className="poster-view">
      <h3 className="poster-view__title">Movies</h3>
      <div className="poster-view__thumbnails">
        {loopComp(
          <div className="poster-view__thumbnail">
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F03%2Favengers-russia-2000.jpg" />
            <div className="poster-view__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default PosterView;
