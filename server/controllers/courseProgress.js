const mongoose = require("mongoose")
const Section = require("../models/Section")
const SubSection = require("../models/Subsection")
const CourseProgress = require("../models/CourseProgress")
const Course = require("../models/Course")

exports.updateCourseProgress = async(req,res) => {
 
  const {courseId, subsectionId} = req.body;
  // console.log(req.body);
  const userId = req.user.id;
 
  

  try{
      //check if the subsection is valid
      
      const subSection = await SubSection.findById(subsectionId);

      if(!subSection) {
          return res.status(404).json({error:"Invalid SUbSection"});
      }

      // console.log("SubSection Validation Done");

      //check for old entry 
      let courseProgress = await CourseProgress.findOne({
          courseID:courseId,
          userId:userId,
      });
     
      if(!courseProgress) {
          return res.status(404).json({
              success:false,
              message:"Course Progress does not exist"
          });
      }
      else {
          // console.log("Course Progress Validation Done");
          //check for re-completing video/subsection
          if(courseProgress.completedVideos.includes(subsectionId)) {
              return res.status(400).json({
                  error:"Subsection already completed",
              });
          }

          //poush into completed video
          courseProgress.completedVideos.push(subsectionId);
          // console.log("Copurse Progress Push Done");
      }
      await courseProgress.save();
      
      return res.status(200).json({
          success:true,
          message:"Course Progress Updated Successfully",
      })
  }
  catch(error) {
      console.error(error);
      return res.status(400).json({error:"Internal Server Error"});
  }


}


exports.getProgressPercentage = async (req, res) => {
  const { courseId } = req.body
  const userId = req.user.id

  if (!courseId) {
    return res.status(400).json({ error: "Course ID not provided." })
  }

  try {
    // Find the course progress document for the user and course
    let courseProgress = await CourseProgress.findOne({
      courseID: courseId,
      userId: userId,
    })
      .populate({
        path: "courseID",
        populate: {
          path: "courseContent",
        },
      })
      .exec()

    if (!courseProgress) {
      return res
        .status(400)
        .json({ error: "Can not find Course Progress with these IDs." })
    }
    // console.log(courseProgress, userId)
    let lectures = 0
    courseProgress.courseID.courseContent?.forEach((sec) => {
      lectures += sec.subSection.length || 0
    })

    let progressPercentage =
      (courseProgress.completedVideos.length / lectures) * 100

    // To make it up to 2 decimal point
    const multiplier = Math.pow(10, 2)
    progressPercentage =
      Math.round(progressPercentage * multiplier) / multiplier

    return res.status(200).json({
      data: progressPercentage,
      message: "Succesfully fetched Course progress",
    })
  } catch (error) {
    console.error(error)
    return res.status(500).json({ error: "Internal server error" })
  }
}

