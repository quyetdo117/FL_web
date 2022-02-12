import React, { memo, useState } from 'react';
import Breadcrum from '../../Breadcrum';
import './Rank.css'
import RankMatch from './RankMatch';
import RankTable from './RankTable';

function Rank() {
    const [click, setClick] = useState(false)
    return (
        <>
            <div className='app__rank'>
                <Breadcrum>BXH/Lịch đấu</Breadcrum>
                <div className='rank__container'>
                    <div className='grid'>
                        <div className='row no-gutters'>
                            <div className='col b-12'>
                                <div className='rank__btns'>
                                    <button
                                    className={!click ? 'rank__btn active' : 'rank__btn'}
                                    onClick={() => setClick(false)}
                                    >BXH</button>
                                    <button
                                    className={click ? 'rank__btn active' : 'rank__btn'}
                                    onClick={() => setClick(true)}
                                    >Lịch thi đấu</button>
                                </div>

                                <div className={click ? 'rank__content-box active' : 'rank__content-box'}>
                                    <div className='rank__content'>
                                        <RankTable />
                                        <RankMatch />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Rank);
