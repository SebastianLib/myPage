import React from "react";
import first from "../assets/first.jpg";
import second from "../assets/second.jpg";
import third from "../assets/third.jpg";

const About = () => {
  return (
    <section className="">
<div className="min-h-screen container mx-auto px-6 md:px-2">
      <h2 className="text-center pt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-normal">
        Dlaczego Wybrać{" "}
        <span className="bg-red-600 text-white px-4">Mnie?</span>
      </h2>

      <div className="my-8 md:my-16 lg:my-24">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:gap-28 py-8 md:py-16">
          <div className="flex justify-end">
            <img
              src={first}
              alt="seo image"
              className="w-[300px] md:w-[500px]"
            />
          </div>
          <div className="">
            <h3 className="text-3xl lg:text-5xl text-red-600 font-bold text-center md:text-start leading-snug">
              Optymalizacja SEO
            </h3>
            <p className="max-w-[500px] text-base lg:text-lg mt-4 text-center md:text-start text-black/80">
              skuteczna optymalizacja SEO nie tylko przyciąga większą ilość
              ruchu na stronę, ale także poprawia jej jakość i wpływa na ogólny
              sukces biznesowy online klienta.
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row justify-center items-center md:items-start w-full md:gap-28 py-8 md:py-16">
          <div className="">
            <h3 className="text-3xl lg:text-5xl text-red-600 font-bold text-center md:text-start leading-snug">
              Indywidualne Podejście
            </h3>
            <p className="max-w-[500px] text-base lg:text-lg mt-4 text-center md:text-start text-black/80">
              Zaczynam od głębokiego zrozumienia Twoich celów biznesowych i
              unikalnych potrzeb, tworząc strony dostosowane do Twojej marki.
              Wybierając mnie, otrzymujesz nie tylko estetyczną stronę, ale
              także funkcjonalne rozwiązanie dopasowane do oczekiwań Twoich
              klientów.
            </p>
          </div>
          <div className="flex justify-start">
            <img
              src={second}
              alt="seo image"
              className="w-[300px] md:w-[500px]"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start w-full md:gap-28 py-8 md:py-16">
          <div className="flex justify-end">
            <img
              src={third}
              alt="seo image"
              className="w-[300px] md:w-[500px]"
            />
          </div>
          <div className="">
            <h3 className="text-3xl lg:text-5xl text-red-600 font-bold text-center md:text-start leading-snug">
              Estetyka i design
            </h3>
            <p className="max-w-[500px] text-base lg:text-lg mt-4 text-center md:text-start text-black/80">
              Tworzę strony, które nie tylko zachwycają estetyką, ale również
              oferują intuicyjne i funkcjonalne doświadczenie użytkownika. Mój
              design nie tylko przyciąga wzrok, lecz również skutecznie
              komunikuje wartości Twojej marki, zyskując uznanie i zaufanie
              odwiedzających.
            </p>
          </div>
        </div>
      </div>
    </div>
  

    </section>
  
  );
};

export default About;
