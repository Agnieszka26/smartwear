import { TextBold, TextMedium } from "@/attoms/text/Text";
import { Container } from "@mui/material";
import logo_new from "@/assets/images/eu/logo_eu_new_2025.jpg";
import Image from "next/image";
// import euLogosUp from "@/assets/images/eu/FE_POPW_poziom_pl-1_rgb.png";
import { Row1EuLogos, Row2EuLogos } from "@/components/EuLogos/EuLogos";
import { AnimateOnScroll } from "@/attoms/animateOnScroll/AnimateOnScroll";
const Page = () => {
  return (
    <Container className="pt-24 pb-24">
      <div id="FunduszeEuropejskie" className="pt-12">
        <AnimateOnScroll delay={0.55} x={300}>
          <Image
            src={logo_new}
            alt={
              "Fundusze Europejskie dla Polski Wschodniej Rzeczpospolita Polska Dofinansowanie przez Unię Europejską"
            }
            className="m-auto"
          />
        </AnimateOnScroll>

        <TextBold className="mt-8" text="Tytuł projektu:" />
        <TextMedium
          className="mb-8"
          text="Opracowanie inteligentnego krzesła ORBHEX PRO"
        />

        <TextBold text="Działania w ramach projektu:" />
        <TextMedium text="- analiza rynku i przedsiębiorstwa SMARTWEAR wraz z opracowaniem strategii wzorniczej;" />
        <TextMedium text="- analiza zastosowania i funkcjonalności, dostępnych materiałów, dostępnych technologii, koncepcjii wizualnej produktu;" />
        <TextMedium text="- opracowanie prototypu oraz przeprowadzenie testów inteligentnego krzesła Orbhex Pro;" />
        <TextMedium
          className="mb-8"
          text="- opracowanie strategii wdrożeniowej inteligentnego krzesła Orbex Pro."
        />

        <TextBold text="Grupy docelowe:" />
        <TextMedium text="- użytkownicy indywidualni;" />
        <TextMedium text="- osoby w rehabilitacji / z ograniczeniami ruchowymi;" />
        <TextMedium
          className="mb-8"
          text="- firmy i biura, w których pracownicy spędzają wiele godzin w pozycji siedzącej, potrzebujące rozwiązań poprawiających ergonomię i zdrowie zespołu oraz narzędzi do monitorowania zajętości i lepszego wykorzystania przestrzeni."
        />

        <TextBold text="Cele projektu:" />
        <TextMedium
          className="mb-8"
          text="Celem projektu jest opracowanie inteligentnego krzesła Orbhex pro z uwzględnieniem analizy rynku, projektowania, budowy prototypu oraz strategii wprowadzenia na rynek."
        />

        <TextBold text="Rezultaty projektu:" />
        <TextMedium
          className="mb-8"
          text="Rezultatem projektu będzie wdrożenie na rynek inteligentnego krzesła Orbhex Pro."
        />

        <TextBold text="Wartość projektu:" />
        <TextMedium className="mb-8" text="651 838,50 PLN" />

        <TextBold text="Wkład Funduszy Europejskich:" />
        <TextMedium className="mb-8" text="450 457,50 PLN" />
        <TextMedium text="#FunduszeEuropejskie #FunduszeUE" />
      </div>

      <div id="shirt" className="pt-12">
        <Row1EuLogos />
        <TextMedium
          className="mb-8 pt-24"
          text="Spółka Smartwear sp. z o.o. realizuje projekt pod tytułem: „Opracowanie i wdrożenie do produkcji zestawu sensorów dla inteligentnej odzieży wraz z platformą do obsługi ich funkcjonalności” w ramach osi priorytetowej 1 - Przedsiębiorcza Polska Wschodnia, działanie 1.1 Platformy startowe dla nowych pomysłów, poddziałanie 1.1.2 Rozwój startupów w Polsce Wschodniej

"
        />
        <TextBold text="Cele projektu:" />
        <TextMedium
          className="mb-8"
          text="Celem projektu jest opracowanie i wprowadzenie do produkcji systemu nowej generacji sensorów motorycznych i biometrycznych, który jako gotowy produkt będzie wszywany do ubrań sportowych przez firmy odzieżowe. Elementem projektu jest również platforma do badania efektywności treningowej użytkowników"
        />
        <TextBold text="Planowane efekty:" />
        <TextMedium
          className="mb-8"
          text="Planowane efekty: Planowanymi efektami realizowanego projektu jest zaoferowanie na rynku zestawu elektroniki wszywanej do odzieży wraz z aplikacją, która prezentuje dane zbierane z czujników podczas aktywności fizycznej użytkownika.
"
        />
        <TextBold text="Wartość projektu:" />{" "}
        <TextMedium text=" 1 259 551.50 PLN" className="mb-8" />
        <TextBold text="Wkład Funduszy Europejskich:" />
        <TextMedium text=" 995 830.25 PLN" className="mb-8" />
      </div>
      <div id="chair" className="pt-12">
        <Row2EuLogos />
        <TextMedium
          className="mb-8 pt-24"
          text="Smartwear sp. z o.o. realizuje projekt badawczo - rozwojowy w ramach Umowy o wsparcie (powierzenie grantu) zawartej z Narodowym Centrum Badań i Rozwoju z siedzibą w Warszawie, Medventure spółka z ograniczoną odpowiedzialnością z siedzibą w Lublinie oraz Medventure spółka z ograniczoną odpowiedzialnością Alternatywna Spółka Inwestycyjna Spółka komandytowo-akcyjna z siedzibą w Lublinie.

Projekt współfinansowany przez Unię Europejską ze środków Europejskiego Funduszu Rozwoju Regionalnego w ramach Programu Inteligentny Rozwój. Projekt realizowany w ramach konkursu Narodowego Centrum Badań i Rozwoju w ramach Działania 1.3 Prace B+R finansowane z udziałem funduszy kapitałowych Poddziałania 1.3.1 Wsparcie Projektów badawczo - rozwojowych w fazie preseed przez fundusze typu proof of concept - Bridge Alfa."
        />
        <TextBold text="Tytuł projektu:" />
        <TextMedium className="mb-8" text="Orbhex - inteligentne krzesło" />
        <TextBold text="Cele projektu:" />
        <TextMedium
          className="mb-8"
          text="Projekt ma na celu opracowanie rozwiązania technicznego w postaci inteligentnego krzesła, które będzie zawierało szereg czujników zintegrowanych z aplikacją na komputer i aplikację mobilną w celu zapewnienia prawidłowej postawy siedzącej, umożliwieniu i kontroli ćwiczeń rehabilitacyjnych na krześle"
        />
        <TextBold text="Planowane efekty:" />
        <TextMedium
          className="mb-8"
          text="Opracowanie Inteligentnego krzesła jako produktu minimalizującego problemy z chorobami związanymi z długotrwałym przebywaniu w pozycji siedzącej."
        />
        <TextBold text="Wartość projektu:" />{" "}
        <TextMedium text="1 150 000,00 PLN" className="mb-8" />
        <TextBold text="Wkład Funduszy Europejskich:" />
        <TextMedium text="920 000,00 PLN" className="mb-8" />
      </div>
    </Container>
  );
};

export default Page;
