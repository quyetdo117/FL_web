import React from 'react';

function RankMatchItem() {
    return (
    <>
        <div className='match__box-item'>
            <div className='match__item'>
                <div className='match__team left'>
                    <img src='https://github.com/quyetdo117/team-flash/blob/main/public/assets/img/logoSGP.png?raw=true' alt='img'></img>
                    <span className='match__team-name'>SGP</span>
                    <span className='match__team-point'>0</span>
                </div>
                <div className='match__mid'>
                    <span className='match__time'>28/01</span>
                </div>
                <div className='match__team right'>
                    <span className='match__team-point'>0</span>
                    <span className='match__team-name'>FL</span>
                    <img src='https://github.com/quyetdo117/team-flash/blob/main/public/assets/img/logoFl.png?raw=true' alt='img'></img>
                </div>
            </div>
        </div>
    </>)
}

export default RankMatchItem;
