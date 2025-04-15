
import { Button, Description, Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'
import { useState } from 'react'

export default function ClipItInput({
    setOembed
}: any) {

    const [youtubeUrl, setYoutubeUrl] = useState("")

    return (
        <div className='text-black'>
            <Field>
                {/* <Label className="text-xl font-medium">Name</Label> */}
                <Description className="text-md/6 text-black/50">Provide youtube video link</Description>
                <Input
                onChange={e => setYoutubeUrl(e.target.value)}
                placeholder='Paste youtube URL'
                className={clsx(
                    'mt-3 block w-full rounded-lg border-none bg-black/5 py-1.5 px-3 text-md/6 text-black',
                    'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-black/25'
                )}
                />
            </Field>
            
            <div className="p-1 mt-2 flex justify-end">
                <Button 
                        onClick={ async () => {
                            
                            const res = await fetch(`https://www.youtube.com/oembed?url=${youtubeUrl}&format=json`)
                            const data = await res.json()
                            setOembed(data)
                        }}
                        className="px-4 
                                   py-2 bg-zinc-600 text-white 
                                   rounded-md hover:bg-zinc-800 
                                   focus:outline-none focus:ring-2 
                                   focus:ring-blue-300 transition 
                                   duration-300 ease-in-out">
                    Upload
                </Button> 
            </div>

            {/* <div className='bg-red-500 rounded-lg p-1 mt-5 flex w-full'>
                <div className='w-full'>
                    <img className="h-32 w-50 rounded-lg shadow-lg" 
                        src={"https://i.ytimg.com/vi/zusBwCIcu18/hqdefault.jpg"}
                        alt="thumbnail"/>
                </div>

                <div className='bg-red-100 w-full'>
                    <div className='p-1 grid grid-cols-4 gap-4'>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                        <div>ok</div>
                    </div>
                </div>
            </div>
 
            {
                oembed && oembed !== null && (
                    <div>
                        
                        <img className="h-32 w-50 rounded-lg" 
                             src={oembed.thumbnail_url} 
                             alt="thumbnail"/>
                    </div>
                )
            }  */}


        </div>
    )
}