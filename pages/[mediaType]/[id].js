import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layout/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazyload";
import Placeholders from "../../components/UI/Placeholders/Placeholder";

export default function SingleMediaPage(props) {
  const router = useRouter();
  const [mediaData, setMediaData] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${props.query.id}?api_key=55efee9a5e42502e7615d0b35ab1f957`
      )
      .then((response) => {
        setMediaData(response.data);
      })
      .catch((error) => {
        console.log("Error response for " + error);
      });
    if (!mediaData.backdrop_path) {
      axios
        .get(
          `https://api.themoviedb.org/3/tv/${props.query.id}?api_key=55efee9a5e42502e7615d0b35ab1f957`
        )
        .then((response) => {
          setMediaData(response.data);
        })
        .catch((error) => {
          console.log("Error response for " + error);
        });
    }
  }, [mediaData]);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        title={props.query.mediaType === 'movie' ? props.mediaData.title : props.mediaData.name}
        mediaUrl={`https://image.tmdb.org/t/p/original${props.mediaData.backdrop_path}`}
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="#"
        type="single"
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Similar To This" type="small-v" />}
      >
        <MediaRow
          title="Similar To This"
          type="small-v"
          mediaType={props.query.mediaType}
          endpoint={`${props.query.mediaType === 'movie' ? "movie" : "tv"}/${props.query.id}/similar?`}
        />
      </LazyLoad>
      <CastInfo mediaID={props.query.id} mediaType={props.mediaType} />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  let mediaData;
  try {
    mediaData = await axios.get(`https://api.themoviedb.org/3/${context.query.mediaType}/${context.query.id}?api_key=55efee9a5e42502e7615d0b35ab1f957`)
  } catch (error) {
    console.log(error);
  }
  return {
    props: { mediaData: mediaData.data, query: context.params },
  };
}
