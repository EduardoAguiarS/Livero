import React from "react";
import Image from "next/image";
import Chat from "../public/chat.svg";
import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";
import Services from "../components/Services";
import About from "../components/About";
import Footer from "../components/Footer";
import Download from "../components/Download";
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
      {/* Botão de Chat */}
      <div
        title="Fale Conosco"
        className="fixed z-30 flex items-center justify-center rounded-full shadow-xl cursor-pointer w-14 h-14 md:w-16 md:h-16 bg-red bottom-3 right-3"
      >
        <Image src={Chat} width={30} height={30} alt="Chat" />
      </div>
      <Header />
      <Main />
      <Services />
      <Download />
      <About />
      <Footer />
    </div>
  );
};

export default Home;
