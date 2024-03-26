# Muber
This is an API serves up a sort of application that uses for Uber or equivalent app. 

---

# Installing

## Prerequisites

Before you begin, ensure you have Node.js version 18.16.0 or later installed on your machine.

## Getting Started

To get started with the project, you need to install all dependencies:

  ```bash
  npm install
  ```

## Environment Configuration

The repository includes an `example.env` file. You should create the following environment files:

- `.env`: Default environment for new scripts

You can use the `example.env` file as a template.

PORT - Integer: Port for running server
MONGODB_URI - String: Connection string to DB

## Running the Application

To run the application, use the following commands:

  ```bash
  npm run start
  ```

Once the application is running, you can access it via `http://localhost:3000/`.