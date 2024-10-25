import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
import Slider from "../Components/Slider";
import ProductionHouse from "../Components/ProductionHouse";
import { useSelector } from "react-redux";
import Table from "../Components/Table";
import Footer from "../Components/Footer";

function Home() {
  const navigate = useNavigate();
  const auths = useSelector((state) => state?.auths?.[0]);
  const data = 2;

  useEffect(() => {
    console.log(auths);
  }, []);

  return (
    <div role="main" className="">
      {/* <h1>Hi {auths?.username}</h1> */}
      <Slider />
      <ProductionHouse />
      <br aria-hidden="true" />
      <hr aria-hidden="true" />
      <br aria-hidden="true" />
      <br aria-hidden="true" />
      <Table />
      <br aria-hidden="true" />
      <br aria-hidden="true" />
      <hr aria-hidden="true" />
      <br aria-hidden="true" />
      <Footer />
    </div>
  );
}

export default Home;
