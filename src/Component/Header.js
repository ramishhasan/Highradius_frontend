import React from 'react';
import highradiuslogo from './highradiuslogo.png';
import abc from './abc.svg'
function Header() {

    return (
      <div style={{display:'flex',backgroundColor:'#192f3e',height:'110px'}}>
                  <div> <img src={abc} style={{height:'50px',marginTop:'60px',marginLeft:'30px',backgroundColor:'#192f3e'}}/></div>

                     <h1 style={{color:'white'}}><img src={highradiuslogo} style={{height:'50px',marginLeft:'200px',backgroundColor:'#192f3e'}}/></h1>

      </div>
    );
  }
  export default Header; 