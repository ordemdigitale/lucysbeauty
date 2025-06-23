// Check 
import React from 'react'
import Link from 'next/link'
import { assets } from '@/public/assets/_assets.js'
import Image from 'next/image'


const Footer = () => {
  return (
    <footer className="w-full font-[family-name:var(--font-noto)] bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* <!--Grid--> */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3 gap-y-8 md:gap-8 py-10 max-w-sm mx-auto sm:max-w-3xl lg:max-w-full">

                <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                  <Link href={'/'} className="flex justify-center lg:justify-start font-[family-name:var(--font-chillen)] text-4xl text-white">Lucy&apos;s Beauty</Link>
                </div>

                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left text-white">
                    <h4 className="text-lg mb-5">Boutique</h4>
                    <ul className="text-sm font-thin transition-all duration-500">
                        <li className="mb-2"><a href="javascript:;"  className="">Tous les produits</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Nouveau</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Top ventes</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Pour le corps</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Pour les lèvres</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Pour les yeux</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Pour le visage</a></li>
                        <li className="mb-2"><a href="javascript:;"  className="">Pour les cheveux</a></li>
                    </ul>
                </div>

                {/* <!--End Col--> */}
                <div className="lg:mx-auto text-left text-white">
                    <h4 className="text-lg mb-5">Liens utiles</h4>
                    <ul className="text-sm font-thin transition-all duration-500">
                        <li className="mb-2"><a href="javascript:;"  className="">Qui sommes-nous</a></li>
                        <li className="mb-2"><a href="javascript:;"  className=" ">CGU</a></li>
                        <li className="mb-2"><a href="javascript:;"  className=" ">Termes & confidentialités</a></li>
                        <li className="mb-2"><a href="javascript:;"  className=" ">Politique de retour</a></li>
                        <li className="mb-2"><a href="javascript:;"  className=" ">Aide & FAQ</a></li>
                    </ul>
                </div>
                
                {/* <!--End Col--> */}
                <div className="text-left text-white lg:col-span-2">
                    <h4 className="text-lg mb-5">Service client</h4>
                    <ul className="text-sm font-thin">
                      <li className="mb-2">Tel: 01 23 45 67 89</li>
                      <li className="mb-2">E-mail: info@lucysbeauty.com</li>
                    </ul>
                    <ul className="text-sm font-thin flex flex-row space-x-4">
                      <li>
                        <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-800">
                          <assets.FacebookIcon/>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-800">
                          <assets.InstagramIcon/>
                        </a>
                      </li>
                      <li>
                        <a href="javascript:;" className="relative w-8 h-8 rounded-full transition-all duration-500 flex justify-center items-center hover:bg-gray-800">
                          <assets.TwitterIcon/>
                        </a>
                      </li>
                    </ul>
                </div>
            </div>

            <div className='text-white flex items-center gap-3 justify-center text-sm font-thin'>
              <span>Modes de paiement:</span>
              <Image src={assets.PaypalIcon} alt="Visa" width={50} height={50} />
              <Image src={assets.VisaIcon} alt="Visa" width={35} height={50} />
              <Image src={assets.MastercardIcon} alt="Visa" width={30} height={50} />
            </div>
            
            {/* <!--Grid--> */}
            <div className="py-7 border-t border-gray-200">
                <div className="flex items-center justify-center flex-col">
                    <span className="text-sm text-gray-500 ">©<a href="#">lucy&apos;s beauty</a> 2024, Tous droits réservés.</span>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer