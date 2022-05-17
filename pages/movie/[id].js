import AuthCheck from "../../components/AuthCheck";
import MainLayout from "../../components/Layout/MainLayout";
import CastInfo from "../../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../../components/UI/MediaRow/MediaRow";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";

export default function SingleMediaPage(props) {
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=55efee9a5e42502e7615d0b35ab1f957`
      )
      .then((response) => {
        console.log(response.data.results);
        setMoviesData(shuffleArray(response.data.results));
        setLoadingData(false);
      });
  }, []);

  return AuthCheck(
    <MainLayout>
      {id}
      <FeaturedMedia />
      <MediaRow title="More Like This" type="small-v" />
      <CastInfo />
    </MainLayout>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {params: context.params},
  };
}
