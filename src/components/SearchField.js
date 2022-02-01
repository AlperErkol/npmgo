import React from 'react'
import {useState} from 'react'
import { HiX, HiOutlineSearch} from "react-icons/hi";
import {useNavigate} from 'react-router-dom';
import HelperField from './HelperField';
import Footer from './subComponents/Footer';

function SearchField() {

    let navigate = useNavigate();
    const [display, setDisplay] = useState(false)
    const [term, setTerm] = useState("");


    const onSubmitHandler = e=>{
        e.preventDefault();
        navigate(`/query/${term}`);
    }

    const onChangeHandler = e=>{

        setTerm(e.value);

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


    return (
        <div className='w-screen h-screen'>
            <HelperField/>
            <main className="w-full h-full flex justify-center items-center">
                <form className='w-3/5 flex justify-center items-center flex-col' onSubmit={(e)=>onSubmitHandler(e)}>
                    <span className='header-title mb-10 text-default-text'>npm
					<span>go</span>
                    </span>
                    <div className='flex w-3/5'>
                        <div className='input-container input-area flex w-full bg-default-inputColor rounded-md'>
							<div className='w-full h-full relative flex-1 px-2'>
								<input className='text-default-text bg-default-inputColor search-input w-full h-12' type="text" placeholder='Search for npm packages' onChange={(e)=>onChangeHandler(e.target)}/>
								{display && display && <span className='flex justify-center absolute top-0 right-0 w-8 h-full' onClick={()=>onClickHandler()}><HiX className='text-default-text cross-icon h-full'/></span>}
							</div>
							<button className='w-12'><HiOutlineSearch className='text-default-text search-icon w-full'/></button>
						</div>
                    </div>
                </form>
            </main>
            <Footer/>
        </div>

    )
}

export default SearchField;