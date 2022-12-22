import Star from '../assets/star-solid.svg'
import Star4point0 from '../assets/rating4/star-40.svg'
import Star4point1 from '../assets/rating4/star-41.svg'
import Star4point2 from '../assets/rating4/star-42.svg'
import Star4point3 from '../assets/rating4/star-43.svg'
import Star4point4 from '../assets/rating4/star-44.svg'
import Star4point5 from '../assets/rating4/star-45.svg'
import Star4point6 from '../assets/rating4/star-46.svg'
import Star4point7 from '../assets/rating4/star-47.svg'
import Star4point8 from '../assets/rating4/star-48.svg'
import Star4point9 from '../assets/rating4/star-49.svg'

const data = await fetch(`https://maps.googleapis.com/maps/api/place/details/json?place_id=${import.meta.env.SECRET_PLACE_ID}&fields=user_ratings_total,rating&key=${import.meta.env.SECRET_GOOGLE_MAPS_API_KEY}`)
   .then((response) => response.json())


export default function grating() {
  return (
<>
    
      <div className='flex flex-col'>
      <p className="z-10 text-white text-xl font-title">
        <p className='font-body text-white z-10'>
                {data.result.rating === 4 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point0} alt='star-4-point-0' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.1 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point1} alt='star-4-point-1' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.2 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point2} alt='star-4-point-2' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.3 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point3} alt='star-4-point-3' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.4 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point4} alt='star-4-point-4' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.5 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point5} alt='star-4-point-5' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.6 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point6} alt='star-4-point-6' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.7 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point7} alt='star-4-point-7' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                {data.result.rating === 4.8 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point8} alt='star-4-point-8' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                  {data.result.rating === 4.9 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star4point9} alt='star-4-point-9' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
                  {data.result.rating === 5 ? (
                  <div className='z-10 font-title text-xl text-white flex flex-row gap-x-1'>
                    {data.result.rating}
                    <div className='flex flex-row'>
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                      <img src={Star} alt='star' className='w-4' />
                    </div>
                  </div>
                  ) : <></>}
        </p>
      </p>
      <p className="z-10 text-white text-xs font-body">volgens {data.result.user_ratings_total} reviews</p>               
      </div>
    
</>
  )
} 
   
