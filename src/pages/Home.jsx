import React from 'react'

//<p className='text-xl'>Bármilyen eszköz. Bármilyen probléma. Bármikor.</p><p>Akárhogyan ahogy akarod. Elégedettséged garantált.*</p>
export default function Home() {
  return (
    <div className='text-white flex justify-evenly'>
      <div className='island glowing m-10 p-7 flex gap-10 w-fit'>
      <h1 className="flex flex-col text-5xl md:flex-row">
        <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg">Egy</span>
        <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg">jobb</span>
        <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg">támogatási</span>
        <span className="p-3 transition-colors duration-700 ease-in-out hover:bg-orange-400 hover:rounded-lg">tapasztalat.</span>
      </h1>
      </div>
      <div className='w-1/2'>Cigányok</div>
    </div>
  )
}
