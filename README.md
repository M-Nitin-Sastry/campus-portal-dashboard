# Campus Portal Admin Dashboard
<img width="959" height="535" alt="Screenshot 2025-12-07 191106" src="https://github.com/user-attachments/assets/b5054ec5-05e2-45cd-9e94-3440a6ad122b" />

A full-stack web application to manage campus operations including admissions, placements, and events.

## 🚀 Features
- Manage admissions (KCET, COMEDK, Management)
- Track placements and company details
- Manage cultural events
- Admin dashboard overview

## 🛠 Tech Stack
- Frontend: Angular, HTML, CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Tools: Postman
  
## ⚙️ How to Run
🔹 STEP 1 – Open your project folder
Go to your Desktop.
Open the folder:
👉 campus-portal
Inside you should see:
backend
campus-portal-frontend

🔹 STEP 2 – Start VS Code in the project
Right–click on the campus-portal folder.
Click “Open with Code” (or open VS Code and do File → Open Folder… → select campus-portal).
You should now see both folders (backend, campus-portal-frontend) in the VS Code Explorer.

🔹 STEP 3 – Start MongoDB(You don’t need to open MongoDB Compass unless you want to view data.)
If you installed MongoDB as a Windows service (default), it usually starts automatically.
To be safe:
Press Windows key, type “Services”, open Services app.
Scroll and look for: MongoDB or MongoDB Server.
Make sure its Status = Running.
If not, right-click → Start.

🔹 STEP 4 – Start the Backend Server
In VS Code:
Open a new terminal:
Terminal → New Terminal
Make sure the path at the bottom shows:
C:\Users\Nitin\Desktop\campus-portal>
Go into the backend folder
cd backend
Start the Node backend:
npm run dev
You should see something like:
[nodemon] starting `node server.js`
Server running on http://localhost:4000
MongoDB connected
✅ Leave this terminal running. Do NOT close it.

🔹 STEP 5 – Start the Angular Frontend
Now we open another terminal for the frontend.
In VS Code, click:
Terminal → New Terminal (this opens second terminal).
Make sure path is:
C:\Users\Nitin\Desktop\campus-portal>
Go into the Angular folder:
cd campus-portal-frontend
Run Angular dev server:
ng serve --open
This will compile the Angular app.
When done, it will automatically open your browser at:
👉 http://localhost:4200
If it doesn’t auto-open, just manually type http://localhost:4200 in your browser.

🔹 STEP 6 – Use your app
Now you should be able to:
Login with your admin credentials.
Go to Dashboard.
Navigate to:
Admissions
Placements
Cultural Events
All previous data should still be there in MongoDB (unless you deleted it).
