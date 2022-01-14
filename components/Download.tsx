// React / Next / Aos
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";
// Img
import Start from "../public/start.svg";
import Playstore from "../public/playstore.svg";
import Appstore from "../public/appstore.svg";

export default function Download() {
  const openLink = (url: string) => {
    window.open(url);
  };

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="py-20 bg-white" data-aos="fade-up" data-aos-duration="900">
      <article className="container px-3 mx-auto">
        <div className="block mx-auto text-center">
          <Image src={Start} width={500} height={500} alt="Download App" />
          <section data-aos="fade-up" data-aos-duration="900">
            <h1 className="text-3xl font-extrabold text-red">
              Pronto para viver essa experiencia incrível?
            </h1>
            <p className="mt-3 text-lg text-wine font-extralight">
              Instale agora mesmo o App da Livero no seu celular, e tenha todos
              os nossos serviços na palma da sua mão!
            </p>
            <div className="justify-center mt-10 md:flex">
              <Image
                src={Appstore}
                width={250}
                height={50}
                alt="App Store"
                className="cursor-pointer"
                onClick={() => openLink(`https://www.apple.com/br/app-store/`)}
              />
              <Image
                src={Playstore}
                width={250}
                height={50}
                alt="Play Store"
                className="cursor-pointer"
                onClick={() => {
                  openLink(`https://play.google.com/store?hl=pt_BR&gl=US`);
                }}
              />
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
