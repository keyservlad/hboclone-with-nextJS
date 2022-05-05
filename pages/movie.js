import AuthCheck from "../components/AuthCheck";
import MainLayout from "../components/Layout/MainLayout";
import CastInfo from "../components/UI/CastInfo/CastInfo";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import MediaRow from "../components/UI/MediaRow/MediaRow";

export default function Home() {
  return AuthCheck(
    <MainLayout>
      <FeaturedMedia />
      <MediaRow title='More Like This' type='small-v' />
      <CastInfo />
    </MainLayout>
  );
}
