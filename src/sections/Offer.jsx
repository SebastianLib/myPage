import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Offer = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
    <div className="py-10">
      <h2 className="text-center mt-16 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold leading-normal">
      <span className="bg-red-600 text-white px-4">Etapy</span>
      {" "}Współpracy
      </h2>

      <VerticalTimeline className="my-24" lineColor="rgb(239 68 68)" animate={true}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "rgb(239 68 68)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<p className="text-2xl">1</p>}
          contentStyle={{ background: "rgb(239 68 68)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(239 68 68)" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">Wstępna rozmowa</h3>
          <p>
          Przeprowadzenie wstępnej dyskusji, gdzie możesz podzielić się swoimi pomysłami i oczekiwaniami, tworząc w ten sposób pierwszy zarys projektu.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "rgb(239 68 68)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<p className="text-2xl">2</p>}
          contentStyle={{ background: "rgb(239 68 68)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(239 68 68)" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">Tworzenie projektu koncepcyjnego</h3>
          <p>
          Przekazanie tobie wstępnych wizualizacji projektu, opartych na zebranych informacjach podczas wcześniejszej dyskusji.
          </p>
        </VerticalTimelineElement><VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "rgb(239 68 68)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<p className="text-2xl">3</p>}
          contentStyle={{ background: "rgb(239 68 68)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(239 68 68)" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">Rozpoczęcie tworzenia strony</h3>
          <p>
          Rozpoczęcie procesu aktywnego tworzenia strony internetowej, który będzie trwał od kilku dni do kilku tygodni, w zależności od skali projektu.
          </p>
        </VerticalTimelineElement><VerticalTimelineElement
          className="vertical-timeline-element--work"
          iconStyle={{
            background: "rgb(239 68 68)",
            color: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          icon={<p className="text-2xl">4</p>}
          contentStyle={{ background: "rgb(239 68 68)", color: "#fff" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(239 68 68)" }}
        >
          <h3 className="vertical-timeline-element-title text-2xl">Zakończenie prac</h3>
          <p>
          Oddanie klientowi gotowej strony internetowej, poprzedzone końcową rozmową i ewentualnymi korektami, w celu zapewnienia pełnej satysfakcji z finalnego produktu!
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
    </section>
  );
};

export default Offer;
