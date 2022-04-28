import MainLayout from "../components/Layout/MainLayout";
import FeaturedMedia from "../components/UI/FeaturedMedia/FeaturedMedia";
import ForYouList from "../components/UI/ForYouList/ForYouList";

export default function Home() {
  return (
    <MainLayout>
      <FeaturedMedia />
      <ForYouList />
    </MainLayout>
  );
}
