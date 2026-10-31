# Assignment 6 – Student Records REST API

**Student:** Rohan Reshi | **PRN:** 202401040034 | **Course:** Web Technology (2304362L)

## Overview
RESTful CRUD API using Node.js, Express, MongoDB and Mongoose. All requests and responses use JSON.

## Setup
1. Install Node.js 18+ and MongoDB Atlas.
2. Run `npm install`.
3. Copy `.env.example` to `.env`.
4. Put your own MongoDB connection string in `MONGODB_URI` in `.env`. Never commit `.env`.
5. Run `npm run dev` or `npm start`. Default URL: `http://localhost:3000`.
6. Test `GET /health`.

## Endpoints
| Method | Endpoint | Purpose |
|---|---|---|
| POST | `/api/students` | Create student (201) |
| GET | `/api/students` | Get all students (200) |
| GET | `/api/students/:id` | Get student by ID (200/400/404) |
| PUT | `/api/students/:id` | Update student (200/400/404) |
| DELETE | `/api/students/:id` | Delete student (200/400/404) |

Validation: name 2–60 characters; valid email; 12-digit PRN; 10-digit mobile starting 6–9; course is B.Tech, M.Tech, BCA or MCA. Email and PRN are unique. Invalid input returns 400; missing records return 404; unexpected errors return 500.

## Example JSON
```json
{"name":"Aarav Mehta","email":"aarav@example.com","prn":"202401040021","mobile":"9876543210","course":"B.Tech"}
```

## Postman
Import `postman/Student_Records_API.postman_collection.json`. Set `baseUrl` to localhost or the deployed URL. Create a record first, then copy `data._id` from the response into the `studentId` variable for ID-based requests.

## Render deployment
Push to GitHub; create a Render Web Service; build command `npm install`; start command `npm start`; set `MONGODB_URI` in Render environment variables. Add your actual deployed URL here after deployment.

**Deployment URL:** Pending deployment.  
**Testing:** Run all requests in Postman and add real screenshots to the report before submission.

`node_modules` and `.env` are excluded from the source ZIP.
