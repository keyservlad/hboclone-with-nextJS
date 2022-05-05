import { useEffect } from "react";
import { useStateContext } from "../components/HBOProvider";
import Router, { useRouter } from "next/router";
import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";
import JustAdded from "../components/UI/JustAdded/JustAdded";
import PosterView from "../components/UI/PosterView/PosterView";
import AuthCheck from "../components/AuthCheck";

export default function Home() {
  const globalState = useStateContext();
  const router = useRouter;

  useEffect(() => {}, []);

  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
      <JustAdded />
      <PosterView />
    </MainLayout>
  );
}
