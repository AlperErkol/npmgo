import React from 'react'
import { HiMenuAlt1} from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import Sidebar from './subComponents/Sidebar';
import { useState, useEffect } from 'react';
import Overlay from './subComponents/Overlay';
import {Dropdown} from 'antd';
import { Link } from 'react-router-dom';
import DropdownMenu from './subComponents/DropdownMenu';

function HelperField() {


    const [visible, setVisible] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const onClickHandler = _ =>{
        if(!visible){
            setVisible(true);
        }else{
            setVisible(false);
        }

    };


    const onScrollHandler = _ =>{

        if(window.scrollY > 1){
            setScrolled(true);
        }else if (window.scrollY === 0){
            setScrolled(false);
        }

    };

    useEffect(() => {
        window.addEventListener('scroll',onScrollHandler);
    }, []);





    return (
        <>
            <header className={ scrolled ? 'bg-default-sidebarColor fixed w-full h-12 top-0 left-0 right-0 z-10 duration-300' : 'fixed w-full h-12 top-0 left-0 right-0 z-10 duration-300'}>
                <div className='max-w-7xl h-full flex justify-between items-center m-auto py-4'>
                    <HiMenuAlt1 onClick={()=>onClickHandler()} className='text-default-text cursor-pointer' size={'1.5rem'} />
					<Link to={'/'}>
                    	<span className='header-title-sm text-default-text'>npm<span>go</span></span>
					</Link>
                    <Dropdown overlay={DropdownMenu} trigger={['click']} placement='bottomCenter'>
						<IoShareSocial className='text-default-text cursor-pointer' size={'1.5rem'} />
					</Dropdown>
                </div>
            </header>
            <Overlay onClick={()=>onClickHandler()} visible={visible}/>
            <Sidebar onClick={()=>onClickHandler()} visible={visible}/>
        </>

    )
}

export default HelperField;
