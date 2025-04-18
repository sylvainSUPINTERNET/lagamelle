import { useState, type ReactElement } from "react"
import Header from "../header/Header"
import ClipCard from "./clips/ClipCard"
import ClipItInput from "./ytb/ClipItInput"
import { Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { BiPaint } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";

import riz_curry from '../../../assets/riz_curry.png'
import sauc from "../../../assets/sauc.png"
import { HiPlus } from "react-icons/hi";
import { CiShoppingBasket } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Dashboard({userDetail}: Record<string, any>) {


    return ( 
        <div className="h-screen bg-white flow-root">





            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}>
                <div className="container mx-auto w-full mt-4 p-2">
                    <div className="flex p-2 items-center">
                        <div className="flex-1">
                            <p className="text-sm md:text-lg text-gray-700 font-medium">🔥 Promo 20% sur votre première commande avec le code <span className="bg-orange-500 text-white text-md md:text-2xl p-1 rounded-lg font-bold font-mono shadow-sm">LAGAM2025</span></p>
                        </div>
                        <div className="ml-4">

                        <Menu>
                            <MenuButton className="rounded-full p-3 transition shadow-sm border-2 border-slate-200 hover:border-slate-400">
                                <CiShoppingBasket className="cursor-pointer text-6xl text-gray-800 hover:text-black transition" />
                            </MenuButton>

                            <MenuItems
                            transition
                            anchor="bottom end"
                            className="bg-black w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        Edit
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘E</kbd>
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        Duplicate
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                        </button>
                                    </MenuItem>
                                    <div className="my-1 h-px bg-white/5" />
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        Archive
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘A</kbd>
                                        </button>
                                    </MenuItem>
                                    <MenuItem>
                                        <button className="group flex w-full items-center gap-2 rounded-lg py-1.5 px-3 data-[focus]:bg-white/10">
                                        Delete
                                        <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">⌘D</kbd>
                                        </button>
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                            
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="mt-5 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}>
                

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">

                        {
                            [1,2,3,4,5,6].map( (item, index:number) => {
                                return (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 * index/4.8 }}
                                        className="bg-slate-50 rounded-lg shadow-md">
                                        <div className="w-full relative">
                                            <div className="absolute bg-green-400 text-black left-0 top-0 rounded-br-lg rounded-tl-lg shadow-sm p-2 font-mono text-sm">400 Kcal</div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                                                className="absolute bg-[#FFA24B] text-black right-0 top-0 rounded-bl-lg rounded-tr-lg shadow-sm p-2 font-mono w-[3em] text-center font-bold text-sm">
                                                1
                                            </motion.div>
                                            <img src={riz_curry.src} alt={`plat ${index}`} className="w-full h-[260px] rounded-t-lg object-cover" />
                                            <div className="p-3 text-xl font-sans flex flex-col sm:flex-row sm:justify-between items-center gap-3 sm:gap-0">
                                                <div>
                                                    <div>
                                                        <p>Poulet Curry Riz</p>
                                                    </div>
                                                    <div className="flex gap-1 py-2 justify-center md:justify-start">
                                                        <GiChiliPepper className="text-red-600 text-2xl"/>
                                                        <GiChiliPepper className="text-red-600 text-2xl"/>
                                                        <GiChiliPepper className="text-slate-600 text-2xl"/>
                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-1/4 shadow-sm rounded-lg bg-[#FFB84C] py-2 px-4 transition-colors duration-200 hover:bg-[#FFA24B] cursor-pointer text-white font-medium hover:text-black">
                                                    <button className="w-full h-full flex items-center justify-center" onClick={() => {
                                                        alert("PI");
                                                    }}>
                                                        <HiPlus className="text-2xl" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })
                        }
                        
                    </div>
                    
                    
                </motion.div>

            </div>

        </div>
    )
}