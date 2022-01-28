import React, {useState, useEffect} from 'react';
import { Modal, Button } from 'antd';
import { FaTimes } from "react-icons/fa";


function HistoryModal({show, closeModal}) {

	const [history, setHistory] = useState(null);

	useEffect(() => {
		setHistory(JSON.parse(localStorage.getItem('history')));
		console.log('ALPERALPER');
	}, []);



	const deleteItem = item =>{

		let index = history.indexOf(item);

		// Delete from state
		history.splice(index,1);
		setHistory([...history]);

		// Delete from localStorage
		localStorage.setItem('history',JSON.stringify(history));


	};

	const clearAll = _ =>{

		let tempHistory = [];
		setHistory(tempHistory);
		localStorage.removeItem('history');

	};




  return (
	<Modal className='modal' title="Search History" visible={show} onCancel={closeModal} footer={[
		<Button onClick={clearAll}>Clear All</Button>,
		<Button onClick={closeModal}>OK</Button>,

	]}>
		{history && history.length > 0 ? <p className='font-bold'>
			Left-click to delete item from history.
		</p> : <p className='font-bold'>
			Your search history is empty.
		</p>}
		{history && history.map(item => {
			return (
				<div key={item}  onClick={()=>deleteItem(item)}  className='history-item group flex justify-between items-center p-2 mb-2 bg-default-inputColor text-default-text rounded-lg cursor-pointer'>
					<span>{item}</span>
					<FaTimes className='group-hover:text-default-tertiary' />
				</div>
			)
		} )}
	</Modal>
  );
}

export default HistoryModal;
