const JustAdded = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className="just-added">
      <h3 className="just-added__title">Just Added</h3>
      <div className="just-added__thumbnails">
        {loopComp(
          <div className="just-added__thumbnail">
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F03%2Favengers-russia-2000.jpg" />
            <div className="just-added__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default JustAdded;
