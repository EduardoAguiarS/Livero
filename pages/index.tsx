import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>HubLocal | Seus sonhos se tornam negócios</title>
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
      <Header />
    </div>
  );
};

export default Home;
