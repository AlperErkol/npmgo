import React, {useState, useEffect} from 'react'
import { HiX, HiOutlineSearch} from "react-icons/hi";
// import {useDispatch,useSelector} from 'react-redux';
import {useNavigate, Link} from 'react-router-dom';
import { HiMenuAlt1} from "react-icons/hi";
import {Dropdown} from 'antd';
import DropdownMenu from './DropdownMenu';
import { IoShareSocial } from "react-icons/io5";
import Overlay from './Overlay';
import Sidebar from './Sidebar';


function Header() {

    let navigate = useNavigate();

    const [display, setDisplay] = useState(false)
    const [term, setTerm] = useState("");
	const [scrolled, setScrolled] = useState(false);
	const [visible, setVisible] = useState(false);

    const onChangeHandler = e=>{

        setTerm(e.value);
        console.log(display);

        if(e.value !== ""){
            setDisplay(true);
        }
        else{
            setDisplay(false);
        }

    }

    const onClickHandler = _ =>{
        const searchInput = document.querySelector('.search-input');
        searchInput.value = "";
        setDisplay(false);
    }

    const onSubmitHandler = e=>{
        e.preventDefault();
        navigate(`/query/${term}`);
    }

    const hamburgerOnClickHandler = _ =>{
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
			<header className={scrolled ? 'fixed z-10 header bg-default-sidebarColor w-full mb-4 py-4 duration-300' : 'fixed z-10 header w-full mb-4 py-4 duration-300'}>
				<div className="inner-header max-w-screen-xl mx-auto flex justify-between items-center">
					<Link className='header-title-result items-center h-full' to={'/'}>
						<span className='header-title-sm text-default-text'>npm<span>go</span></span>
					</Link>
					<div className='search-bar flex items-center justify-between'>
						<form className='w-full' onSubmit={(e)=>onSubmitHandler(e)}>
							<div className='input-container input-area flex w-full bg-default-inputColor rounded-md'>
								<div className='w-full h-full relative flex-1 px-2 py-1'>
									<input className='bg-default-inputColor text-default-text search-input w-full h-8' type="text" placeholder='Search for npm packages' onChange={(e)=>onChangeHandler(e.target)}/>
									{display && display && <span className='flex justify-center absolute top-0 right-0 w-8 h-full' onClick={()=>onClickHandler()}><HiX className='text-default-text cross-icon h-full'/></span>}
								</div>
								<button className='w-12'><HiOutlineSearch className='text-default-text search-icon w-full'/></button>
							</div>
						</form>
					</div>
					<div className='social-bar flex justify-end'>
							<HiMenuAlt1 onClick={()=>hamburgerOnClickHandler()} className='text-default-text cursor-pointer mr-8' size={'1.5rem'} />
							<Dropdown overlay={DropdownMenu} trigger={['click']} placement='bottomCenter'>
									<IoShareSocial className='text-default-text cursor-pointer' size={'1.5rem'}/>
							</Dropdown>
					</div>
				</div>
			</header>
			<Overlay onClick={()=>hamburgerOnClickHandler()} visible={visible}/>
			<Sidebar onClick={()=>hamburgerOnClickHandler()} visible={visible}/>
		</>
    )
}

export default Header
