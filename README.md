# 🏡 Airbnb Clone

A beginner-friendly Airbnb-inspired web application built using **Node.js, Express.js, EJS, and Tailwind CSS**. This project provides a simple platform for exploring property listings and adding new properties through a host form.

> **Project Status:** This is an early-stage learning project. Property data is currently stored in a local JSON file. Database integration, authentication, and booking management are planned for future development.

---

## ✨ Features

### Currently Implemented

- 🏠 **Home Page:** Displays the available property listings.
- 🔍 **Browse Properties:** View property details such as name, location, price, rating, and description.
- ❤️ **Favourites Page:** Displays property data using a favourites-style page.
- 📋 **My Bookings Page:** Provides a placeholder page for future booking functionality.
- ➕ **Add Property:** Hosts can submit new property details through a form.
- 💾 **Local JSON Storage:** Property information is stored in `data/homes.json`.
- 🎨 **Responsive UI:** Styled using Tailwind CSS utility classes.
- 🧩 **Reusable Components:** Shared EJS partials for navigation and document head.

### Not Yet Implemented

- User and host authentication.
- Database-backed property storage.
- Actual booking and reservation functionality.
- Persistent favourites management.
- Edit and delete property functionality.
- Separate user and host dashboards.

---

## 🧰 Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | JavaScript runtime environment |
| Express.js | Backend framework and route handling |
| EJS | Dynamic server-side HTML rendering |
| Tailwind CSS | Styling and responsive UI |
| HTML | Structure of web pages |
| JavaScript | Application logic |
| JSON | Local property data storage |
| Nodemon | Automatic server restarting during development |

---

## 📁 Project Structure

```text
airbnb/
│
├── controllers/
│   ├── errors.js
│   ├── hostController.js
│   └── storeController.js
│
├── data/
│   └── homes.json
│
├── models/
│   └── home.js
│
├── public/
│   ├── images/
│   ├── home.css
│   └── output.css
│
├── routes/
│   ├── hostRouter.js
│   └── storeRouter.js
│
├── src/
│   └── input.css
│
├── utils/
│   └── pathUtil.js
│
├── views/
│   ├── partials/
│   │   ├── head.ejs
│   │   └── nav.ejs
│   │
│   ├── host/
│   │   ├── addHome.ejs
│   │   ├── homeAdded.ejs
│   │   ├── host-home-list.ejs
│   │   └── edit-home.ejs
│   │
│   ├── store/
│   │   ├── index-list.ejs
│   │   ├── home-list.ejs
│   │   ├── favourite-list.ejs
│   │   ├── mybookings.ejs
│   │   ├── home-detail.ejs
│   │   └── reserve.ejs
│   │
│   └── 404.ejs
│
├── app.js
├── package.json
├── package-lock.json
└── nodemon.json

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)
- Git (optional)

### 1. Clone the Repository
```bash
git clone <your-repository-url>
cd airbnb
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Install Nodemon (If Required)
```bash
npm install --save-dev nodemon
```

### 4. Start the Application
```bash
npm start
```

### 5. Open in Browser
```text
http://localhost:3000
```

Your Airbnb Clone application should now be running locally! 🎉

---

## 🛣️ Available Routes

| HTTP Method | Route | Description |
|---|---|---|
| GET | `/` | Displays the home page |
| GET | `/homes` | Displays available property listings |
| GET | `/favourites` | Displays the favourites-style page |
| GET | `/mybookings` | Displays the My Bookings placeholder page |
| GET | `/host/add-home` | Displays the property submission form |
| POST | `/host/add-home` | Processes and saves a new property listing |

### Additional Route Handling
- Unmatched routes are handled by the 404 error controller.
- Property submissions are saved in the local JSON file.
- Reserve/Book buttons are not yet connected to a functional booking system.

---

## 🏗️ Project Architecture – MVC Pattern

This project follows the **Model-View-Controller (MVC)** architectural pattern.

MVC separates the application into three main components, making the code easier to manage, understand, and maintain.

### 1. Model
**Location:** `models/`

The Model manages application data and data-related operations.
- `home.js` defines the Home model.
- `fetchAll()` retrieves property information.
- `save()` stores new property information in `homes.json`.

### 2. View
**Location:** `views/`

The View represents the user interface of the application.
- EJS templates generate dynamic HTML pages.
- Shared partials reduce code duplication.
- Separate folders organize host and store pages.

### 3. Controller
**Location:** `controllers/`

The Controller handles incoming requests and coordinates between the Model and View.
- `storeController.js` handles home, listings, favourites, and bookings pages.
- `hostController.js` handles property submission.
- `errors.js` handles invalid routes.

### MVC Workflow
```text
        User Request
             |
             v
        Express Routes
             |
             v
         Controller
          /     \\
         v       v
       Model    View
         |       |
         v       v
     homes.json  EJS
                 |
                 v
           HTML Response
                 |
                 v
              Browser
```

---

## 🚀 Future Improvements

The following features are planned and are **not currently implemented**.

- [ ] **MongoDB Integration:** Replace JSON file storage with MongoDB.
- [ ] **User Authentication and Authorization:** Implement secure registration, login, and logout.
- [ ] **Host Authentication and Authorization:** Allow hosts to create and manage accounts.
- [ ] **Role-Based Access Control:** Provide different permissions for users and hosts.
- [ ] **Booking and Reservation Management:** Allow users to book properties and manage reservations.
- [ ] **Host Listing Management:** Enable hosts to add, edit, and delete property listings.
- [ ] **Separate Dashboards:** Create dedicated dashboards for users and hosts.
- [ ] **Favourites Management:** Allow users to save and remove favourite properties.
- [ ] **Improved Validation:** Implement proper form validation and error handling.

---

## 🎯 Learning Objectives

Through this project, I aim to gain practical experience in:
- Understanding backend development using Node.js.
- Building web applications using Express.js.
- Implementing the MVC architectural pattern.
- Creating dynamic web pages using EJS.
- Handling HTTP requests and responses.
- Working with Express routing and middleware.
- Handling HTML form submissions.
- Performing file operations using Node.js.
- Understanding basic data persistence using JSON.
- Designing responsive interfaces using Tailwind CSS.
- Organizing scalable and maintainable project structures.

---

## 👨‍💻 Author

**Nilabh Madhaw Mishra**

---

⭐ If you find this project interesting, consider giving the repository a star!

**Thank you for visiting my Airbnb Clone project!**
