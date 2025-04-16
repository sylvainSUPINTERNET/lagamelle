import { useState, type ReactElement } from "react"
import Header from "../header/Header"
import ClipCard from "./clips/ClipCard"
import ClipItInput from "./ytb/ClipItInput"
import { Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { BiPaint } from "react-icons/bi";
import { motion } from "framer-motion";
import { FaPhotoVideo } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

import riz_curry from '../../../assets/riz_curry.png'

export default function Dashboard({userDetail}: Record<string, any>) {

    const transition = {
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }

    return ( 
        <div className="h-screen bg-white flow-root">
            <div className="relative">
                <svg
                    className="z-0 absolute w-full h-[320px] md:h-[320px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                    preserveAspectRatio="none">
                        <path
                        fill="#FFB84C"
                        fillOpacity="1"
                        d="M0,96L40,90.7C80,85,160,75,240,96C320,117,400,171,480,197.3C560,224,640,224,720,213.3C800,203,880,181,960,176C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
                        ></path>
                </svg>
                <div className="absolute z-1 w-full h-full0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}>
                        <div className="bg-red-600 container mx-auto w-3/4 md:w-full mt-4 p-2">
                            content
                        </div>
                    </motion.div>

                </div>
            </div>


        </div>
    )
}