import React from 'react';
 
export default function Coin({ imgInfo }) {
    return(
      <div class='Coin'>
        <img
          style={{ width:'159px', height:'144px' }}
          src={imgInfo}
        />
      </div>
    );
}