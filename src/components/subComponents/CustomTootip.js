import React from 'react';


export const getContent = label =>{

	if(label === "maintenance"){
		return 'Maintenance is about ...';
	}
	if(label === "quality"){
		return "Quality is about ...";
	}
	if(label === "popularity"){
		return "Popularity is about ...";
	}

};


function CustomTootip({ active, payload, label }) {
	if (active && payload && payload.length) {
		return (
		<div className="custom-tooltip bg-default-sidebarColor p-4">
			<p className="label text-default-whitely">{`${label} : ${payload[0].value.toFixed(2)} (${payload[0].value.toFixed(2)*100}%)`}</p>
			<p className="desc text-default-whitely">{getContent(label)}</p>
		</div>
		);
	}
	return null;
}

export default CustomTootip;
