import React from 'react'
import "../../style/header/SubHeader.scss";
import arrow from "../../image/header/control.png";

const SubHeader = () => {
    return (
        <div className='SubHeaderMain'>
            <div className='SubHeaderLeftSection'>
                <img src={arrow} alt='arrow' className='SubHeaderArrowIcon'/>
            </div>
            <div className='SubHeaderMiddleSection'>
                <div className='SubHeaderText'>서브헤더</div>
            </div>
        </div>
    )
}

export default SubHeader


