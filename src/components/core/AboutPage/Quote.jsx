import React from 'react'
import HighlightText from "../HomePage/HighlightText"


export const Quote = () => {
  return (
    <div>
       <p className='text-richblack-100 text-[20px] md:text-[36px] text-center lg:w-[1250px] mx-auto leading-12 mt-16 font-semibold'>
        <sup className='text-richblack-400'>"{" "}</sup>
        We are passionate about revolutionizing the way we learn. Our innovative platform <HighlightText text={"combines technology"} color={"text-gradient"}/>,<HighlightText text={"expertise"} color={"text-gradient-yellow"}/>, and community to<br></br> create an<HighlightText text={"unparalleled educational experience."} color={"text-gradient-yellow"}/>

        <sup className='text-richblack-400'> {" "}"</sup>
        </p>
       
    </div>
  )
}
