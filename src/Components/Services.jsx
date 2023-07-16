import React from 'react'

function Services() {
  const featureObj = [{
    no : "1.",
    title :"Inclusive Registration",
    description : "Digital , Assited , and walk-ins Mobile # | Option - 12 photo IDs"
  } ,
{
  no:"2.",
  title:"Track vacination schedule",
  description:"Guidance on interval between doses based on vaccine brand"
},
{
  no:"3.",
  title:"Convenience and Choice",
  description:"Choose slots based on prefered vaccine , price , time and location "

},
{
  no:"4.",
  title:"Instant Digital Certificate",
  description:"Issued post vaccination universally authenticable"
}]
const vaccinatorsObj = [
  {
    no:"1.",
    title:"Plug-and-play Solution",
    description:"Download app , get authorisation and administers vaccine"
  },
  {
    no:"2.",
    title:"Publishing vaccine schedule",
    description:"Define shedule based on stock available , with prefrence"
  },
  {
    no:"3.",
    title:"verification of citizens",
    description:"Authenticate beneficiares at the point of vaccination"
  },{
    no:"4.",
    title:"Realtime Dashboard",
    description:"Analytics provided to view all sessions at a vaccination facility"
  }
]
  return (
   <div className='p-12'>
   <div className='p-12' style={{backgroundColor:"white"}}>
      <p className='text-4xl'>Services</p>
      <div className='mt-20 flex'>
        <div className='w-2/4'>
          <img style={{height:"500px"}} className='w-11/12 rounded-3xl' src="https://images.unsplash.com/photo-1610055975024-2bc4c1fc7204?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRpbmclMjB3aXRoJTIwbGlnaHQlMjBpbiUyMG5pZ2h0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="" />
        </div>
        <div className='w-2/4'>
          <p className='text-4xl mb-10'>
            Public Health System
          </p>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, eveniet suscipit. Animi at dignissimos beatae perspiciatis dolorum. Culpa numquam consequuntur, exercitationem cumque voluptatum optio quia! Iure eligendi voluptatem illo distinctio. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae exercitationem velit voluptas, corporis ducimus illum nesciunt molestias possimus? Eum nihil et fugit excepturi a! Asperiores distinctio aut minima labore sit!</span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, fugiat nesciunt molestias quibusdam maiores, consectetur exercitationem dignissimos nihil accusantium recusandae vel corrupti eos alias ipsa aperiam. Voluptates est suscipit minima.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id corrupti nulla dignissimos fugiat, accusantium unde, porro magnam laudantium, modi provident amet. Praesentium tenetur incidunt harum tempore sequi consequuntur nisi quia!
          </span>
          <p className='mt-6'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis, hic ducimus quidem temporibus dolor rerum adipisci consectetur praesentium deleniti similique dolorum nesciunt commodi a, facere illum quasi dolore delectus possimus.</p>
        </div>
      </div>
      <p className='text-4xl mt-24'>Features</p>
      <div className='flex justify-between'>
        <div className='w-2/4'>
          <p className="text-3xl italic text-blue-500 mt-12">For Citizens</p>
          <div className="grid grid-cols-2 gap-6">
           {
            featureObj.map((item) => (
              <div>
              <p className='text-blue-500 font-bold text-4xl border border-gray-400 pl-3 pr-2 pb-2 rounded-lg w-max mt-8 '>{item.no}</p> <br />
              <span className='font-bold text-lg'>{item.title}</span>
              <p className='mt-4 w-40 '>{item.description}</p>
            </div>
            ))
           }
          </div>
        </div> 
        <div className='w-2/4'>
          <p className="text-3xl italic text-green-400 mt-12">For Vaccinators</p>
          <div className="grid grid-cols-2 gap-6">
           {
            vaccinatorsObj.map((item) => (
              <div>
              <p className='text-green-500 font-bold text-4xl border border-gray-400 pl-3 pr-2 pb-2 rounded-lg w-max mt-8'>{item.no}</p> <br />
              <span className='font-bold text-lg'>{item.title}</span>
              <p className='mt-4 w-40 '>{item.description}</p>
            </div>
            ))
           }
          </div>
        </div> 
      </div>
   </div>
   </div>
  )
}

export default Services