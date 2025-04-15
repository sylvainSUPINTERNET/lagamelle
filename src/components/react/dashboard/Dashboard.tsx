import { useState, type ReactElement } from "react"
import Header from "../header/Header"
import ClipCard from "./clips/ClipCard"
import ClipItInput from "./ytb/ClipItInput"
import { Button, Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { BiPaint } from "react-icons/bi";
import { FaPhotoVideo } from "react-icons/fa";
import { FaExclamationCircle } from "react-icons/fa";

import riz_curry from '../../../assets/riz_curry.png'

export default function Dashboard({userDetail}: Record<string, any>) {

    const [oembed, setOembed] = useState<Record<string, any> | null>();
    const [selectedSubtitle, setSelectedSubtitle] = useState< number>(-1)
    const subtitleStyle: Record<string, string|Record<string, string>|ReactElement<any, any>|number|any>[] = [
        {
            id: 1,
            label: "Alex Hormozi",
            name: "alex_hormozi",
            getDom: (keyId:string) => {
                return <div 
                    key={keyId}
                    className={`cursor-pointer text-center uppercase font-extrabold text-sm tracking-tight text-white bg-black px-2 py-1 rounded
                        transition transform duration-200 ease-in-out  
                        ${selectedSubtitle === 1 ? "border-4 border-green-400 shadow-lg" : "border-4 border-white"}
                    `} 
                    onClick={ _e  => { selectedSubtitle === 1 ? setSelectedSubtitle(-1) : setSelectedSubtitle(1)} }>
                    Alex Hormozi
                </div>
            }
        }
    ]


    return ( 
        <div className="h-screen bg-gradient-to-t from-white via-slate-50 to-emerald-100 flow-root">
            <div className="flex bg-red-600 mt-4 border-2xl border-4 border-black">
                <div className="">
                    <p>ok</p>
                </div>
            </div>
        </div>
    )
}