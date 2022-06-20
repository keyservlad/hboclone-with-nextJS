import axios from "axios";
import { useState, useEffect } from "react";

const CastInfo = (props) => {
  const [loadingData, setLoadingData] = useState(true);
  const [credits, setCredits] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/${
          props.mediaType === "movie" ? "movie" : "tv"
        }/${props.mediaID}/credits?api_key=55efee9a5e42502e7615d0b35ab1f957`
      )
      .then((response) => {
        setCredits(response.data);
        setLoadingData(false);
      });
  }, [props.updateData]);

  const showCast = () => {
    if (loadingData !== true) {
      return credits.cast.map((item) => {
        return (
          <ul className="cast-info__crew">
            <li>{item.character}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast</div>;
    }
  };

  const showCrew = () => {
    if (loadingData !== true) {
      return credits.crew.map((item) => {
        return (
          <ul className="cast-info__crew">
            <li>{item.job}</li>
            <li>{item.name}</li>
          </ul>
        );
      });
    } else {
      return <div>Loading Cast</div>;
    }
  };

  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast</div>
      <div className="cast-info__list">{showCast()}</div>

      <div className="cast-info__group-title">Crew</div>
      <div className="cast-info__list">{showCrew()}</div>
    </div>
  );
};

export default CastInfo;
