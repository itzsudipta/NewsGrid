# 🗞️ NewsGrid

NewsGrid is a modern and interactive web application that allows users to browse the latest news articles by country and category. Powered by the [GNews API](https://gnews.io/), this project provides a sleek and responsive design with animated backgrounds and dynamic content.

---

## 🌟 Features

- 🌍 **Country-Based News**: Select your country to view relevant news.
- 📰 **Category Filtering**: Choose from categories like Technology, Sports, Business, and more.
- 🎨 **Interactive Design**: Includes animated backgrounds and hover effects for a modern look.
- ⚡ **Dynamic Content**: News articles are fetched in real-time using the GNews API.
- 💻 **Responsive Layout**: Fully optimized for desktop and mobile devices.
- ✨ **Footer Credit**: Developed by **Sudipta Sarkar**.

---

## 🚀 Demo

![Homepage Screenshot](Frontend%20view.png)

---

## 🛠️ Technologies Used

| Technology       | Purpose                                   |
|-------------------|-------------------------------------------|
| **HTML5**         | Structuring the web page                 |
| **CSS3**          | Styling and animations                   |
| **JavaScript (ES6)** | Dynamic content and API integration     |
| **GNews API**     | Fetching real-time news articles         |
| **Postman**       | Testing API requests and debugging       |

---

## 🔑 API Integration

1. Sign up at [GNews](https://gnews.io/) and get your API key.
2. Replace the placeholder API key in `script.js`:
   ```javascript
   const API_KEY = "your-api-key-here";
2. You may test the API with Postman before integration to ensure it works as expected:
   ```javascript
   const url = `https://gnews.io/api/v4/top-headlines?country=${country}&topic=${category}&token=${API_KEY}`;

---

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/itzsudipta/NewsGrid.git