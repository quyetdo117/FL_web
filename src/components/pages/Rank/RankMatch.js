import React from 'react';
import './RankMatch.css'
import RankMatchItem from './RankMatchItem';

function RankMatch() {
    return (
    <>
        <div className='rank__match'>
            <div className='match__list'>
                    <RankMatchItem />
                    <RankMatchItem />
                    <RankMatchItem />
                    <RankMatchItem />
                    <RankMatchItem />
                    <RankMatchItem />
                </div>
        </div>
    </>
    )
}

export default RankMatch;
