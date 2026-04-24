
# 🌿 La Cosmetica Frontend Application

## 📌 Project Context

Following the success of the **La Cosmetica API V2**, this project aims to build a modern frontend application that allows users to easily browse, manage, and track their cosmetic products and orders.

The application will be developed using modern frontend technologies such as **Vue.js, React.js, or Vanilla JavaScript**, ensuring a smooth, responsive, and user-friendly experience.

---

## 🎯 Main Objective

Build an intuitive frontend application that integrates with the **La Cosmetica V2 API**, enabling users to:

* Browse cosmetic products
* Place and track orders
* Manage authentication securely via JWT
* Provide admin and employee functionalities

---

## 👤 User Stories

### 🔐 Authentication

* Users can register and log in using JWT authentication.

### 🧴 Products

* Users can view all available products (name, description, price, images, category).
* Users can view product details using a slug:

  ```
  /api/products/cream-hydratante-bio
  ```

### 🧺 Orders

* Users can place orders using product slugs and quantities.
* Users can track order status:

  * Pending
  * In preparation
  * Delivered
* Users can cancel orders before preparation starts.

### 🪪 Employee Features

* Employees can log in and manage orders based on permissions.
* Employees can mark orders as prepared.

### 📊 Admin Features

* Admins can:

  * Manage products and categories (CRUD)
  * View sales statistics
  * Analyze product popularity and category distribution (Laravel Query Builder)

### 🌿 Developer Features

* Implement unit tests (authentication, categories, product retrieval via slugs using Spatie Sluggable).
* Test API using Postman.
* Document API endpoints (Swagger or equivalent).
* Handle exceptions with proper HTTP responses and clear messages.
* Implement DAO for database interactions.

---

## ✨ Extra Features

* 🛡️ DTO usage for structured and validated data transfer.
* 🖼️ Limit product images to **maximum 4 images** with validation error:

  > "Limite de 4 images par produit dépassée"

---

## 🚀 Bonus Features

* 🐳 Docker containerization for consistent environments.
* 📧 Email/SMS notifications when an order is delivered.

---

## 📅 Project Timeline

* **Duration:** 10 days
* **Start Date:** 30/03/2026 at 09:30
* **Deadline:** 17/04/2026 before midnight

---

## 🧪 Evaluation Process

You will present your project for **1 hour**:

* 🖥️ 5 min: Application demo
* 💻 10 min: Code explanation
* ❓ 45 min: Q&A session (quiz)

---

## 📦 Deliverables

Submit a GitHub repository containing:

```
📁 Presentation
📁 Source code (frontend application)
📁 README.md
```

---

## ⚡ Performance Criteria

### 🚀 1. Loading Time

* Fast initial load and optimized asset delivery.

### ⚡ 2. Responsiveness

* Smooth UI interactions and navigation.

### 🧠 3. Resource Efficiency

* Optimized memory usage and no leaks.

### 🌍 4. Cross-platform Compatibility

* Works on desktop, tablet, and mobile across major browsers.

### ♿ 5. Accessibility

* WCAG compliance
* Keyboard navigation support
* Screen reader compatibility

### ⚠️ 6. Error Handling

* Clear error messages
* Proper logging (client + server)

### 🔒 7. Security

* HTTPS usage
* Input validation
* JWT protection
* Protection against injection attacks

### 🌐 8. API Performance

* Pagination
* Caching where possible
* Reduced API calls

### 📈 9. Scalability

* Modular architecture
* Easy feature expansion
* Supports growing users and data

---

## 🏁 Conclusion

This project aims to deliver a **modern, scalable, and secure frontend application** that provides an excellent user experience while demonstrating strong software engineering practices.


