# NodeForge

A Node.js and Express practice project focused on building a simple REST API with input validation, controller-service separation, and error handling.

## Features

- Express server with JSON request parsing
- Modular routing with Express Router
- Job input validation
- Controller and service layer separation
- Error handling for malformed JSON
- JSON responses and HTTP status codes

## Requirements

- Node.js
- npm

## Getting Started

Clone the repository:

```bash
git clone https://github.com/raha-mohebbi/NodeForge.git
cd NodeForge
npm install
npm start
```

The server runs at `http://localhost:5000`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | `/` | Returns the welcome message |
| GET | `/about` | Returns the about response |
| POST | `/jobs` | Validates a job and returns it |
| Any unmatched route | — | Returns a 404 response |

## Create a Job

**Request:** `POST /jobs`

Content type: `application/json`

Example request body:

```json
{
  "name": "Backend Developer",
  "priority": "high"
}
```

Valid priority values are `low`, `medium`, and `high`.

Successful requests return the submitted job. Invalid input returns HTTP `400` with an error message.

## Project Structure

```text
src/
  Jobs.js
  jobsService.js
  messages.js
  routes.js
  server.js
  controllers/
    jobsController.js
```

## Current Scope

This is a learning project. Jobs are validated and returned in the response, but they are not stored in a database.

Automated tests have not been implemented yet.