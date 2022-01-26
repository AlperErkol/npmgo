import React from 'react'
import { HiMenuAlt1,HiSun,HiOutlineCode } from "react-icons/hi";
import { AiOutlineHistory } from "react-icons/ai";
import { IoShareSocialSharp } from "react-icons/io5";
import ReactTooltip from 'react-tooltip';

function HelperField() {
    return (
        
        <header className='fixed w-full top-0 left-0 right-0'>
            <div className='max-w-7xl flex'>
                <ReactTooltip />
                <HiMenuAlt1 className='mb-4 cursor-pointer' size={'1.5rem'} color='white' />
                <ReactTooltip />
                <HiSun className='mb-4 cursor-pointer' size={'1.5rem'} color='white' data-tip="Toggle Theme"/>
                <ReactTooltip />
                <a href="https://github.com/AlperErkol/npmgo" target="_blank"><HiOutlineCode className='mb-4 cursor-pointer' size={'1.5rem'} color='white' data-tip="View Source Code"/>
                <ReactTooltip /></a>
                <AiOutlineHistory className='cursor-pointer' size={'1.5rem'} color='white' data-tip="Search History"/>
            </div>
        </header>
        
    )
}

export default HelperField;
