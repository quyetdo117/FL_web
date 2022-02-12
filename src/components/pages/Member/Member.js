import React, { memo, useEffect, useState } from 'react';
import Breadcrum from '../../Breadcrum';
import MemberItem from './MemberItem';
import './Member.css'

function Member() {
    const [member, setMember] = useState([])
    useEffect(() => {
        fetch('https://61dceedb591c3a0017e1ab26.mockapi.io/api/Member')
                .then(response => response.json())
                .then(data => setMember(data))
    },[])
    return (
    <>
        <div className='app__member'>
            <Breadcrum>Thành viên</Breadcrum>
            <div className='member__container'>
                <div className='grid'>
                    <div className='member__list'>
                        <div className='row'>
                            {
                                member && member.map((item, index) => (
                                    <MemberItem dataItem={item} key={index}/>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default memo(Member);
