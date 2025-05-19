import React from 'react'
import {Data} from '../Utils/Data'

const Services = () => {



    return (
        <div className='mainContainer'>
            <div className='ServiceContainer'>
                <span style={{ color: "gray" }}>Services We Offer</span> <span style={{ color: "rgba(0, 127, 205, 1)" }}> , What We Clean</span>
            </div>

            <div className='servicesBody'>
                {Data.map((res, id) => (
                    <div
                        key={res.id}
                        className={`servicesBoxesContainer ${id % 2 === 1 ? 'reverse' : ''}`}
                    >
                        <div className='imgBoxes'>
                            <img src={res.image} alt={res.stepName} />
                        </div>
                        <div className={`textBoxes ${id % 2 === 0 ? 'leftAlign' : ''}`}>
                            <h1 id='stepIndex'>{res.id}</h1>
                            <h1 id='stepName'>{res.stepName}</h1>
                            <h1 id='stepDetails'>{res.details}</h1>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default Services