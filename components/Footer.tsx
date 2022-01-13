import React from "react";

export default function Footer() {
  return (
    <div className="px-10 py-4 text-center text-white bg-red">
      <p>
        ©2022 Livero - Quase todos direitos reservados. |{" "}
        <a
          href="https://www.linkedin.com/in/eduardo-aguiar-s/"
          target={`_blank`}
        >
          Eduardo Aguiar
        </a>
      </p>
    </div>
  );
}
