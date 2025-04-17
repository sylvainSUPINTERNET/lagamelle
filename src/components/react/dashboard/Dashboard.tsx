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

export default function Dashboard({userDetail}: Record<string, any>) {

    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }

    return ( 
        <div className="h-screen bg-white flow-root">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, ease: "easeOut", delay: 0.2 }}>
                <div className="bg-red-600 container mx-auto w-3/4 md:w-full mt-4 p-2">
                    content
                </div>
            </motion.div>

            <div className="mt-5 container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}>


                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-2">
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                            elément 1
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">
                            <div className="w-full">
                                <img src={riz_curry.src} alt="Riz Curry" className="w-full h-auto rounded-t-lg object-cover" />
                            </div>
                        </div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">Élément 2</div>
                        <div className="bg-gray-200 p-4 rounded-lg shadow-md">Élément 2</div>
                    </div>
                        
                    {/* <div className="flex gap-1 container mx-auto mt-[4em] p-2">
                        <div className="shadow-md bg-white relative w-[12em]">
                            <div className="absolute p-[0.4em] top-[0] bg-emerald-600 rounded-lg shadow-sm font-medium text-white">
                                492 Kcal
                            </div>
                            <img src={riz_curry.src} alt="Riz Curry" className="w-full h-auto rounded-t-lg object-cover" />
                            <div className="text-center py-2 font-medium text-lg">
                                <p className="py-1 mb-1">Riz Poulet Curry</p>
                                <div className="flex justify-center items-center gap-2 mb-1 py-1">
                                    <GiChiliPepper className="text-red-600 text-2xl"/>
                                    <GiChiliPepper className="text-slate-600 text-2xl"/>
                                    <GiChiliPepper className="text-slate-600 text-2xl"/>
                                </div>
                                <div className="flex justify-center py-2">
                                    <div className="w-3/4 shadow-sm mb-1 rounded-full bg-[#FFB84C] py-1 px-4 transition-colors duration-200 hover:bg-[#FFA24B] cursor-pointer text-white font-medium hover:text-black transition-colors duration-200">
                                        <button className="">
                                            Add
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}

                </motion.div>

            </div>

        </div>
    )
}