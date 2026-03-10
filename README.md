⚡ Async Task Pipeline Simulator

A visual simulator that demonstrates **sequential asynchronous task execution** using **JavaScript Promises and async/await**.

The project displays how multiple tasks can run one after another while providing **real-time UI updates, logs, and progress visualization**.

---

# 🚀 Features

- Sequential execution of asynchronous tasks
- Real-time task status updates
- Animated progress bar
- Terminal-style execution logs
- Matrix-style animated background
- Reset functionality to rerun tasks
- Modern glassmorphism UI

---

# 🛠 Technologies Used

- **HTML5** – Structure of the dashboard
- **CSS3** – Styling, animations, and layout
- **JavaScript (ES6)** – Promises, async/await, DOM manipulation
- **Canvas API** – Matrix-style animated background

---

# ⚙️ How It Works

The application simulates a **task execution pipeline**:


Task 1 → Task 2 → Task 3


Each task is implemented using a **JavaScript Promise**.

The `runSequentially()` function ensures tasks run **one after another** using `async/await`.

Execution Flow:


User Clicks Run
↓
runSequentially()
↓
Execute Task 1
↓
Execute Task 2
↓
Execute Task 3
↓
Update Progress + Logs
↓
Display Final Results


---

# 📊 Interface Components

The UI includes:

- **Task Pipeline Graph** – visual representation of task order
- **Progress Bar** – shows task completion percentage
- **Task Status Panel** – Pending / Running / Completed
- **Terminal Log** – real-time execution messages
- **Final Results Section**

---

# 🎨 UI Design

The interface uses a **futuristic design** with:

- Neon glowing elements
- Glassmorphism container
- Matrix-style animated background
- Interactive button effects

---
📂 Project Structure


project-folder
│
├── index.html
├── style.css
├── script.js
└── README.md


---

# ▶️ How to Run the Project

1. Clone the repository


git clone https://github.com/your-username/repository-name.git


2. Open the project folder

3. Run the project by opening:


index.html


in your browser.

---

# 🎯 Learning Objectives

This project demonstrates:

- JavaScript **Promises**
- **Async / Await**
- Sequential task execution
- DOM manipulation
- Canvas animations
- Interactive UI design

---

# 📌 Future Improvements

Possible enhancements:

- Dynamic task creation
- Error simulation for failed tasks
- Adjustable execution time
- Real API integration
- Dark/Light theme toggle

---

# 📜 License

This project is open-source and available for learning and educational purposes.
