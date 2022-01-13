import Image from "next/image";
import React from "react";
import Facebook from "../public/facebook.svg";
import Instagram from "../public/instagram.svg";
import Twitter from "../public/twitter.svg";

export default function About() {
  function linkOpen(url: string) {
    window.open(url);
  }

  return (
    <div className="py-10 mx-auto bg-blue">
      <article className="container px-10 mx-auto text-center md:rounded-md">
        <h1 className="text-3xl font-extrabold leading-loose text-red ">
          Aqui a{" "}
          <strong className="px-2 py-1 rounded-md bg-yellow">logística</strong>{" "}
          e a{" "}
          <strong className="px-2 py-1 rounded-md bg-yellow ">lógica</strong>{" "}
          trabalham lado a lado.
        </h1>
        <section className="mt-3 text-lg font-light text-white">
          <p>
            A Livero surgiu com a intenção de revolucionar o mercado de
            logística, com o foco principal em dar as pessoas a possibilidade de
            adquirir produtos de outras cidades em lojas que não oferecem
            sistema de entrega, facilitando principalmente a vida de que mora em
            cidades do interior.
          </p>
          <p className="mt-3">
            Nos entendemos que esperar por um produto pode gerar uma ansiedade,
            então dentro da Livero nos buscamos sempre manter as pessoas
            informadas sobre suas entregas, e estamos sempre a disposição para
            tirar duvidas, buscando sempre transformar todo o processo de
            entrega em algo agradável.{" "}
          </p>
          <h2 className="mt-6 text-2xl font-bold text-red">
            Saiba mais sobre nós nas redes sociais!
          </h2>
          <ul className="flex items-center justify-center gap-3 mt-3">
            <li className="cursor-pointer">
              <Image
                src={Facebook}
                alt="facebook"
                width={49}
                height={49}
                onClick={() => linkOpen("https://www.facebook.com/")}
              />
            </li>

            <li className="block cursor-pointer">
              <Image
                src={Instagram}
                alt="Instagram"
                width={49}
                height={49}
                onClick={() => linkOpen("https://www.instagram.com/")}
              />
            </li>

            <li className="block cursor-pointer">
              <Image
                src={Twitter}
                alt="Twitter"
                width={49}
                height={49}
                onClick={() => linkOpen("https://www.twitter.com/")}
              />
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}