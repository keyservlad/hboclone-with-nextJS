import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Router, { useRouter } from "next/router";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import AuthCheck from "../components/AuthCheck";
import MediaRow from "../components/UI/MediaRow/MediaRow";
import LazyLoad from "react-lazyload";
import Placeholders from "../components/UI/Placeholders/Placeholder";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter;

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia
        mediaUrl="https://www.youtube.com/embed/illDZ9fKSGk?autoplay=1&version=3&loop=1&start=16&mute=1&enablejsapi=1"
        title="Iron Cowboy: The Story of the 50.50.50 Triathlon"
        location="In theaters and on HBO MAX. Streaming throughout May 23."
        linkUrl="/movie/550261"
        type="front"
      />
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Movies" type="large-v" />}
      >
        <MediaRow
          title="Movies"
          type="large-v"
          endpoint="discover/movie?sort_by=popularity.desc&primary_release_year=2022"
        />
      </LazyLoad>

      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Series" type="small-h" />}
      >
        <MediaRow
          title="Series"
          type="small-h"
          endpoint="discover/tv?
        primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Action" type="small-v" />}
      >
        <MediaRow
          title="Action"
          type="small-v"
          endpoint="discover/movie?with_genres=28&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Horror" type="small-v" />}
      >
        <MediaRow
          title="Horror"
          type="small-v"
          endpoint="discover/movie?with_genres=27&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Animations" type="large-h" />}
      >
        <MediaRow
          title="Animations"
          type="large-h"
          endpoint="discover/movie?with_genres=16&primary_release_year=2022"
        />
      </LazyLoad>
      <LazyLoad
        offset={-400}
        placeholder={<Placeholders title="Sci-fi" type="small-v" />}
      >
        <MediaRow
          title="Sci-fi"
          type="small-v"
          endpoint="discover/movie?with_genres=878&primary_release_year=2022"
        />
      </LazyLoad>
    </MainLayout>
  );
}
