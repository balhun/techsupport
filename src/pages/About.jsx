import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="min-h-screen">
      <div className="container  mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">TechSupport Weboldal</h1>

        <div className="bg-white glowing p-6 rounded-lg shadow-lg mb-6">
          <h2 className="text-xl font-semibold mb-4">Oldalak:</h2>
          <ul className="space-y-4">
            <li>
              <Link className="text-blue-500 hover:underline" to="/login">
                Login
              </Link> : Az oldalon bejelentkezni és regisztrálni lehet. Hozhatsz létre saját fiókot és használhatsz Google és Github fiókot is.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="*">
                Notfound
              </Link> : Erre az oldalra csak akkor juthatunk el, ha nem létezőre keresünk rá vagy nincs hozzá jogosultságunk valamelyik oldalhoz.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/openticket">
                Jegy Nyitás
              </Link> : Az oldalon ha be vagy jelentkezve, tudsz segítséget kérni az ügyfélszolgálattól.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/profile">
                Profil
              </Link> : Az oldal tartalmazza a bejelentkezett ügyfél adatait, amit megadott, és a kérdéseikre adott válaszokat.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/forgotpassword">
                Elfelejtett jelszó kérés
              </Link> : Ezen az oldalon kérhetsz egy új jelszót, ha elfelejtetted az előzőt.
            </li>
            <li>
              <Link className="text-blue-500 hover:underline" to="/about">
                Rólunk
              </Link> : Az oldalon a fejlesztőkről és a weboldalról lehet olvasni, és elérheted a fejlesztőket, ha kérdéseid vannak.
            </li>
          </ul>
        </div>

        <div className="flex justify-between gap-6">
          <div className="w-1/2 p-5 glowing bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">Hunor Balázs</h2>
            <p className="text-gray-700 mb-4">Webfejlesztő, aki a backend és frontend technológiákra specializálódott. Érdeklődik a modern JavaScript keretrendszerek iránt.</p>
            <img
              src="https://via.placeholder.com/150"
              alt="Hunor Balázs"
              className="mx-auto rounded-full mb-4"
            />
          </div>

          <div className="w-1/2 p-5 glowing bg-white rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-center text-blue-600 mb-4">Cseh Lajos Gergő</h2>
            <p className="text-gray-700 mb-4">Frontend fejlesztő, aki a felhasználói élmény és az interaktív weboldalak fejlesztésére koncentrál.</p>
            <img
              src="https://via.placeholder.com/150"
              alt="Cseh Lajos Gergő"
              className="mx-auto rounded-full mb-4"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
