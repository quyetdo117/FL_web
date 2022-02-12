import React from 'react';
import './Breadcrum.css'

function Breadcrum({children}) {
  return (<>
        <div className='breadcrum'>
              <div className='grid'>
                <div className='row no-gutters'>
                <i className="fas fa-angle-double-right"></i>
                  <span className='breadcrum__name'>{children}</span>
                </div>
              </div>
        </div>
  </>)
}

export default Breadcrum;
