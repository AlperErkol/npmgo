import React, {useState} from 'react'
import { HiX } from "react-icons/hi";
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

	const [visible, setVisible] = useState(false);

    const hamburgerOnClickHandler = _ =>{
        if(!visible){
            setVisible(true);
        }else{
            setVisible(false);
        }

    };

    return (
		<>
			<header className='fixed z-10 header bg-default-sidebarColor w-full mb-4 py-4'>
				<div className="inner-header max-w-screen-xl mx-auto flex justify-between items-center">
					<Link className='header-title-result items-center h-full' to={'/'}>
						<span className='header-title-sm text-default-text'>npm<span>go</span></span>
					</Link>
					<div className='search-bar flex items-center justify-between'>
						<form className='w-full' onSubmit={(e)=>onSubmitHandler(e)}>
							<div className='relative inline'>
								<input className='search-input bg-default-inputColor text-default-whitely py-2 px-4 rounded-md [outline:0] w-full' type="text" placeholder='Search for npm packages' onChange={(e)=>onChangeHandler(e.target)}/>
								{display && <span className='bg-default-inputColor absolute h-full p-1 right-0 inline-block rounded-tr-md rounded-br-md cursor-pointer' onClick={()=>onClickHandler()}><HiX className='h-full' size={'1.2rem'} color='white'/></span>}
							</div>
						</form>
					</div>
					<div className='social-bar flex justify-end'>
							<HiMenuAlt1 onClick={()=>hamburgerOnClickHandler()} className=' cursor-pointer mr-8' size={'1.5rem'} color='white' />
							<Dropdown overlay={DropdownMenu} trigger={['click']} placement='bottomCenter'>
									<IoShareSocial className='cursor-pointer' size={'1.5rem'} color='white'/>
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
