import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Router, { useRouter } from "next/router";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from "../components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter;

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title='Movies' type='large-v' />
      <MediaRow title='Series' type='small-h' />
      <MediaRow title='Action' type='small-v' />
      <MediaRow title='Horror' type='small-v' />
      <MediaRow title='Sci-fi' type='small-v' />
    </MainLayout>
  );
}
