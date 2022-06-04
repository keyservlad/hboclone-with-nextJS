import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layout/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

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
        console.log(response);
      })
      .catch((error) => {
        console.log("Error response for " + error);
      });
  }, []);

  return AuthCheck(
    <MainLayout>
      <h1 style={{ color: "white" }}>${props.query.id}</h1>
      <FeaturedMedia title={mediaData.title} />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: { query: context.params },
  };
}
