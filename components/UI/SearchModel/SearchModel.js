import { useStateContext } from "../../HBOProvider";


const SearchModel = (props) => {
  const globalState = useStateContext();

  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let index = 0; index <= digit; index++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };
  return (
    <div className={`search-model ${globalState.searchOpen ? 'search-model--active' : ''}`}>
      <div className="search-model__input-group">
        <input
          type="text"
          placeholder="search for a title"
          value=""
          className="search-model__input"
        />
        <div className="search-model__close-btn" onClick={() => globalState.setSearchOpenAction(!globalState.searchOpen)}>
            <i className="fas fa-times"></i>
        </div>
      </div>
      <h3 className="search-model__title">
          Popular Searches
      </h3>
      <div className="search-model__thumbnails">
        {loopComp(
          <div className="search-model__thumbnail">
            <img src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2019%2F03%2Favengers-russia-2000.jpg" />
            <div className="search-model__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default SearchModel;
