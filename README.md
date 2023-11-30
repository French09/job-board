# JobBoard

## Overview 
This job oard project is a web application built using the MERN stack (MongoDB, Express.js, React.js, Node.js). The goal of this project is to provide a platform for employers to post job listings and for job seekers to browse and appply for those listings. This project is made with educationnal purposes in collaboration with julien.laborie@epitech.eu

## Goal:
The goal of this project is to learn about how make CRUDs, create a RESTful API

## Features
- User authentication: Employers and job seekers can create accounts, log in and manage their profiles.
- Job listings: Employers can create, edit, and delete job listing. Job seekers can browse through available job listings, view details, and apply for jobs.
- Application management: Employers can review and manage job applications received for their listings. Job seekers can track the stats of their applications.
- Search and filters: Job seeker can search for jobs based on keywords, location, and other filter to find relevant listings.
- Responsive design: The application is designed to be accessible and user-friendly across various devices, including desktops, tablets, and mobile phones.

## Technologies used
### Frontend:

React.js
Redux (for state management)
Axios (for API requests)
Bootstrap (for styling)
### Backend:

Node.js
Express.js
MongoDB (using Mongoose for ODM)

### Authentication:

JSON Web Tokens (JWT) for secure authentication

# Get started
1. Clone the repo

```bash
git clone git@github.com:French09/job-board.git
cd job-board
```
2. Copy paste this command in your terminal

```bash
cd back-end 

file_name=".env"

content=$(cat <<EOF
NODE_ENV=development
PORT=5100
MONGO_URL=mongodb+srv://<username>:<password>@cluster0.scqyxsw.mongodb.net/<database>?retryWrites=true&w=majority
JWT_SECRET=secret
JWT_EXPIRES_IN=1d
EOF
)

echo "$content" > "$file_name"

```
3. Install packages in both front-end and back-end directory

```bash
cd front-end && npm i && cd ../back-end && npm i
```

4. Run and test the project
```bash
npm run dev  
```