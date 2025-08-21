# Holiday Calendar Backend

This is a simple Node.js backend for managing holidays, built with Express and SQLite.

## Project Overview
- **Tech stack:** Node.js, Express, SQLite
- **Endpoints:**
  - `GET /holidays` — List all holidays
  - `POST /holidays` — Add a new holiday (JSON body: `{ "date": "YYYY-MM-DD", "name": "Holiday Name" }`)
  - `DELETE /holidays/:id` — Delete a holiday by ID
  - `GET /` — Health check (returns a simple message)

## Deployment
This project is deployed on Render.com:

**Live API URL:**
[https://holiday-calendar-backend.onrender.com](https://holiday-calendar-backend.onrender.com)

## How to Interact
You can use tools like [Postman](https://www.postman.com/) or `curl` to interact with the API.

### Example Requests

#### Get all holidays
```bash
curl --location 'https://holiday-calendar-backend.onrender.com/holidays'
```

#### Add a holiday
```bash
curl --location --request POST 'https://holiday-calendar-backend.onrender.com/holidays' \
--header 'Content-Type: application/json' \
--data '{"date": "2025-12-25", "name": "Christmas"}'
```

#### Delete a holiday
```bash
curl --location --request DELETE 'https://holiday-calendar-backend.onrender.com/holidays/1'
```

## Local Development
1. Clone the repo:
   ```bash
   git clone https://github.com/FabioFi/holiday-calendar-backend.git
   cd holiday-calendar-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. The API will be available at `http://localhost:3000` by default.

## Notes
- The database is a local SQLite file (`holidays.db`). On Render, data is not persistent between deploys.
- For production use, consider switching to a cloud database for persistence.

---
Created by FabioFi
