import React from 'react'
import { HiMenuAlt1,HiSun,HiOutlineCode } from "react-icons/hi";
import { AiOutlineHistory } from "react-icons/ai";
import ReactTooltip from 'react-tooltip';

function HelperField() {
    return (
        
        <aside className='fixed h-full top-0 right-0 w-16 bg-default-sidebarColor pt-4 flex flex-col items-center'>
                <ReactTooltip />
                <HiMenuAlt1 className='mb-4 cursor-pointer' size={'1.5rem'} color='white' />
                <ReactTooltip />
                <HiSun className='mb-4 cursor-pointer' size={'1.5rem'} color='white' data-tip="Toggle Theme"/>
                <ReactTooltip />
                <a href="https://github.com/AlperErkol/npmgo" target="_blank"><HiOutlineCode className='mb-4 cursor-pointer' size={'1.5rem'} color='white' data-tip="View Source Code"/>
                <ReactTooltip /></a>
                <AiOutlineHistory className='cursor-pointer' size={'1.5rem'} color='white' data-tip="Search History"/>
        </aside>
        
    )
}

export default HelperField
