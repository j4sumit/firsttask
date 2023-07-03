import React, {useState} from 'react';


export default function Login() {
    const [number, setNumber] = useState(0);
    const handleNumber=(e)=>{
    setNumber(e.target.value);
    }
    console.log(number)
  return (
    <div >
        <div>
      <h1>LOGIN ACCOUNT</h1>
      <p>Hello, welcome to  Floatr</p>
        </div>
      <div>
        <h1>Phone Number</h1>
        <input type='number' value={number} placeholder='Enter Phone Number' onChange={handleNumber}/>
        <p>A 4 digit OTP will be sent via SMS to verify your mobile number!</p>
      </div>
      <button className='btn'>Continue</button>
    </div>
  )
}