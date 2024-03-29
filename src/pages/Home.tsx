import Footer from "../components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";
import MetaTags from "../components/ui/MetaTags/MetaTags";
import { metaTagsData } from "../data/data";

function Home() {
  return (
    <>
      <MetaTags {...metaTagsData} />
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
