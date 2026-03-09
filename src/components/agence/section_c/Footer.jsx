import React from "react";
import { RiVipDiamondFill } from "react-icons/ri";
import { PiGlobeLight } from "react-icons/pi";
import { useClock } from "../../utils/Time";

function Footer() {
      const time = useClock("Asia/Kolkata");

  return (
    <footer className="sticky_sections">
      <div className=" min-w-full footer min-h-[62vh] contain    bg-black text-white p-2.5 flex flex-col justify-between  ">
        <div className="footer_head font-[Lausanne-500] flex items-center justify-between ">
          <ul className="flex gap-1.5   text-[clamp(1rem,5vw,9rem)] leading-[0.7] ">
            <li className="">
              <a
                className="border-2 px-[0.3em] pt-[0.22em] hover:text-lime-accent inline-block rounded-full"
                href="#"
              >
                FB
              </a>
            </li>
            <li className="">
              <a
                className="border-2 px-[0.3em] pt-[0.22em] hover:text-lime-accent inline-block rounded-full"
                href="#"
              >
                IG
              </a>
            </li>

            <li className="">
              <a
                className="border-2 px-[0.3em] pt-[0.22em] hover:text-lime-accent inline-block rounded-full"
                href="#"
              >
                IN
              </a>
            </li>

            <li className="">
              <a
                className="border-2 px-[0.3em] pt-[0.22em] hover:text-lime-accent inline-block rounded-full"
                href="#"
              >
                BE
              </a>
            </li>
          </ul>
          <a
            href=""
            className="flex justify-center items-center gap-3 border-2 px-[0.3em] pt-[0.22em] rounded-full hover:text-lime-accent leading-[0.7] text-[clamp(1rem,5vw,9rem)] uppercase "
          >
            Contact
            <RiVipDiamondFill className="mt-[-.2em] w-[.9em] h-[.9em] " />
          </a>
        </div>

        <div className="footer_foot flex justify-between items-center">
          <div className="footer_clock flex items-center gap-[.7em] leading-[0.7] text-[1.3em]  justify-center ">
            <PiGlobeLight className="mt-[-.2em] w-[1.9em] h-[1.9em] " />
            {`INDIA_${time}`}
          </div>
          <div className="footer_legals ">
            <ul className="flex gap-[3em] uppercase text-[.9em] ">
              <li className="hover:text-lime-accent">
                Politique de confidentialité
              </li>
              <li className="hover:text-lime-accent">
                Avis de confidentialité
              </li>
              <li className="hover:text-lime-accent">Rapport éthique</li>
              <li className="hover:text-lime-accent">
                Options de consentement
              </li>
            </ul>
          </div>
          <div className="footer_top-btn  ">
            <button className="uppercase text-[1.3em] hover:text-lime-accent ">
              Retour en haut
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
