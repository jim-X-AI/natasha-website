# Tasha's Collection 👗✨

**Tasha's Collection** is a modern fashion and beauty e-commerce platform built to showcase and sell products online with a seamless and visually appealing user experience. This full-stack application blends React for the frontend with a Python Flask backend, offering scalability and responsiveness across all devices.

---

### 🌟 Overview

The platform is designed for fashion lovers and boutique business owners who want to bring their collections online. It features a stylish interface, product showcase, cart functionality, and a solid backend structure for future enhancements like payments and admin dashboards.

---

### 🚀 Features

- 🛝️ **Product Listings** – Displays fashion and beauty items dynamically from a backend database.
- 🎨 **Modern UI/UX** – Built with React and Tailwind CSS, following a minimalist and brand-conscious design system.
- 🧾 **Cart Functionality** – Add items to the cart (future enhancements may include checkout and payment).
- 💛 **Brand Theme** – Uses golden yellow `#FCC200` as primary, soft pink/teal as secondary, with Montserrat and Poppins fonts.
- 📦 **RESTful API** – Python Flask-based backend for managing data and products.
- 🔐 **Structured Codebase** – Frontend and backend organized into clean, reusable modules.

---

### 🛠 Technologies Used

#### Frontend:
- React.js
- Tailwind CSS
- JavaScript (ES6+)
- Vite (React boilerplate)

#### Backend:
- Python 3.x
- Flask
- SQLite3 (via `schema.sql`)

#### Others:
- Git & GitHub
- REST API design
- LocalStorage (for cart functionality)

---

### 📁 Project Structure

```
natasha-website/
├── tashas-collection/
│   ├── client/            # Frontend codebase
│   │   ├── public/        # Static files
│   │   └── src/
│   │       ├── assets/    # Images and branding
│   │       ├── components/# Reusable React components
│   │       ├── context/   # Global state (e.g. cart context)
│   │       └── App.jsx    # Main app entry
│   ├── server/            # Backend (Flask)
│   │   ├── app.py         # Flask app
│   │   ├── schema.sql     # SQLite database schema
│   │   └── requirements.txt # Backend dependencies
```

---

### 💡 Goals of the Project

- Provide a platform for showcasing African-inspired fashion and beauty products.
- Empower small businesses to go digital with a modern, affordable solution.
- Build a scalable base for future features like payments, authentication, and dashboards.

---

### 🤝 Contributing

We welcome contributors! If you'd like to help improve the app:

1. Fork the repository
2. Create your branch (`git checkout -b feature-name`)
3. Commit your changes
4. Push to your branch (`git push origin feature-name`)
5. Submit a pull request

Feel free to open issues for bugs, suggestions, or design ideas.

---

### 📄 License

This project is open-source and available under the [MIT License](LICENSE).

---

### 👨‍💻 Developer && 💬 Contact

_Abdulazeez Jamiu Oladipupo_ — Passionate about using AI and technology to revolutionize Africa by building powerful, affordable digital solutions that empower businesses and inspire the next generation.

- **Email**: [jamiuabdulazeez689@gmail.com](mailto:jamiuabdulazeez689@gmail.com)  
- **X (Twitter)**: [@JamiuOladi55000](https://x.com/JamiuOladi55000)

---

### ✅ To Run the Project Locally

#### 1. Frontend
```bash
cd tashas-collection/client
npm install
npm run dev
```

#### 2. Backend
```bash
cd tashas-collection/server
pip install -r requirements.txt
python app.py
```

