import React from 'react'

const Form = () => {
    return (
       <div className='mainFormContainer'>
         <div className='formContainer'>
            <div className='bluePart'>
                <p id='textTemp16'>Contact Information</p>
                <p id='textTemp17'>Say something to start a live chat!</p>

                <div className='contactsContainer'>
                    <div className='contacts'>
                        <p>📞 </p>
                        <p id='leftMargin'> +1012 3456 789</p>
                    </div>
                    <div className='contacts'>
                        <p>📩 </p>
                        <p id='leftMargin'>demo@gmail.com</p>
                    </div>
                    <div className='contacts'>
                        <p>📍 </p>
                        <p id='leftMargin'> Golden City Center , Chh Sambhajinagar</p>
                    </div>


                    <div className='bubbles2'>
                        <img id='textTemp18' src='./Images/small.png' />
                        <img id='textTemp19' src='./Images/big.png' />
                    </div>
                </div>
            </div>
            <div className='formPart'>
                <div className='lineOne'>
                    <div className='forName'>
                        <label for="name">Name</label>
                        <input type='text' placeholder='' />
                    </div>
                    <div className='forMail'>
                        <label for="name">Contact No</label>
                        <input type='text' placeholder='' />
                    </div>
                </div>
                <div className='lineTwo'>
                    <label for="mail">Email</label>
                    <input type='text' placeholder='' />
                </div>
                <div className='lineThree'>
                    <label for="msg">Message</label>
                    <input type='text' placeholder='Write your message' />
                </div>


                <div className='lastBtn'>
                    <button>Send Message</button>
                </div>
            </div>



        </div>
       </div>
    )
}

export default Form