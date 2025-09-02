## 1. Introduction

The goal of this project is to build a full-stack web application for managing customer and address information. This document will guide you through the process, from setting up your development environment to implementing the required features.

The application will have two main entities:

- **Customer:** Represents a customer with personal details.
- **Multiple Addresses:** A customer can have one or more addresses associated with their profile.

## 2. Tech Stack Overview

This project uses a modern JavaScript-based tech stack.

- **Backend: Node.js with Express.js**
    - **Node.js** is a JavaScript runtime that lets you run JavaScript on the server.
    - **Express.js** is a framework for Node.js that simplifies building web applications and APIs. It helps you define routes (URLs) for your application (e.g., `/api/customers`) and handle requests from the frontend.
- **Frontend: React JS with React Router**
    - **React JS** is a popular library for building user interfaces (UIs). It uses a component-based architecture, meaning you build your UI by creating small, reusable pieces of code.
    - **React Router** is a library for handling navigation in a React application. It allows you to create different "pages" (e.g., a customer list page and a customer details page) and navigate between them without reloading the entire web page.
- **Database: SQLite**
    - **SQLite** is a lightweight, file-based database. It's easy to set up because it doesn't require a separate server process. Your entire database will be stored in a single file within your project, making it perfect for development and smaller applications.
