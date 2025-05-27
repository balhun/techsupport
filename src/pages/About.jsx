import React from "react";
import { Link } from "react-router-dom";
import csehGeri from "../../CsehGeri.png";
import hunorBalazs from "../../BalHunor.png";

export default function About() {
  return (
    <div>
      <div className="container mx-auto p-8">
        <div className="bg-white glowing p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Oldalak:</h2>
          <ul className="space-y-4">
            <li>
              <Link className="text-blue-500 hover:underline" to="/login">
                Login
              </Link>{" "}
              : Az oldalon bejelentkezni és regisztrálni lehet. Hozhatsz létre
              saját fiókot és használhatsz Google és Github fiókot is.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="*">
                Notfound
              </Link>{" "}
              : Erre az oldalra csak akkor juthatunk el, ha nem létezőre
              keresünk rá vagy nincs hozzá jogosultságunk valamelyik oldalhoz.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/openticket">
                Jegy Nyitás
              </Link>{" "}
              : Az oldalon ha be vagy jelentkezve, tudsz segítséget kérni az
              ügyfélszolgálattól.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/profile">
                Profil
              </Link>{" "}
              : Az oldal tartalmazza a bejelentkezett ügyfél adatait, amit
              megadott, és a kérdéseikre adott válaszokat.
            </li>
            <li>
              <Link
                className="text-blue-500 hover:underline"
                to="/forgotpassword"
              >
                Elfelejtett jelszó kérés
              </Link>{" "}
              : Ezen az oldalon kérhetsz egy új jelszót, ha elfelejtetted az
              előzőt.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/about">
                Rólunk
              </Link>{" "}
              : Az oldalon a fejlesztőkről és a weboldalról lehet olvasni, és
              elérheted a fejlesztőket, ha kérdéseid vannak.
            </li>
          </ul>
        </div>

        <div className="flex flex-col md:flex-row  justify-between gap-6">
          <div className="sm:w-full md:w-1/2 p-5 glowing bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
              Balázs Hunor
            </h2>
            <p className="text-gray-700 mb-4">
              Kecskeméten a Kandó Kálmán Technikumba járok és 19 éves vagyok.
              Informatikában a játékfejlesztés érdekel leginkább, bár tudom,
              hogy sok matekra és fizikára van szükségem hozzá. Emellett nem
              szeretnék eltávolodni a webfejlesztéstől sem, ezen belül leginkább
              a frontend érdekel. Jövőre kezdem az egyetemet, és meglátom, hogy
              mit hoz nekem a jövő.
            </p>
            <img
              src={hunorBalazs}
              alt="Hunor Balázs"
              className="mx-auto rounded-full mb-4 h-96"
            />
          </div>

          <div className="sm:w-full md:w-1/2 p-5 glowing bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">
              Cseh Lajos Gergő
            </h2>
            <p className="text-gray-700 mb-4">
              19 éves vagyok, és a Kecskeméti Kandó Kálmán Technikumba járok.
              Informatikai területen szeretnék elhelyezkedni, és a webfejlesztés
              iránt érdeklődöm. A frontend és backend fejlesztés is érdekel, de
              a backend fejlesztés áll hozzám közelebb. A weboldal elkészítése
              során sok új dolgot tanultam, és remélem, hogy a jövőben is
              folytathatom a tanulást és fejlődést ezen a területen. Persze a
              játékok fejlesztése is érdekel, de az egyenlőre csak hobbi szinten
              van.'
            </p>
            <img
              src={csehGeri}
              alt="Cseh Lajos Gergő"
              className="mx-auto rounded-full mb-4 h-96"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
