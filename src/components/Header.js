import React, {useState} from 'react'
import { HiX } from "react-icons/hi";
import {useDispatch,useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';


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

    return (
        <header className='header bg-default-sidebarColor w-full mb-4 py-2'>
            <form onSubmit={(e)=>onSubmitHandler(e)}>
                <div className='relative inline pl-40'>
                    <input className='search-input bg-default-inputColor text-default-whitely py-2 px-4 w-1/10 rounded-md [outline:0]' type="text" placeholder='Search for npm packages' onChange={(e)=>onChangeHandler(e.target)}/>
                    {display && <span className='bg-default-inputColor absolute h-full p-1 right-0 inline-block rounded-tr-md rounded-br-md cursor-pointer' onClick={()=>onClickHandler()}><HiX className='h-full' size={'1.2rem'} color='white'/></span>}
                </div>
            </form>
        </header>
    )
}

export default Header
