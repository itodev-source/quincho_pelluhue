import React from "react";
import { Playfair_Display} from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "800"],
});

export default function Hero() {
  return (
    <div
      class="flex items-center justify-center h-full md:h-screen"
    >
      <section>
        <div class="grid max-w-screen-lg mx-auto lg:grid-cols-12">
          <div class="mr-auto place-self-center flex flex-col gap-4 lg:col-span-7">
            <div className="flex items-center justify-center md:justify-normal">
              <svg
                aria-hidden="true"
                class="w-6 h-6 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p class="tracking-widest uppercase text-xs">
                Nuestro restaurant
              </p>
            </div>

            <div className={playfair.className}>
              <div class="flex flex-col">
                <h1 class="max-w-2xl font-bold tracking-wider leading-none md:text-5xl xl:text-6xl">
                  EL QUINCHO
                </h1>
              </div>
            </div>
            <span className="text-gray-600 text-sm font-">Todo el año</span>

            <div>
            <p class="mb-6 font-medium tracking-wider [word-spacing:0.1rem] text-sm pr-24">
              Años de dedicación en la búsqueda de una identidad propia nos
              permiten compartir nuestra exquisita variedad gastronómica y
              compartir la experiencia de nuestro aprendizaje. En nuestro
              Restorán podrá degustar de la mas fresca y sabrosa cocina de
              nuestro mar en sus recorridos por nuestro litoral. Esta tierra es
              tierra que encanta especialmente por la acogida de su gente.
              Queremos que tu estadía sea una hermosa experiencia de descanso y
              un buen recuerdo que te invite siempre a volver.
            </p>
            <button className="bg-yellow-500 w-60 py-3 rounded-sm shadow-md uppercase text-sm shadow-gray-900">
              Ver Carta
            </button>
            </div>
          </div>
          <div class="lg:col-span-5">
            <img
              src="img/inicio/hero.jpg"
              alt="mockup"
              class="rounded-sm object-cover h-96 shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}