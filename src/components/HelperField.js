import React from 'react'
import { HiMenuAlt1} from "react-icons/hi";
import { AiOutlineHistory } from "react-icons/ai";
import { IoShareSocial } from "react-icons/io5";
import Sidebar from './subComponents/Sidebar';
import { useState } from 'react';
import Overlay from './subComponents/Overlay';



function HelperField() {
    
    
    const [visible, setVisible] = useState(false);

    const onClickHandler = _ =>{
        console.log('asdasd'); 
        if(!visible){
            setVisible(true);
        }else{
            setVisible(false);
        }
        
    };

    
    
    return (
        <>
            <header className='fixed w-full top-0 left-0 right-0'>
                <div className='max-w-7xl flex justify-between items-center m-auto py-4'>
                    <HiMenuAlt1 onClick={()=>onClickHandler()} className=' cursor-pointer' size={'1.5rem'} color='white' />
                    <span className='header-title-sm text-default-text'>npm<span>go</span></span>
                    <IoShareSocial className='cursor-pointer' size={'1.5rem'} color='white'/>
                </div>
            </header>
            <Overlay onClick={()=>onClickHandler()} visible={visible}/>
            <Sidebar onClick={()=>onClickHandler()} visible={visible}/>
        </>
        
    )
}

export default HelperField;
