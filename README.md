# 🤖 Virtual Assistant  

> A full-stack **MERN Virtual Assistant** web application that can chat with users, take voice input, and generate smart responses in real-time.

![React](https://img.shields.io/badge/Frontend-React.js-61DBFB?style=flat&logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-3C873A?style=flat&logo=node.js)
![Express.js](https://img.shields.io/badge/Framework-Express.js-000000?style=flat&logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-4DB33D?style=flat&logo=mongodb)
![License](https://img.shields.io/badge/License-MIT-blue?style=flat)
![Status](https://img.shields.io/badge/Status-Active-success?style=flat)

---

## 🧩 Project Overview  

This project is a **Virtual Assistant web app** built using the **MERN stack** with some AI features added on top.

The idea was to create a simple assistant that can:
- Chat with users like a normal messaging app  
- Give intelligent replies  
- Take voice input  
- Store all conversations  

While building this, I focused on understanding how **frontend, backend, database, and APIs work together in one complete project**.

---

## ⚙️ How the Application Works  

- User enters a message or speaks using mic  
- React frontend captures the input  
- Input is sent to backend using API  
- Backend (Node + Express):
  - Receives request  
  - Processes message  
  - Sends it to AI (OpenAI or custom logic)  
- AI generates response  
- Chat is saved in MongoDB  
- Response is sent back to frontend  
- UI updates instantly and shows reply  

---

## ✨ Features  

- 💬 **Real-time Chat**  
  Simple chat interface where messages appear instantly without refreshing  

- 🤖 **Smart Replies**  
  Uses OpenAI API or basic logic to generate responses  

- 🎤 **Voice Input Support**  
  User can speak using mic (Web Speech API converts speech to text)  

- 🗄️ **Chat History Storage**  
  All conversations are stored in MongoDB and can be fetched later  

- 🌐 **REST API Integration**  
  Proper APIs for communication between frontend and backend  

- 🎨 **Clean UI Design**  
  Built using React with Tailwind CSS / Material UI  

---

## 🛠️ Tech Stack  

| Layer | Technology |
|-------|------------|
| **Frontend** | React.js, Tailwind CSS / Material UI |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **AI (Optional)** | OpenAI API / Custom logic |
| **Voice Feature** | Web Speech API |
| **Version Control** | Git & GitHub |

---

## 💡 What I Implemented  

- Built a complete **frontend using React**  
- Designed chat UI with dynamic message rendering  
- Created **REST APIs using Express.js**  
- Connected frontend with backend using API calls  
- Stored chat data in **MongoDB database**  
- Integrated **AI response system**  
- Added **voice input feature**  
- Structured project in modular way for scalability  

---

## ⚙️ API Endpoints  

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/chat` | Send message and receive AI response |
| `GET` | `/api/history` | Fetch all chat history |
| `DELETE` | `/api/history/:id` | Delete a specific chat |

---

## 📂 Project Structure

```text
/client
├── components
├── pages
├── services
└── App.js

/server
├── routes
├── controllers
├── models
├── config
└── server.js
```
---

## 📚 What I Learned  

- How to build a full-stack application  
- How frontend and backend communicate using APIs  
- How to use MongoDB for storing data  
- How to integrate AI into a real project  
- How to handle user input (text + voice)  

---

## 🧑‍💻 Author  

**Parth Sharma**  
🎓 B.Tech CSE @ Galgotias University  
💻 MERN Stack Developer | Learning AI/ML  

---

## ⭐ Support  

If you like this project, give it a ⭐ on GitHub  

> “Keep building, keep learning.” 🚀
