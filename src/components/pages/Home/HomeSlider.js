import React, { useEffect, useRef, useState } from 'react';
import './HomeSlider.css'

function HomeSlider() {
    const [slider, setSlider] = useState({resize: false, left: 0, index: 0})
    const {left, index, resize} = slider
    const refSlider = useRef()
    useEffect(() => {
        const setLeftSlider = () => {
            const width = refSlider.current.offsetWidth;
            setSlider(slider => {
                if(slider.index >= 2){
                    return {resize: false, left: 0, index: 0}
                }else{
                    return {resize: false, left: -width*(slider.index + 1), index: slider.index + 1}
                }
            })
        }
        const timerSlider = setInterval(setLeftSlider, 5000)
        //reSize
        const onReSize = () => {
            const width = refSlider.current.offsetWidth;
            setSlider({...slider, left: width*(-index), resize: true})
        }
        window.addEventListener('resize', onReSize)
        const clearUp = () => {
            clearInterval(timerSlider)
            window.removeEventListener('resize', onReSize)
        }
        return clearUp
    },[slider, index])
    return (
    <>
        <div className='home__slider'>
            <div className='slider__content' ref={refSlider}>
                <div className={resize ? 'slider__list-img resize': 'slider__list-img'} style={{left: left}}>
                    <img src='https://github.com/quyetdo117/team-flash/blob/main/public/assets/img/news1.jpg?raw=true' alt='img'></img>
                    <img src='https://github.com/quyetdo117/team-flash/blob/main/public/assets/img/news2.jpg?raw=true' alt='img'></img>
                    <img src='https://i.ibb.co/jMnbnNV/news4.jpg' alt='img'></img>
                </div>
            </div>
        </div>
    </>)
}

export default HomeSlider;
