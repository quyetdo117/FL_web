import React from 'react';
import './MemberItem.css'

function MemberItem({dataItem}) {
    const {src, fullName, nickName, lane, discription, birth, address, achievements} = dataItem
    return (
    <>
        <div className='col b-3 m-4 s-10'>
            <div className='member__item'>
                <img src={src} alt='img'></img>
                <h2 className='member__item-name'>{`${nickName} - ${lane}`}</h2>
                <div className='member__about'>
                    <h2 className='member__about-name'>{`${nickName} - ${lane}`}</h2>
                    <div className='member__about-content'>
                        <span>{`Tên : ${fullName}`}</span>
                        <span>{`Ngày sinh : ${birth}`}</span>
                        <span>{`Địa chỉ : ${address}`}</span>
                        <span>{`Vị trí chơi : ${lane}`}</span>
                        <div>
                            <span>Thành tích: </span>
                            {
                                achievements.map((item, index) => (
                                    <p key={index}>{item}</p>
                                ))
                            }
                        </div>
                        <p>{discription}</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}

export default MemberItem;
