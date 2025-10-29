import React from 'react'
import Image from 'next/image'

function Productinfo() {
    const Productinfo=[
        {
            id:1,
            title:"A style to suit every need",
            description:"With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.",
            image:"/Slider/img1.png",
            
        },
        {
            id:2,
            title:"A style to suit every need",
            description:"With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.",
            image:"/Slider/img2.png",
            
        },
        {
            id:3,
            title:"A style to suit every need",
            description:"With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.",
            image:"/Slider/img3.png",
            
        },
        {
            id:4,
            title:"A style to suit every need",
            description:"With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.",
            image:"/Slider/img4.png",
            
        },
        {
            id:5,
            title:"A style to suit every need",
            description:"With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.",
            image:"/Slider/img5.png",
            
        },
        {
            id:6,
            title:"A style to suit every need",
            description:"With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.",
            image:"/Slider/img6.png",
            
        },
       
    ]
  return (<>
    <div className='grid grid-cols-1 w-1/2 m-auto ml-44 space-y-2 mt-40'>
        
       <h1 className='text-2xl font-semibold text-[#00B5AD]'>A style to <span className='text-gray-900'>suit every need</span></h1>
       
      
       <p className='text-gray-600'>With six styles of hearing aids available (and numerous types of each), knowing which one to choose might seem daunting. That’s where a hearing professional comes in.</p>
       
       
       <p className='text-gray-600'>They will recommend a style based on important factors like your level of hearing loss, aesthetic preferences, lifestyle needs, budget and more.</p>
       
       <p className='text-gray-600'>See below for a short overview of each hearing aid style — but work with your hearing care provider to ensure you get the one that best matches your unique needs.</p>
        
    </div>
    <div>
        {Productinfo.map((pradynum)=>{
            return(
                <div key={pradynum.id} className='grid grid-cols-2  w-full m-auto ml-44 mt-10'>
                    <div>
                    <h1 className='text-2xl mb-2 font-semibold text-[#00B5AD]'>{pradynum.title}</h1>
                    <p className='text-gray-600'>{pradynum.description}</p>
                    </div>

                    <div className='ml-20' >
                        <Image src={pradynum.image} alt={pradynum.image} width={100} height={100}/>
                    </div>
                </div>
            )
        })}
    </div>
    </>
  )
}

export default Productinfo