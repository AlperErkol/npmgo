import React from 'react';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram, AiFillTwitterCircle } from "react-icons/ai";

function DropdownMenu() {
  return <div className='socail-menu'>
  <a className='flex items-center text-default-text py-4 px-8  bg-default-sidebarColor' href="https://github/AlperErkol" target="_blank" rel='noreferrer'>
	  <AiFillGithub size={24} className='mr-2'/>
	  <span>Github</span>
  </a>
  <a className='flex items-center text-default-text py-4 px-8  bg-default-sidebarColor' href="https://github/AlperErkol" target="_blank" rel='noreferrer'>
	  <AiFillLinkedin size={24} className='mr-2'/>
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
</div>;
}

export default DropdownMenu;
