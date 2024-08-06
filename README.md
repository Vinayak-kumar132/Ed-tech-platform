# StudyNotion

## Overview

**StudyNotion** is a comprehensive ed-tech platform designed to provide an engaging and interactive learning experience. It enables users to create, consume, and rate educational content. Built with the MERN stack (MongoDB, ExpressJS, ReactJS, and NodeJS), StudyNotion aims to make education more accessible and engaging while offering instructors a global platform to showcase their expertise.

## Table of Contents

1. System Architecture
2. Front-end
3. Back-end
4. API Design
5. Deployment


## System Architecture

The StudyNotion platform is designed using a client-server architecture consisting of:

- **Front-end**: ReactJS
- **Back-end**: NodeJS and ExpressJS
- **Database**: MongoDB

The architecture follows a monolithic design where all application modules are combined into a single codebase, providing better control, security, and performance.


## Front-end

The front-end is developed using ReactJS, providing a dynamic and responsive user interface. Key features and pages include:

### For Students

- **Homepage**: Introduction to the platform with links to courses and user details.
- **Course List**: List of available courses with descriptions and ratings.
- **Wishlist**: Display of courses added to the wishlist.
- **Cart Checkout**: Course purchase and checkout functionality.
- **Course Content**: Detailed view of course content.
- **User Details**: Student account details.
- **User Edit Details**: Edit student account details.

### For Instructors

- **Dashboard**: Overview of courses, ratings, and feedback.
- **Insights**: Detailed metrics of instructor’s courses.
- **Course Management**: Create, update, and delete courses.
- **Profile Management**: View and edit instructor profile details.

### For Admin (Future Scope)

- **Dashboard**: Overview of courses, instructors, and students.
- **Insights**: Platform metrics including user and revenue statistics.
- **Instructor Management**: Manage instructor accounts and courses.
- **Additional Pages**: User and course management.

The front-end is styled using CSS and Tailwind and state management is handled with Redux. Development is done using VSCode.

## Back-end

The back-end uses NodeJS, ExpressJS, and MongoDB. Key features include:

- **User Authentication and Authorization**: Sign-up, login, OTP verification, and password reset.
- **Course Management**: CRUD operations for courses and media management.
- **Payment Integration**: Razorpay for course purchases.
- **Cloud-based Media Management**: Cloudinary for media storage.
- **Markdown Formatting**: Markdown for course content.

### Frameworks, Libraries, and Tools

- **Node.js**: Primary backend framework.
- **MongoDB**: Data storage.
- **Express.js**: Web application framework.
- **JWT**: Authentication and authorization.
- **Bcrypt**: Password hashing.
- **Mongoose**: ODM for MongoDB.

### Data Models and Database Schema

- **Student Schema**: Details such as name, email, and course information.
- **Instructor Schema**: Details including name, email, and courses.
- **Course Schema**: Includes course name, description, and media content.

## API Design

The API is designed using REST principles with JSON for data exchange. 

### Sample Endpoints

- **POST /api/auth/signup**: Create a new user account.
- **POST /api/auth/login**: Log in and get a JWT token.
- **GET /api/courses**: Retrieve all courses.
- **POST /api/courses**: Create a new course.
- **PUT /api/courses/:id**: Update a course by ID.
- **DELETE /api/courses/:id**: Delete a course by ID.

Sample API requests and responses are documented for reference.

## Deployment

- **Front-end**: Deployed on Vercel.
- **Back-end**: Hosted on Render or Railway.
- **Media Files**: Managed with Cloudinary.
- **Database**: Hosted on MongoDB Atlas.

## Future Enhancements

1. **Gamification Features**: Badges, points, and leaderboards.
2. **Personalized Learning Paths**: Custom learning paths for students.
3. **Social Learning Features**: Group discussions and peer feedback.
4. **Mobile App**: Native mobile application.
5. **Machine Learning Recommendations**: Personalized course suggestions.
6. **VR/AR Integration**: Virtual and augmented reality components.

## Conclusion

StudyNotion is a robust ed-tech platform that leverages the MERN stack and RESTful API design to deliver an immersive learning experience. The deployment is optimized for scalability and reliability, and future enhancements aim to further improve the platform’s functionality and user engagement.


<!-- For more information, visit the [project repository](url). -->

