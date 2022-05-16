import React from 'react';
import './style.css';

function Message ({props}) {
    return <div className='message'><p >{props}</p></div>
}
export default Message;