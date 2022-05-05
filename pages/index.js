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
      <MediaRow
        title="Movies"
        type="large-v"
        endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2022"
      />
      <MediaRow
        title="Series"
        type="small-h"
        endpoint="discover/tv?
        primary_release_year=2022"
      />
      <MediaRow
        title="Action"
        type="small-v"
        endpoint="discover/movie?with_genres=28&primary_release_year=2022"
      />
      <MediaRow
        title="Horror"
        type="small-v"
        endpoint="discover/movie?with_genres=27&primary_release_year=2022"
      />
      <MediaRow
        title="Animations"
        type="large-h"
        endpoint="discover/movie?with_genres=16&primary_release_year=2022"
      />
      <MediaRow
        title="Sci-fi"
        type="small-v"
        endpoint="discover/movie?with_genres=878&primary_release_year=2022"
      />
    </MainLayout>
  );
}
