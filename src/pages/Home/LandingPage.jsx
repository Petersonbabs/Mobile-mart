import { Helmet } from "react-helmet";
import Hero from './Components/Hero'
import Categories from './Components/Categories'
import PaginationBar from "../../components/common/PaginationBar";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>MobileMart - Homepage</title>
      </Helmet>
      <Hero />
      <Categories />
      <PaginationBar />
    </>
  );
};

export default LandingPage
