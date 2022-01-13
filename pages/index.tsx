import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import About from "../components/About";
import Footer from "../components/Footer";
const Home: NextPage = () => {
  return (
    <div className="bg-white">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* Title */}
        <title>Livero | Entregas e coletas</title>
        {/* Google Fonts Poppins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;400;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      {/* Page Header */}
      <Header />
      <Main />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
