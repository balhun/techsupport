import React from 'react'

//<p className='text-xl'>Bármilyen eszköz. Bármilyen probléma. Bármikor.</p><p>Akárhogyan ahogy akarod. Elégedettséged garantált.*</p>
export default function Home() {
  return (
    <div className='text-white xl:flex block w-11/12 m-auto'> {/*Magamnak: Itt még van mit dolgozni */}
      <div className='island glowing m-10 p-7 gap-10 w-fit'>
        <h1 className="flex flex-col text-5xl lg:flex-row text-center mb-2 cursor-default">
          <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Egy</span>
          <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">jobb</span>
          <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">támogatási</span>
          <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">tapasztalat.</span>
        </h1>
        <span className='block italic ml-10'>A Megbízható Partnered Technikai Kihívások Megoldásában</span>
        <h1 className='flex text-xl md:text-5xl text-center cursor-default mt-10'>
          <span className="md:p-3 p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Mi</span>
          <span className="md:p-3 p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">kiállunk</span>
          <span className="md:p-3 p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Ön</span>
          <span className="md:p-3 p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Mögött</span>
        </h1>
        <span className='block mt-5'>
          A Kandó's Tech™ csapatában tudjuk, milyen frusztrálóak lehetnek a technikai problémák.<br />
          Ezért vagyunk itt, hogy gyors, megbízható és szakértő segítséget nyújtsunk, amikor csak szüksége van rá.<br />
          Legyen szó apró hibáról vagy komoly rendszerösszeomlásról, csak egy jegy leadása választ el minket egymástól.<br />
        </span>
      </div>
      <div className='island glowing m-10 p-7 gap-10 w-fit'>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </div>
    </div>
  )
}
