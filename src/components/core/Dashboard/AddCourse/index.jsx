import RenderSteps from "./RenderSteps"
import { BsFillLightningChargeFill } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
// import { useSelector } from "react-redux"


export default function AddCourse() {
// const { step } = useSelector((state) => state.course)

    return (
        <>
            <div className="text-white flex gap-5 ml-28">
                <div>
                    <h1>Add Course</h1>
                    <div>
                        <RenderSteps />
                    </div>
                </div>

                <div className="bg-richblack-800 h-fit  p-6 rounded-xl border border-pure-greys-700 sticky right-10 ">
                {/* <div
                    className={`bg-richblack-800 h-fit p-6 rounded-xl border border-pure-greys-700 ${
                        step === 3 ? "hidden" : "sticky right-10"
                    }`}
                > */}

                    <div className="text-yellow-100 flex place-items-center gap-1 mb-3"><BsFillLightningChargeFill /><p className="text-white font-bold">Course Upload Tips</p></div>
                    
                    <ul className="text-sm gap-2 flex flex-col text-richblack-25">
                        <li className="flex place-items-center gap-1"><RxDotFilled />Set the Course Price option or make it free.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Standard size for the course thumbnail is 1024x576.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Video section controls the course overview video.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Set the Course Price option or make it free.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Standard size for the course thumbnail is 1024x576.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Video section controls the course overview video.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Set the Course Price option or make it free.</li>
                        <li className="flex place-items-center gap-1"><RxDotFilled />Standard size for the course thumbnail is 1024x576.</li>
                    </ul>
                </div>
                
            </div>
        </>
    )
}