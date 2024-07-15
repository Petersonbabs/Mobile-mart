import { Helmet } from "react-helmet";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import Modal from "../../components/layout/Modal";
import { useProductContext } from "../../contexts/ProductContext";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const { message, messageTitle, loadingCart } = useProductContext();
  const [content, setContent] = useState();
  const [title, setTitle] = useState();

  useEffect(() => {
    if (message) {
      setContent(message);
      setTitle(messageTitle);
      console.log(message);
    }
  }, [message, messageTitle]);

  return (
    <>
      <Helmet>
        <title>MobileMart - Homepage</title>
      </Helmet>
      <Modal message={content} title={title} loading={loadingCart}/>
      <Hero />
      <Categories />
      {/* <PaginationBar /> */}
    </>
  );
};

export default LandingPage;
