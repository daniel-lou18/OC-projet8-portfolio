import Footer from "../components/Footer/Footer";
import MainContent from "../components/MainContent/MainContent";
import MetaTags from "../components/ui/MetaTags";
import StructuredData from "../components/ui/StructuredData";
import { metaTagsData } from "../data/data";

function Home() {
  return (
    <>
      <MetaTags {...metaTagsData} />
      <StructuredData />
      <MainContent />
      <Footer />
    </>
  );
}

export default Home;
