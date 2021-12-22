import React from 'react'
import { HiMenuAlt1,HiSun,HiOutlineCode } from "react-icons/hi";
import { AiOutlineHistory } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';

function HelperField() {
    return (
        <div className='relative'>
            <aside className='fixed h-full right-0 w-12 overflow-hidden bg-default-sidebarColor pt-4 flex flex-col items-center'>
                <ReactTooltip />
                <HiMenuAlt1 className='mb-4 cursor-pointer' size={'1.5rem'} color='white' />
                <ReactTooltip />
                <HiSun className='mb-4 cursor-pointer' size={'1.5rem'} color='white' data-tip="Toggle Theme"/>
                <ReactTooltip />
                <HiOutlineCode className='mb-4 cursor-pointer' size={'1.5rem'} color='white' data-tip="View Source Code"/>
                <ReactTooltip />
                <AiOutlineHistory className='cursor-pointer' size={'1.5rem'} color='white' data-tip="Search History"/>
            </aside>
            
        </div>
    )
}

export default HelperField
