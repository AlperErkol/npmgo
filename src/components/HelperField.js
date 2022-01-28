import React from 'react'
import { HiMenuAlt1} from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import Sidebar from './subComponents/Sidebar';
import { useState } from 'react';
import Overlay from './subComponents/Overlay';
import {Dropdown} from 'antd';
import { Link } from 'react-router-dom';
import DropdownMenu from './subComponents/DropdownMenu';

function HelperField() {


    const [visible, setVisible] = useState(false);

    const onClickHandler = _ =>{
        if(!visible){
            setVisible(true);
        }else{
            setVisible(false);
        }

    };

    return (
        <>
            <header className='fixed w-full h-12 top-0 left-0 right-0 z-10'>
                <div className='max-w-7xl h-full flex justify-between items-center m-auto py-4'>
                    <HiMenuAlt1 onClick={()=>onClickHandler()} className=' cursor-pointer' size={'1.5rem'} color='white' />
					<Link to={'/'}>
                    	<span className='header-title-sm text-default-text'>npm<span>go</span></span>
					</Link>
                    <Dropdown overlay={DropdownMenu} trigger={['click']} placement='bottomCenter'>
						<IoShareSocial className='cursor-pointer' size={'1.5rem'} color='white'/>
					</Dropdown>
                </div>
            </header>
            <Overlay onClick={()=>onClickHandler()} visible={visible}/>
            <Sidebar onClick={()=>onClickHandler()} visible={visible}/>
        </>

    )
}

export default HelperField;
