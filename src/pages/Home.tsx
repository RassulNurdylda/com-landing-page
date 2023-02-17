import React from "react";
import Footer from "../components/Footer";
import Hug from "../components/Hug";
import { Land } from "../components/Land";
import Navbar from "../components/Navbar";
import Support from "../components/Support";

const Home = () => {
  return (
    <main>
      <Navbar />
      <Hug />
      <Land />
      <Support />
      <Footer />
    </main>
  );
};

export default Home;
