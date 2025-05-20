
# 🧑‍💼 Mini Job Board Application

A full-stack job board platform built using the MERN stack — React + TailwindCSS for the frontend, and Node.js + Express + MongoDB for the backend. Users can browse job listings, employers can post jobs.

---

## 📂 Project Structure

```
mini-job-board/
├── client/              # React + Tailwind Frontend
├── server/              # Node.js + Express + MongoDB Backend
├── README.md
└── .gitignore
```

---

## 🚀 Tech Stack

### Frontend
- React.js
- Tailwind CSS
- React Router
- Fetch API

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS for cross-origin requests

---

## 📦 Installation & Running Locally

### 1. Clone the Repository
```bash
git clone https://github.com/ankitcoder11/mini-job-board-application
cd mini-job-board-application
```

### 2. Setup the Backend
```bash
cd server
npm install
```

Create a `.env` file inside `/server` with:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

Start backend server:
```bash
npm run dev
```

---

### 3. Setup the Frontend
```bash
cd ../client
npm install
```

Create a `.env` file inside `/client` with:
```
VITE_API_URL=http://localhost:5000
```

Start frontend:
```bash
npm run dev
```

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 🙋‍♂️ Contact

Created by [Ankit Choudhary](mailto:ankitakcp@gmail.com) — feel free to reach out for collaboration or suggestions!
