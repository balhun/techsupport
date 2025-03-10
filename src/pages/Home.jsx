import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='lg:flex justify-evenly block mt-5 gap-5'> {/*Magamnak: Itt még van mit dolgozni */}
      <div className='bg-white rounded-xl glowing p-3 ml-5 mr-5'>
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
      <div className='bg-white rounded-xl glowing p-3 lg:mt-0 lg:mb-0 mb-5 mt-5 mr-5 ml-5 homeRight'>
        <h1 className='text-2xl border-b-2 pb-2'>Üdvözöljük a Kandó's Tech Technikai Támogatás oldalán</h1>
        <p className='mb-5'>
            Azért vagyunk itt, hogy a lehető legfelhasználóbarátabb útmutatóval megoldjuk az ön technikai problémáit. Legyen szó szoftverhibáról, hardverproblémáról vagy csak útmutatásra 
            van szüksége valamely program használatához, nálunk megtalálja a választ.
        </p>
        <p className='mb-5'>
            Elkötelezett támogatási csapatunk készen áll, hogy segítsen Önnek bármilyen kérdésben, csak küldjön nekünk, 
            hogy személyre szabott segítséget kapjon tőlünk.
        </p>

        <h3 className='text-2xl border-b-2 pb-2'>Vegye Fel Velünk a Kapcsolatot – Személyes Segítségnyújtás</h3>
        <p>
            Néha egy szakértő segítsége a legjobb megoldás. Ha nem találja a választ, vagy speciális segítségre van 
            szüksége, támogató csapatunk készen áll, hogy csevegő platformunkon keresztül segítse Önt.
        </p>
        <Link to='/openticket'><Button>Kapcsolatfelvétel</Button></Link>

        <h2 className='text-xl border-b-2 pb-2 pt-2'>Miért válassza a <strong>Kandó's Tech</strong> támogatását?</h2>

        <ul className='pb-2'>
            <li>1. <strong>Gyors és megbízható segítség</strong> – Célunk, hogy minél hamarabb hatékony megoldást nyújtsunk.</li>
            <li>2. <strong>Szakértői támogatás</strong> – Képzett szakembereink készséggel válaszolnak minden technikai kérdésére.</li>
            <li>3. <strong>Felhasználóbarát válaszok</strong> – Könnyen követhető lépések és érthető magyarázatok a problémák gyors megoldásához.</li>
        </ul>

        <p className='pt-2 border-t-2 pb-5'>
            Hiszünk abban, hogy a technikai támogatásnak egyszerűnek és stresszmentesnek kell lennie. Ezért hoztunk létre 
            egy olyan platformot, amely a világos információkat, a hatékonyságot és a szakértői útmutatást helyezi előtérbe. 
            Bármi legyen is a probléma, elkötelezettek vagyunk abban, hogy megtaláljuk a legjobb megoldást.
        </p>
        <h2 className='text-4xl mb-5'>Kezdjük el!</h2>
        <Link to='/openticket'><Button variant='contained'>Segítség Kérése</Button></Link>
      </div>
    </div>
  )
}
