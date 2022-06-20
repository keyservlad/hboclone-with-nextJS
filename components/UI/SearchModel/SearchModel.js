import { useStateContext } from "../../HBOProvider";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";

const SearchModel = (props) => {
  const globalState = useStateContext();
  const [popData, setPopData] = useState([]);
  const [searchData, setSearchData] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        let popData = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?primary_release_year=2022&api_key=55efee9a5e42502e7615d0b35ab1f957`
        );
        setPopData(popData.data.results.filter((item, i) => i < 14));

        setShowResults(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (globalState.searchOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [globalState.searchOpen]);

  const handleInput = async (e) => {
    try {
      setText(e.target.value);
      let searchData = await axios.get(
        `https://api.themoviedb.org/3/search/multi?query=${e.target.value}&api_key=55efee9a5e42502e7615d0b35ab1f957`
      );
      setSearchData(
        searchData.data.results.filter(
          (item, i) => item.media_type === "tv" || item.media_type === "movie"
        )
      );

      setShowResults(true);
    } catch (error) {
      console.log(error);
    }
  };
  

  const router = useRouter();

  const clickedThumbnail = (type, id, media_type) => {
    if (type === "popular") {
      router.push(`/movie/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen);
    }
    if (type === "search") {
      router.push(`/${media_type}/${id}`);
      globalState.setSearchOpenAction(!globalState.searchOpen);
    }
  };

  return (
    <div
      className={`search-model ${
        globalState.searchOpen ? "search-model--active" : ""
      }`}
    >
      <div className="search-model__input-group">
        <input
          type="text"
          placeholder="search for a title"
          className="search-model__input"
          onChange={handleInput}
          value={text}
        />
        <div
          className="search-model__close-btn"
          onClick={() =>
            globalState.setSearchOpenAction(!globalState.searchOpen)
          }
        >
          <i className="fas fa-times"></i>
        </div>
      </div>
      <h3 className="search-model__title">
        {showResults && searchData.length >= 1
          ? `Search Result For ${text}`
          : "Popular Searches"}
      </h3>

      <div className="search-model__thumbnails">
        {showResults && searchData.length >= 1 ? (
          <SearchResults
            searchData={searchData}
            clickedThumbnail={clickedThumbnail}
          />
        ) : (
          <PopularResults
            popData={popData}
            clickedThumbnail={clickedThumbnail}
          />
        )}
      </div>
    </div>
  );
};

const PopularResults = (props) => {
  return props.popData.map((item, index) => {
    return (
      <div
        key={index}
        className="search-model__thumbnail"
        onClick={() => props.clickedThumbnail("popular", item.id)}
      >
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
        <div className="search-model__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

const SearchResults = (props) => {
  return props.searchData.map((item, index) => {
    return (
      <div
        key={index}
        className="search-model__thumbnail"
        onClick={() =>
          props.clickedThumbnail("search", item.id, item.media_type)
        }
      >
        <img src={`https://image.tmdb.org/t/p/w185${item.poster_path}`} />
        <div className="search-model__top-layer">
          <i className="fas fa-play" />
        </div>
      </div>
    );
  });
};

export default SearchModel;
