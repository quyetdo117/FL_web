import React, { memo, useReducer } from 'react'
import Button from '../../Button'
import './BuyerInfo.css'
import { initInput, reducer, setAddress, setEmail, setName, setNote, setPhone, setStateAddress, setStateEmail, setStateName, setStatePhone } from './buyer__store'
import { useValidate } from './buyer__store/hooks'
import InputForm from './InputForm'

function BuyerInfo() {
    const [buyer, dispatchBuyer] = useReducer(reducer, initInput)
    const { sName, stateName, sAddress, stateAddress,
         sEmail, stateEmail, sPhone, statePhone , sNote, stateNote }=buyer
    const {haveValue, lengthPhone, isEmail, isFullName} = useValidate()
    const setValue = (callBack1, callBack2, value) => {
        if(callBack1(value).isInput===false){
            return callBack1(value)
        }else if(callBack2(value).isInput===false){
            return callBack2(value)
        }else{
            return callBack2(value)
        }
    }

    return (
        <>
            <div className='buyer__info-box'>
                <div className='grid'>
                    <div className='row no-gutters'>
                        <div className='col b-12'>
                            <div className='buyer__wrapper'>
                                <div className='buyer__container'>
                                    <div className='buyer__header'>
                                        <h1>Hoàn tất thông tin nhận hàng</h1>
                                    </div>
                                    <form className='buyer__form' method='get'>
                                        <div className='row'>
                                            <InputForm
                                                type='text'
                                                id='name'
                                                title='Họ & Tên'
                                                placeholder='VD: Le Van A'
                                                value={sName}
                                                stateInput={stateName}
                                                onBlur={() => dispatchBuyer(
                                                    setStateName(setValue(haveValue, isFullName, sName))
                                                    )}
                                                onChange = {(e) => dispatchBuyer(setName(e.target.value))}
                                            />
                                            <InputForm
                                                type='text'
                                                id='address'
                                                title='Địa chỉ'
                                                placeholder='VD: 336 Nguyen Trai/Thanh xuan/Ha noi'
                                                value={sAddress}
                                                stateInput={stateAddress}
                                                onBlur={() => dispatchBuyer(setStateAddress(haveValue(sAddress)))}
                                                onChange = {(e) => dispatchBuyer(setAddress(e.target.value))}
                                            />
                                            <InputForm
                                                type='text'
                                                id='email'
                                                title='Email'
                                                placeholder='VD: xyz@gmail.com'
                                                value={sEmail}
                                                stateInput={stateEmail}
                                                onBlur={() => dispatchBuyer(
                                                    setStateEmail(setValue(haveValue, isEmail, sEmail)))
                                                }
                                                onChange = {(e) => dispatchBuyer(setEmail(e.target.value))}
                                            />
                                            <InputForm
                                                type='text'
                                                id='phone'
                                                title='Số điện thoại'
                                                placeholder='VD: 03362xxxx'
                                                value={sPhone}
                                                stateInput={statePhone}
                                                onBlur={() => dispatchBuyer(
                                                    setStatePhone(setValue(haveValue, lengthPhone, sPhone)))
                                                }
                                                onChange = {(e) => dispatchBuyer(setPhone(e.target.value))}
                                            />
                                            <InputForm
                                                type='text'
                                                id='note'
                                                title='Ghi chú'
                                                placeholder='( Nếu có )..'
                                                value={sNote}
                                                stateInput={stateNote}
                                                onChange = {(e) => dispatchBuyer(setNote(e.target.value))}
                                            />
                                        </div>
                                        <div className='buyer__btn'>
                                            <Button type={'submit'} onClick={() => {}}>Hoàn thành</Button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(BuyerInfo)