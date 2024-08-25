import React from 'react'

const Stat=[
    {count:"5K",label:"Active Students"},
    {count:"10+",label:"Mentors"},
    {count:"200+",label:"Active Courses"},
    {count:"50+",label:"Awards"},

];

const Stats = () => {
  return (
    <div>
       <div className='flex  justify-center items-center h-[254px] text-richblack-50'>
        {
            Stat.map((data,index)=>{
                return(
                    <div className='flex flex-col gap-[12px] text-center w-[292px]' key={index}>
                        <h1 className='font-extrabold text-3xl'>
                            {data.count}
                        </h1>
                        <h2 className='text-richblack-300 font-medium'>
                            {data.label}
                        </h2>
                    </div>
                )
            })
        }
       </div>
    </div>
  )
}

export default Stats