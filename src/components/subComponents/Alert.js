import React from 'react';

function Alert(props) {
    return <small className='text-xs bg-default-errorArea p-1 rounded-md text-default-errorText'>{props.message}</small>;
}

export default Alert;
