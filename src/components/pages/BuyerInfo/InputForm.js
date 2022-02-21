import React from 'react'

function InputForm(props) {
    const {type, id, title, onBlur, value, stateInput, onChange, placeholder} = props
    return (
        <>
            <div className='col b-6 s-12'>
                <div
                className={stateInput && stateInput.isInput ? 'form__item':'form__item no-validate'}
                onBlur={onBlur}>  {/* no-validate */}
                    <label htmlFor={id} className='form__label'>{title}</label>
                    <div className='form__input'>
                        <input
                            type={type}
                            onChange={onChange}
                            id={id} value={value}
                            placeholder={placeholder}
                        ></input> 
                        {
                            stateInput && stateInput.isInput === true && <i className="fas fa-check"></i>
                        }
                        {
                            stateInput && stateInput.isInput === false && <i className="fas fa-exclamation"></i>
                        }
                        {/* <i className="fas fa-check"></i> */}
                        {/* <i className="fas fa-exclamation"></i> */}
                    </div>
                    <span className='form__message'>
                        {
                            stateInput && stateInput.message
                        }
                    </span>
                </div>
            </div>
        </>
    )
}

export default InputForm