import React from 'react'
import { ServiceData } from '../Utils/Data'
const WhyChoose = () => {
    return (
        <div className='WhyChooseContainer'>
            <div className='topText'>
                <p id='textTemp12' style={{ color: "rgba(166, 166, 166, 1)" }}>Why Choose <span style={{ color: "rgba(0, 127, 205, 1)" }}>PlanetWash?</span></p>
                <p id='textTemp13'>To redefine laundry service by making it fast, reliable, and eco-conscious while
                    <br />
                    supporting local businesses through digital innovation.
                </p>
            </div>


            <div className='designPart'>
                {
                    ServiceData.map((res) => (
                        <div className='BoxesContainer'>
                            <h1 >{res.image}</h1>
                            <p id='textTemp14'>{res.title}</p>
                            <p id='textTemp15'>{res.des}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default WhyChoose



