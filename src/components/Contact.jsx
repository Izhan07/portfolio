import React from 'react'
import mail from '../assets/mail.png'
import phone from '../assets/phone.png'
import location from '../assets/location.png'

function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "c745023a-92f5-49f1-8d2e-31b2901710ca");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
      alert(result)
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div id='contact' className='bg-[#161513] text-white p-4 flex flex-col items-center '>
        <div>
            <h1 className='min-[370px]:text-5xl text-4xl font-bold p-4' >Get in touch</h1>
        </div>
        <div className='flex w-full md:justify-center items-center md:items-start  gap-4 flex-col md:flex-row'>
            <div className='min-[370px]:w-96 w-80 '>
                <h1 className='text-4xl font-bold p-4 '><span className='bg-gradient-to-r from-purple-500 to-pink-500 text-transparent bg-clip-text'>Let's Talk</span></h1>
                <p className='p-4'>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className='flex text-white p-4 gap-4'><img src={mail}/><p>izhanahmed987@gmail.com</p></div>
                <div className='flex text-white p-4 gap-4'><img src={phone}/>+923122929271</div>
                <div className='flex text-white p-4 gap-4'><img src={location}/>Khi,Pak</div>
            </div>
           <form onSubmit={onSubmit} className='flex flex-col min-[410px]:w-96 w-80 gap-4 '>
              <label>Your Name</label>
              <input className='rounded-md p-1 bg-[#32323c]' type='text' placeholder='Enter your Name' name='name'/>
              <label>Your Email</label>
              <input className='rounded-md p-1 bg-[#32323c]' type='email' placeholder='Enter your Email' name='email'/>
              <label>Write your massage </label>
              <textarea className='rounded-md p-1 bg-[#32323c]' name='message' placeholder='Enter your message' rows="8"/>
            <div>  <button type='submit' className='font-semibold hover:scale-105 bg-gradient-to-r  from-purple-500 to-pink-500 p-3 rounded-3xl w-40 text-white duration-100  '>Submit</button></div>
            </form>

        </div>
    </div>
  )
}

export default Contact