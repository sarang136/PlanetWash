import React from 'react'

const Body = () => {
    return (

        <div className='bodyContainer'>
            <div className='textPart'>
                <span id='temp1'><>Doorstep</></span> <span id='temp2'><>Laundry</></span>
                <h1 id='temp3'>Made Easy With</h1>
                <h1 id='temp4'>PlanetWash</h1>
                <div className='btnContainer'>
                    <button id='btn'>DOWNLOAD APP</button>
                </div>
            </div>

            <div className='imagePart'>
                <img id='tempImg1x' src='./Images/washingMachine.png' />
                <img id='tempImg1' src='./Images/clothsBucket.png' />
            </div>

            <div className='bubbles'>
                <img id='tempImg2' src='./Images/darkCircle.png' />
                <img id='tempImg3' src='./Images/lightCircle.png' />
                <img id='tempImg4' src='./Images/fullDark.png' />
                <img id='tempImg5' src='./Images/fullLight.png' />
                <img id='tempImg6' src='./Images/fullDark.png' />
                <img id='tempImg7' src='./Images/halfdarkDown.png' />
                <img id='tempImg8' src='./Images/fullLight.png' />
                <img id='tempImg9' src='./Images/righTopLight.png' />
                <img id='tempImg10' src='./Images/rightCorner2.png' />
            </div>

            <div id='box1'  className='textBoxes'>
                <p>“ Use PlanetWash, and Forget the Deo , Your Clothes Stay Fresh All Day. ”</p>
            </div>
            <div className='textBoxes2'>
                <p>“ From Pickup to Delivery We've Got It All Covered ”</p>
            </div>
            {/* <img src='./Images/bodytext.png'/> */}
        </div>

    )
}

export default Body