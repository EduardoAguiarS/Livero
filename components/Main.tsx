import React from "react";
import Image from "next/image";
import delivery from "../public/delivery.svg";

export default function Main() {
  return (
    <div className="block px-3 py-10 bg-white">
      <div className="relative mx-auto mt-10 md:flex md:items-center md:justify-between md:container top-16">
        <div className="text-center md:mr-24 md:flex-1 md:text-left">
          <h1 className="mb-12 text-5xl font-bold md:text-6xl text-red">
            Comprar o que quiser, a onde quiser.
          </h1>
          <p className="mb-12 text-lg text-wine font-extralight">
            Aqui na Livero pegamos as suas compras e levamos até você, você
            tambem pode comprar em lojas que não oferecem entregas dentro e fora
            da sua cidade, e nos faremos a logistica até a sua casa, ou se
            preferir poderá retirar conosco quando quiser.
          </p>
          <button className="p-3 text-white uppercase transition ease-in-out delay-75 rounded-md hover:shadow-lg hover:bg-blue bg-yellow">
            Contratar serviços
          </button>
        </div>
        <div className="animate-wiggle">
          <Image src={delivery} alt="delivery image" width={800} height={800} />
        </div>
      </div>
    </div>
  );
}
