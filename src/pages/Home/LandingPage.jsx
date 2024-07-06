import { Helmet } from "react-helmet";
import Hero from './Components/Hero'
import Categories from './Components/Categories'

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>MobileMart - Homepage</title>
      </Helmet>
      <Hero />
      <Categories />
    </>
  );
};

export default LandingPage
