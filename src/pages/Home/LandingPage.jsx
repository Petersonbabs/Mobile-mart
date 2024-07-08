import { Helmet } from "react-helmet";
import Hero from "./Components/Hero";
import Categories from "./Components/Categories";
import PaginationBar from "../../components/common/PaginationBar";
import Modal from "../../components/layout/Modal";
import { useProductContext } from "../../contexts/ProductContext";
import { useEffect, useState } from "react";

const LandingPage = () => {
  const { message, messageTitle, loading } = useProductContext();
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
      <Modal message={content} title={title} loading={loading}/>
      <Hero />
      <Categories />
      {/* <PaginationBar /> */}
    </>
  );
};

export default LandingPage;
