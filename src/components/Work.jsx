import React from 'react'
import { Link} from 'react-router-dom'
import twitter from '../assets/twitter.png'
import currency from '../assets/currency.jpg'
import todo from '../assets/todo.jpg'

function Work() {
  const projects =[
    {
      link: "https://twitter-kbki.onrender.com",
      src: twitter,
      name:"twitter"
    },
    {
      link:"https://currency-converter-three-sigma.vercel.app/",
      src: currency,
      name:"currency"
    },
    {
      link:"https://todo-blush-beta-95.vercel.app/",
      src: todo,
      name:"todo"
    }
  ]
  return (
    <div id='work' className='flex flex-col items-center  text-white bg-[#161513] py-4 w-full'>
        <h1 className='min-[423px]:text-5xl text-4xl font-bold py-4' >
            My Latest Work
        </h1>
        <div className='flex flex-wrap md:gap-8 gap-2 py-3 justify-center'>
        {
          projects.map((pro)=> (
          <Link to={pro.link} key={pro.name}>
           <div className=' md:w-80 w-48 duration-300 hover:scale-110 border-4 rounded-lg border-transparent hover:border-purple-500 '>
              <img className='md:h-48 w-48 h-40 md:w-80 object-cover rounded-md' src={pro.src}/>
            </div>
          </Link>
          ))
        }
        </div>
        <div className='py-4'>
            <Link to={"https://github.com/Izhan07"}>
            <button className='border-2 border-white rounded-full duration-200 hover:border-purple-500 p-4 w-48'>Github</button>
            </Link>
        </div>
    </div>
  )
}

export default Work