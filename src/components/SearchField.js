import React from 'react'
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { HiX } from "react-icons/hi";
import searchRepositories from '../store/action-creators';

import {useNavigate} from 'react-router-dom';

function SearchField() {

    let navigate = useNavigate();

    const [display, setDisplay] = useState(false)


    const [term, setTerm] = useState("");
    const dispatch = useDispatch();
    const {loading,data,error} = useSelector(state => state.repositories);
    console.log(data);

    const onSubmitHandler = e=>{
        console.log('selamlar');
        console.log(term);
        e.preventDefault();
        navigate(`/q/${term}`);
        
        
        // dispatch(searchRepositories(term));
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
        <div className='w-screen h-screen flex justify-center items-center'>
            <form className='w-3/5 flex justify-center items-center flex-col' onSubmit={(e)=>onSubmitHandler(e)}>
                <h1 className='mb-10'>NPMGO</h1>
                <div className='flex w-3/5'>
                    <div className='relative w-full'>
                        <input className='search-input bg-default-inputColor text-default-whitely py-2 px-4 w-full h-14 rounded-md [outline:0]' type="text" placeholder='Search for npm packages' onChange={(e)=>onChangeHandler(e.target)}/>
                        {display && <span className='bg-default-inputColor absolute h-full p-2 right-0 inline-block rounded-tr-md rounded-br-md cursor-pointer' onClick={()=>onClickHandler()}><HiX className='h-full' size={'1.2rem'} color='white'/></span>}
                    </div>
                    {/* <button className='bg-default-inputColor p-2'><HiSearch size={'1.5rem'} color='white'/></button> */}
                </div>
            </form>
            <div className="fixed bottom-2 copyright w-full pl-2 pr-14">
                <hr className='border-default-sidebarColor'/>
                <p className='text-center mt-2 text-default-whitely text-sm'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, amet!</p>
            </div>
        </div>
        
    )
}

export default SearchField;
