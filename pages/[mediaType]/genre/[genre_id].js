import { useEffect } from "react";
import { useStateContext } from "../../../components/HBOProvider";
import { useRouter } from "next/router";
import MainLayout from "../../../components/Layout/MainLayout";
import FeaturedMedia from "../../../components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from "../../../components/AuthCheck";
import MediaRow from "../../../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholders from "../../../components/UI/Placeholders/Placeholder";
import GenreNav from "../../../components/UI/GenreNav/GenreNav";
import axios from "axios";
import { shuffleArray } from "../../../components/utilities";

export default function MediaTypePage(props) {
  const globalState = useStateContext();
  const router = useRouter;

  const showRandomMedia = () => {
    let thumbType;
    return props.genresData.map((item, index) => {
      thumbType = shuffleArray(globalState.thumbTypes)[0];
      return (
        <LazyLoad
          offset={-300}
          key={item.id}
          placeholder={<Placeholders title={item.name} type={thumbType} />}
        >
          <MediaRow
            updateData={props.query.genre_id}
            title={item.name}
            type={thumbType}
            endpoint={`discover/${props.query.mediaType}?with_genres=${
              props.query.genre_id
            }&sort_by=popularity.desc&primary_release_year=2022&page=${
              index + 1
            }`}
            mediaType={props.query.mediaType}
          />
        </LazyLoad>
      );
    });
  };

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        // mediaUrl="https://www.youtube.com/embed/illDZ9fKSGk?autoplay=1&list=PLSQVEoQCaG6_aNinPM_h50dCxCYbc6kLw&version=3&loop=1&start=16&mute=1&enablejsapi=1"
        mediaUrl={`https://image.tmdb.org/t/p/w1280${props.featuredData.backdrop_path}`}
        title={
          props.query.mediaType === "movie"
            ? props.featuredData.title
            : props.featuredData.name
        }
        linkUrl={`/${props.query.mediaType}/${props.featuredData.id}`}
        type="single"
        mediaType={props.query.mediaType}
        mediaID={props.featuredData.genre_id}
      />
      <GenreNav
        mediaType={props.query.mediaType}
        genresData={props.genresData}
      />
      {showRandomMedia()}
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let genresData;
  let featuredData;
  try {
    genresData = await axios.get(
      `https://api.themoviedb.org/3/genre/${context.query.mediaType}/list?api_key=55efee9a5e42502e7615d0b35ab1f957`
    );
    featuredData = await axios.get(
      `https://api.themoviedb.org/3/discover/${context.query.mediaType}?primary_release_year=2022&with_genres=${context.query.genre_id}&api_key=55efee9a5e42502e7615d0b35ab1f957`
    );
  } catch (error) {
    console.log(error);
  }
  return {
    props: {
      genresData: genresData.data.genres,
      featuredData: shuffleArray(featuredData.data.results)[0],
      query: context.query,
    },
  };
}
