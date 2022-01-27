import React from 'react'
import { HiMenuAlt1} from "react-icons/hi";
import { IoShareSocial } from "react-icons/io5";
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";
import Sidebar from './subComponents/Sidebar';
import { useState } from 'react';
import Overlay from './subComponents/Overlay';
import {Dropdown} from 'antd';
import { Link } from 'react-router-dom';

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

	const menu = (
		<div className='socail-menu'>
			<a className='flex items-center text-default-text py-4 px-8  bg-default-sidebarColor' href="https://github/AlperErkol" target="_blank" rel='noreferrer'>
				<AiFillLinkedin size={24} className='mr-2'/>
				<span>Github</span>
			</a>
			<a className='flex items-center text-default-text py-4 px-8  bg-default-sidebarColor' href="https://github/AlperErkol" target="_blank" rel='noreferrer'>
				<AiFillGithub size={24} className='mr-2'/>
				<span>LinkedIn</span>
			</a>
			<a className='flex items-center text-default-text py-4 px-8  bg-default-sidebarColor' href="https://github/AlperErkol" target="_blank" rel='noreferrer'>
				<AiFillInstagram size={24} className='mr-2'/>
				<span>Instagram</span>
			</a>
			<a className='flex items-center text-default-text py-4 px-8  bg-default-sidebarColor' href="https://github/AlperErkol" target="_blank" rel='noreferrer'>
				<AiFillTwitterCircle size={24} className='mr-2'/>
				<span>Twitter</span>
			</a>
		</div>
	  );



    return (
        <>
            <header className='fixed w-full top-0 left-0 right-0'>
                <div className='max-w-7xl flex justify-between items-center m-auto py-4'>
                    <HiMenuAlt1 onClick={()=>onClickHandler()} className=' cursor-pointer' size={'1.5rem'} color='white' />
					<Link to={'/'}>
                    	<span className='header-title-sm text-default-text'>npm<span>go</span></span>
					</Link>
                    <Dropdown overlay={menu} trigger={['click']} placement='bottomCenter'>
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
