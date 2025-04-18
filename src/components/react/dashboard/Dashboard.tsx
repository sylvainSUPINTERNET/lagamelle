import { useState, type ReactElement } from "react"
import Header from "../header/Header"
import ClipCard from "./clips/ClipCard"
import ClipItInput from "./ytb/ClipItInput"
import { Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { BiPaint } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";
import { GiChiliPepper } from "react-icons/gi";

import riz_curry from '../../../assets/riz_curry.png'
import sauc from "../../../assets/sauc.png"
import steak_spag from "../../../assets/steak_spag.png"
import poulet_caram from "../../../assets/poulet_caram.png"

import { HiPlus } from "react-icons/hi";
import { CiShoppingBasket } from "react-icons/ci";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { FaPlus } from "react-icons/fa";



export interface Meal {
    id: number;
    title: string;
    image: string;
    kcal: number;
    spicy: 0 | 1 | 2 ;
}


export default function Dashboard({userDetail}: Record<string, any>) {

    const mockMeals: Meal[] = [
        {
            id:1,
            title: "Riz au curry",
            image: riz_curry.src,
            kcal: 400,
            spicy: 1
        },
        {
            id:2,
            title: "Saucisse grillée",
            image: sauc.src,
            kcal: 702,
            spicy: 0
        },
        {
            id:3,
            title: "Poulet caramélisé",
            image: poulet_caram.src,
            kcal: 280,
            spicy: 1
        },
        {
            id:4,
            title: "Steak spaghetti",
            image: steak_spag.src,
            kcal: 437,
            spicy: 0
        }
    ];


    const [selectedMeal, setSelectedMeal] = useState<(Meal|null)[]>([null, null, null, null, null]);


    function addToOrder(meal:Meal) {
        const newSelectedMeal = [...selectedMeal];
        const index = selectedMeal.findIndex((m) => m === null);

        if (index !== -1) {
            newSelectedMeal[index] = meal;
            setSelectedMeal(newSelectedMeal);
        }
    }


    return ( 
        <div className="h-screen bg-white flow-root">

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}>
                <div className="container mx-auto w-full mt-4 p-2">
                    <div className="flex p-2 items-center">
                        <div className="flex-1 text-center">
                            <p className="text-sm md:text-lg text-gray-700 font-medium">🔥 Promo 20% sur votre première commande avec le code <span className="bg-orange-500 text-white text-md md:text-2xl p-1 rounded-lg font-bold font-mono shadow-sm">LAGAM2025</span></p>
                        </div>
                        {/* <div className="ml-4">

                        <Menu>
                        <MenuButton className="rounded-full p-3 transition shadow-sm border-2 border-slate-200 hover:border-slate-400">
                            <CiShoppingBasket className="cursor-pointer text-6xl text-gray-800 hover:text-black transition" />
                        </MenuButton>

                        <MenuItems
                        transition
                        anchor="bottom end"
                        className="bg-slate-900 w-52 origin-top-right rounded-xl border border-white/5 bg-white/5 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0">
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
                            
                        </div> */}
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
                            mockMeals.map( (meal:Meal, index:number) => {
                                return (
                                    <motion.div 
                                        initial={{ opacity: 0, y: 30 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 * index/4.8 }}
                                        className="bg-slate-50 rounded-lg shadow-md"
                                        key={index}>
                                        <div className="w-full relative">
                                            <div 
                                              className={`
                                                absolute left-0 top-0 rounded-br-lg rounded-tl-lg shadow-sm p-2 font-mono text-sm text-white
                                                ${meal.kcal < 400 ? 'bg-green-600/70' : meal.kcal < 700 ? 'bg-yellow-400/70' : 'bg-red-600/70'}
                                              `}
                                                >
                                                {meal.kcal} Kcal
                                            </div>
                                            <motion.div
                                                initial={{ opacity: 0, y: 30 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                                                className="absolute bg-[#FFA24B] text-black right-0 top-0 rounded-bl-lg rounded-tr-lg shadow-sm p-2 font-mono w-[3em] text-center font-bold text-sm">
                                                1
                                            </motion.div>
                                            <img src={meal.image} alt={`plat ${index}`} className="w-full h-[260px] rounded-t-lg object-cover" />
                                            <div className="p-3 text-xl font-sans flex flex-col sm:flex-row sm:justify-between items-center gap-3 sm:gap-0">
                                                <div>
                                                    <div>
                                                        <p>{meal.title}</p>
                                                    </div>
                                                    <div className="flex gap-1 py-2 justify-center md:justify-start">
                                                        {
                                                            [0,1,2].map( (lvlSpicy, index) => {
                                                                return (
                                                                    meal.spicy - 1 >= lvlSpicy ?
                                                                    <GiChiliPepper key={index} className="text-red-600 text-2xl"/>
                                                                    :
                                                                    <GiChiliPepper key={index} className="text-gray-300 text-2xl"/>
                                                                )
                                                            })
                                                        }

                                                    </div>
                                                </div>
                                                <div className="w-full sm:w-1/4 shadow-sm rounded-lg bg-[#FFB84C] py-2 px-4 transition-colors duration-200 hover:bg-[#FFA24B] cursor-pointer text-white font-medium hover:text-black"
                                                 onClick={e => {
                                                    addToOrder(meal);
                                                 }}>
                                                    <button className="w-full h-full flex items-center justify-center">
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
            
            <div className="mt-5 mb-5 h-[5em]">
            </div>

            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                className="fixed bottom-0 left-0 w-full bg-[#FFA24B] text-white text-center p-4 z-50 h-[6.2em] md:h-[10em]">
                <div className="flex justify-around md:justify-center md:gap-5 items-center">
                
                    <div className="grid auto-cols-max grid-flow-col gap-2">
                        {
                            selectedMeal.map((meal:Meal|null, index) => (
                            meal === null ?
                                <div key={index} className="border-2 border-dashed border-slate-600 bg-orange-100 w-[2em] h-[2em] md:w-[6em] md:h-[6em] flex items-center justify-center">
                                    <FaPlus className="text-2xl text-slate-600" />
                                </div>
                            :
                            // <div key={index} className="border-2 border-solid border-slate-600 rounded-lg w-[2em] h-[2em] md:w-[6em] md:h-[6em] flex items-center justify-center">
                            //     <img src={meal.image} alt={`plat ${index}`} 
                            //     className="w-full h-full rounded-lg object-cover" 
                            //     />
                            // </div>
                            
                            <div key={index} className="border-2 border-solid border-slate-600 rounded-lg w-[2em] h-[2em] md:w-[6em] md:h-[6em] flex items-center justify-center">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                    key={meal.id}
                                    src={meal.image}
                                    alt={meal.title}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    className="w-full h-full rounded-lg shadow-lg object-cover"
                                    />
                                </AnimatePresence>
                            </div>
                            ))
                        }
                    </div>

   
                    <div className="px-4 md:px-0">
                        <button className="bg-gradient-to-r from-orange-500 via-red-400 to-orange-500 text-white font-extrabold text-sm sm:text-base md:text-lg uppercase tracking-wide px-5 py-3 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full shadow-2xl hover:scale-105 hover:shadow-orange-500/50 transition-all duration-300 active:scale-95">
                            Commander maintenant
                        </button>
                    </div>

                </div>
            </motion.div>


        </div>
    )
}