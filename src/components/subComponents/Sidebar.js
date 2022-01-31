import React, {useState, useContext} from 'react';
import { AiOutlineHistory } from "react-icons/ai";
import { BsSunFill, BsCode, BsFillMoonStarsFill } from "react-icons/bs";
import HistoryModal from './HistoryModal';
import 'antd/dist/antd.css';
import {ThemeContext} from '../../ThemeContext';

function Sidebar({visible}) {


	const [colorTheme, setColorTheme] = useContext(ThemeContext);

	const onClickHandler = _ =>{

		if(colorTheme === 'dark'){
			setColorTheme('light');
		}else if (colorTheme === 'light'){
			setColorTheme('dark');
		}

	};

	const [isModalVisible, setIsModalVisible] = useState(false);

	const openModal = () => {
	  setIsModalVisible(true);
	};

	const closeModal = () => {
	  setIsModalVisible(false);
	};

    return(

        <aside className= {visible ? 'active bg-default-sidebarColor' : 'bg-default-sidebarColor'}>
            <div className="sidebar-list">
				<div className="sidebar-item text-default-text flex items-center p-4 cursor-pointer hover:text-default-tertiary ease-in duration-150" onClick={openModal}>
					<AiOutlineHistory size={24} className='mr-2'/>
					<span className='text-sm'>Search History</span>
				</div>
				<HistoryModal show={isModalVisible} openModal={openModal} closeModal={closeModal}  />
				<a href="https://github.com/AlperErkol/npmgo" target="_blank" rel="noreferrer">
					<div className="sidebar-item text-default-text flex items-center p-4 cursor-pointer hover:text-default-tertiary ease-in duration-150">
						<BsCode size={24} className='mr-2'/>
						<span className='text-sm'>Source Code</span>
					</div>
				</a>

				<div className="sidebar-item p-4 cursor-pointer" onClick={()=>onClickHandler()}>
					<div className='flex items-center mb-1'>
						<div className='relative w-8 h-8 flex justify-center items-center'>
							<BsSunFill size={24} className={colorTheme === 'dark' ? 'active toggle-theme text-default-text mr-2' : 'inactive toggle-theme text-default-text mr-2'}/>
							<BsFillMoonStarsFill size={24} className={colorTheme === 'light' ? 'active toggle-theme text-default-text mr-2' : 'inactive toggle-theme text-default-text mr-2 '}/>
						</div>
						<span className='text-default-text text-sm'>Change Theme</span>
					</div>
					<small className='text-default-muted'>Current Theme : {colorTheme}</small>
				</div>
			</div>



        </aside>

    );
}

export default Sidebar;
