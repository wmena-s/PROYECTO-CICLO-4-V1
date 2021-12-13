import React from 'react';

const Scroll =(props)=>{
    return(
        
            <div style={{overflowY: 'scroll', height:'160vh'}}>
                {props.children}
            </div>
        
    )
}

export default Scroll;