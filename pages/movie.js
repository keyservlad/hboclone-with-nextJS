import MainLayout from "../components/Layout/MainLayout";
import CastInfo from "../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import PosterView from "../components/UI/PosterView/PosterView";

export default function Home() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <PosterView />
      <CastInfo />
    </MainLayout>
  );
}
