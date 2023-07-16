import React from 'react'
import "./../app.css"
function NewsEvents() {
    const newsEventObj = [{
        img:"https://media.istockphoto.com/id/476881195/photo/bay-bridge-and-san-francisco-skyline-at-sunset.webp?b=1&s=170667a&w=0&k=20&c=SBXkv7Zu5R8NzCq2aaYK4nMH14PrZW0wESXgQG67EBw=",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid tenetur voluptates rerum iste repel"
    },
    {
        img:"https://plus.unsplash.com/premium_photo-1661962255609-dc2d68b31ec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGJ1aWxkaW5nJTIwd2l0aCUyMGxpZ2h0JTIwaW4lMjBuaWdodHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
        description :"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid tenetur voluptates rerum iste repel"
    },
{
    img:"https://media.istockphoto.com/id/155359167/photo/workers-working-late-office-windows-by-night.webp?b=1&s=170667a&w=0&k=20&c=VXrMUQNj2Ey9uKh45GXG25v6pVcjzsA5lSkv0HJgCVg=",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid tenetur voluptates rerum iste repel"
},
{
    img:"https://media.istockphoto.com/id/860696690/photo/cityscapes.webp?b=1&s=170667a&w=0&k=20&c=02vlwvliodOf6ZJ--Vf6nMbZkUTx7IymJ-yEW11xvOM=",
    description:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid tenetur voluptates rerum iste repel"
},]
  return (
    <>
    <div className='p-12'>
        <p className='text-5xl text-white'>News and Events</p>
        <div className='mt-12'>
            <div className='conteudo'>
               <div className='carrousel'>
                <article className='card'>
       {
        newsEventObj.map((item)=>(
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img class="rounded-t-lg" src={item.img} alt="" />
            </a>
            <div class="p-5">
                <a href="#">
                    <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.description}</h5>
                </a>
            </div>
            </div>
        
        ))
       }
       </article>
      </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default NewsEvents