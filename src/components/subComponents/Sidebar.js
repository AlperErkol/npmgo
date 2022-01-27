import React from 'react';

function Sidebar({visible}) {
    return(

        <aside className= {visible ? 'active' : ''}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi cumque nulla assumenda enim eius libero, aperiam tempora quis dolorem tempore.
        </aside>
    );
}

export default Sidebar;
