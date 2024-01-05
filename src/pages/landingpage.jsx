import React from "react";
import Footer from "../components/footer/footer";
import Navbar from "../components/navbar/navbar";
import ImportantServices from "../components/services/services";
import Sidebar from "../components/sidebar/sidebar";

const Landingpage = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <ImportantServices />
      <Footer />
    </>
  );
};

export default Landingpage;
