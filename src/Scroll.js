import React from 'react';

const Scroll=(props)=>{
    return(
        <div style={{height:'1000px', overflow:'auto', border:'1px solid white'}}>
            {props.children}
        </div>
    );
}

export default Scroll;