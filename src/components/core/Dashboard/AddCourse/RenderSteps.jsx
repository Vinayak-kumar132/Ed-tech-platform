import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { useSelector } from 'react-redux'
import CourseBuilderForm from './CourseBuilder/CourseBuilderForm';
import CourseInformationForm from "./CourseInformation/CourseInformationForm"

const RenderSteps = () => {

    const { step } = useSelector((state) => state.course);

    const steps = [
        {
            id: 1,
            title: "Course Information",
        },
        {
            id: 2,
            title: "Course Builder",
        },
        {
            id: 3,
            title: "Publish",
        },
    ]

    return (
        <> 
          <div className='flex flex-col place-items-center'> 
            <div className='flex place-items-center'>
                {steps.map((item,index) => (
                    <>
                        <div key={item.id}>
                            <div className={`${step >= item.id
                                ? "bg-yellow-900 border-yellow-50 text-yellow-50"
                                : "border-richblack-700 bg-richblack-800 text-richblack-300"} 
                               
                                rounded-full w-[45px] h-[45px] flex justify-center items-center`}>

                                {
                                    step > item.id ? (<FaCheck />) : (item.id)
                                }

                            </div>
                        </div>
                        <div>
                            {index < steps.length - 1 && (
                                <div className="h-0 w-32 border-dashed border-b-2 border-gray-100 mx-2"></div>
                            )}
                        </div>

                    </>
                ))}
            </div>
            <div className='flex gap-20 -ml-8 mb-6'>
                {steps.map((item) => (
                    <>
                        <div key={item.id}>
                            <p>{item.title}</p>
                        </div>
                    </>
                ))}
            </div>
        </div>
            {step === 1 && <CourseInformationForm />} 
            {step === 2 && <CourseBuilderForm />}
            {/* {step===3 && <PublishCourse/>} */}
        </>
    )
}

export default RenderSteps
