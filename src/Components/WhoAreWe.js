import React from 'react'

const WhoAreWe = () => {
    return (
        <div className='areWeContainer'>
            <div className='leftOne'>
                <h1 id='tempText11'>Who Are We ?</h1>
                <p id='tempText12'>PlanetWash is a tech-powered laundry service app designed to make clothes cleaning effortless, affordable, and accessible. Our mission is to bridge the gap between local laundry stores and customers by offering a seamless platform where users can find, book, and manage laundry services from the comfort of their homes.
                    <br />
                    We understand the importance of fresh, clean clothes and the time it takes out of your busy schedule. That’s why we created a smart solution — allowing users to discover nearby laundries, choose services like washing, dry cleaning, or ironing, schedule pickups and deliveries, and track their orders in real-time.</p>
            </div>
            <div className='rightOne'>
                <video src={'./Images/vedio.mp4'}
                    id='video'
                    autoPlay
                    muted
                    loop
                    playsInline
                    width="100%"
                />
            </div>
        </div>
    )
}

export default WhoAreWe