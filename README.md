# golink-platform


Project Overview
The Go Link platform was developed to create an inclusive job-matching platform that empowers individuals across Africa, especially young people and those from diverse backgrounds, by bridging employment gaps, offering skills training, and fostering economic independence through accessible technology such as:
Browsing career advice.
Skills Development
Complete mentoring
Job searching skills programs




Technical Documentation
System Architecture
The architecture of the system follows a typical client-server model, where the frontend (client) interacts with the backend (server) through a REST API for data retrieval and manipulation.
Frontend (Client-side):
Built using HTML , CSS ,JAVASCRIPT .

The frontend communicates with the backend using the fetch method for the request 
   Backend (Server-side):
The backend is built using Node.js with Express.js for routing and handling API requests.
MongoDB is used as the database to store and retrieve.
JWT (JSON Web Tokens) are used for user authentication .
The backend exposes API endpoints for various operations.




Technical Specifications
Frontend:
fetch method  - To handle HTTP requests and interact with the backend.
HTML, CSS, and JAVASCRIPT

Backend:
Node.js - JavaScript runtime for the server-side logic.
Express.js - Framework for building RESTful APIs.
MongoDB - NoSQL database 

JWT (JSON Web Tokens) - For secure user authentication.


Dependencies:
Jsonwebtoken: for authentication and authorization
Bcrypt for password hashing
express-validator: for validating the requests



API Documentation
User Authentication API

- POST /api/user/register Description: Registers a new user.
Response Format: Json

- POST /api/user/login

Description: login to our platform
  Request Format: { "username": "string", "password": "string" }
  Response Format: json
Order API

- GET /api/jobs
 Description: viewing job.   Response Format: json


User/Client-Facing Materials
User Manual

Logging In / Registering:
Login: Click on the "Login" button, enter your email and password, and submit.

Sign Up: Click on "sign up", and fill data in the fields  then submit.
Booking appointment:
Choose a Mentor/Advisor, Choose a Date, Choose a Time, Your Email, Additional Notes (Optional)
Find your mentor:
Go to the dashboard and check the right mentor to assist you in your mentorship program
Viewing Jobs:
Go find job navbar  feature and you will find the job that’s perfect for you.

Setup Instructions

visit  https://fniyonshuti.github.io/golink-platform/index.html

For localhost setup:

Clone the Repository:
                git clone   https://fniyonshuti.github.io/golink-platform.git


Install Backend Dependencies:

Navigate to the backend directory and install dependencies

Set Up Environment Variables:
Create a .env file in the root of the backend directory.

Add necessary variables like:

Run the Backend:




Run the backend:

Access the Application:
The application should now be running locally. Access it in your browser at
http://localhost:3001.

Code Quality and GitHub Repository Management
        https://github.com/fniyonshuti/golink-platform.git
Team Roles and Participation
The project was executed collaboratively, with each team member contributing effectively:
Davy RUHUMULIZA NGAMIJE : Prepared design guidelines, and helped on the back end
Fred Niyonshuti : Worked on the front end and on the back end of the platform
Leila Musoni Teta : Worked on the front-end of our platform
Queen Wihogora: Coordinated and integrated client feedback
UWINEZA Pacifique: Worked on the project overview, platform design and the presentation slides



Additional Information

Project Stages

Planning and Requirement Gathering
Activities:
Conducted initial meetings with the group members to put our ideas together to finish the website .
Created a Trello board to organize and track tasks and milestones effectively.

UI/UX Design
Activities:
Designed high-fidelity wireframes and prototypes using Figma, focusing on clean, minimalistic aesthetics aligned with fashion trends.
Developed a style guide that included color schemes, typography, and reusable components to maintain design consistency.
Ensured the design adhered to mobile-first principles, optimizing usability across devices.
Front-End Development
Activities:
Implemented a fully responsive front-end interface using html ,css,javascript 
Developed key features such as the landing page, job  listing page, and responsive navigation bar.

Back-End Development
Activities:
Set up RESTful API endpoints to support key functionalities such as user authentication, product retrieval, and order management.
Integrated MongoDB as the primary database, ensuring efficient and scalable data storage.
Documented the API for seamless interaction between the front-end and back-end components.
Integration and Testing
Activities:
Connected the front-end and back-end to enable seamless API interactions and tested functionality across critical workflows.

Developed and executed test cases using Jest and Postman to validate system performance and ensure reliability.



Challenges and Solutions
Availability 
Coordinating across team members with varying availability due to differing schedules or commitments, impacted the pace of development and required flexible planning.
Limited skills
Addressing differences in team members' expertise, as limited skills in certain areas, such as technical tools or platform development, posed challenges and required additional learning and collaboration.
Data collection and validation
Gathering accurate, reliable job market data was challenging and required careful verification to ensure trust and relevance for users. We sourced data from trusted partners and cross-checked it regularly to make sure the job listings were accurate and relevant for users.

Future Work and Lessons Learned
Future Enhancements
Introduce advanced search filters and personalized recommendation systems.
Optimize API performance for enhanced scalability.
Develop a mobile application to complement the web platform.

Lessons Learned
Allocate more buffer time for unexpected revisions and iterations.
Streamline the API testing process to reduce integration delays.
Establish consistent feedback cycles to foster strong client relationships.

