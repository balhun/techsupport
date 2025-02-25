import React from 'react'

export default function Home() {
  return (
    <div className='text-white m-5'> {/*Magamnak: Itt még van mit dolgozni */}
      <div className='island glowing p-3'>
        <h1 className="flex text-xl md:text-xl lg:text-3xl xl:text-4xl mb-2 cursor-default">
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Egy</span>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">jobb</span>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">támogatási</span>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">tapasztalat.</span>
        </h1>
        <span className='block italic ml-10'>A Megbízható Partnered Technikai Kihívások Megoldásában</span>
        <h1 className='flex text-xl md:text-xl lg:text-3xl xl:text-4xl cursor-default mt-10'>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Mi</span>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">kiállunk</span>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Ön</span>
          <span className="p-1 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg rounded-lg">Mögött</span>
        </h1>
        <span className='block mt-5'>
          A Kandó's Tech™ csapatában tudjuk, milyen frusztrálóak lehetnek a technikai problémák.<br />
          Ezért vagyunk itt, hogy gyors, megbízható és szakértő segítséget nyújtsunk, amikor csak szüksége van rá.<br />
          Legyen szó apró hibáról vagy komoly rendszerösszeomlásról, csak egy jegy leadása választ el minket egymástól.<br />
        </span>
      </div>
    </div>
  )
}
