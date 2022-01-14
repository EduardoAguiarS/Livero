// React / Next / Aos
import React, { useEffect } from "react";
import Image from "next/image";
import Aos from "aos";
import "aos/dist/aos.css";

// Image
import Delivery from "../public/services/delivery.svg";
import Market from "../public/services/market.svg";
import Box from "../public/services/box.svg";
import Local from "../public/services/local.svg";
import Timer from "../public/services/timer.svg";
import Hands from "../public/services/hands.svg";

export default function Services() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div className="mt-20 bg-blue" data-aos="fade-up" data-aos-duration="500">
      <article className="py-20 md:mx-auto md:container">
        <h1 className="mb-10 text-3xl font-extrabold text-center text-yellow">
          Infinitas possibilidades para lhe atender!
        </h1>
        <section className="flex flex-wrap justify-center gap-x-40 gap-y-5 md:items-baseline">
          {/* Delivery */}
          <div
            className="p-5 text-center w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="block mx-auto mb-3">
              <Image src={Delivery} alt="Delivery" />
            </div>
            <h2 className="mb-3 text-xl text-yellow">Entregas</h2>
            <p className="text-lg text-white font-extralight">
              Coletamos o seu pedido em lojas que não fornecem serviços de
              entrega e levaremos até você, ou se preferir pode retirar em um
              dos nossos pontos de entrega no horário que preferir.
            </p>
          </div>

          {/* Market */}
          <div
            className="p-5 text-center w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="block mx-auto mb-3">
              <Image src={Market} alt="Market" />
            </div>
            <h2 className="mb-3 text-xl text-yellow">Compras</h2>
            <p className="text-lg text-white font-extralight">
              Iremos até à loja que você quiser e faremos a compra no seu lugar
              e levaremos o produto até você, caso seja necessário, faremos a
              operação inversa em caso de trocas.
            </p>
          </div>

          {/* Invetory */}
          <div
            className="p-5 text-center w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="block mx-auto mb-3">
              <Image src={Box} alt="Box" />
            </div>
            <h2 className="mb-3 text-xl text-yellow">Armazenagem</h2>
            <p className="text-lg text-white font-extralight">
              Caso você esteja pensando em viajar e não pretende levar muitas
              coisas para viajem, nos compramos os produtos que você vai
              precisar e quando você chegar ao seu destino nos levaremos ele até
              você.
            </p>
          </div>

          {/* Rastreamento */}
          <div
            className="p-5 text-center w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="block mx-auto mb-3">
              <Image src={Local} alt="GPS" />
            </div>
            <h2 className="mb-3 text-xl text-yellow">Rastreamento</h2>
            <p className="text-lg text-white font-extralight">
              Rastreamento eficiente em tempo real, para que você possa planejar
              seu dia para receber o seu produto, caso ocorra algum imprevisto
              iremos avisar com o máximo de antecedência.
            </p>
          </div>

          {/* Time */}
          <div
            className="p-5 text-center w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="block mx-auto mb-3">
              <Image src={Timer} alt="timer" />
            </div>
            <h2 className="mb-3 text-xl text-yellow">No seu tempo</h2>
            <p className="text-lg text-white font-extralight">
              Ocorreu um imprevisto e não vai ter como receber o pedido? Você
              pode nos avisar e desta forma nos podemos planejar novamente a sua
              entrega de forma eficiente.
            </p>
          </div>

          {/* Networking */}
          <div
            className="p-5 text-center w-80"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <div className="block mx-auto mb-3">
              <Image src={Hands} alt="hands shake" />
            </div>
            <h2 className="mb-3 text-xl text-yellow">Parceiros</h2>
            <p className="text-lg text-white font-extralight">
              Hoje buscamos o máximo de empresas parceiras, integrando o nosso
              sistema ao sistema das empresas, para gerar uma rede de
              comunicação mais eficiente entre as partes.
            </p>
          </div>
        </section>
        <button
          data-aos="fade-up"
          data-aos-duration="1000"
          className="block p-3 mx-auto mt-10 text-white uppercase transition ease-in-out delay-75 rounded-md hover:shadow-lg hover:bg-yellow bg-red"
        >
          Soluções Logísticas
        </button>
      </article>
    </div>
  );
}
