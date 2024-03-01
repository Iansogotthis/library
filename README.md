# Project Documentation

## Overview

This project is a web application for a library system. It uses EJS for templating and provides the following features:

## Features

### 1. Library Books Page

This page displays a list of all the books in the library. Each book has a link to its individual page, the author's name, and its checkout status. If a user is logged in, they can also check in or check out books.

### 2. Add Book Page

This page allows a logged-in user to add a new book to the library. It includes a form for the book's name, author, and checkout status.

### 3. Edit Review Page

This page allows a logged-in user to edit their review of a book. It includes a form for the review text and rating.

### 4. Book Details Page

This page displays the details of a specific book, including its name, author, and checkout status. If a user is logged in, they can add a review for the book and see existing reviews.

## Note

For full functionality of the site, please log in using Gmail.

## Technologies Used

The application is built using the following technologies:

- Node.js
- Express.js
- MongoDB
- EJS
- Passport.js
- Google OAuth

## Installation

To install and run the application, follow these steps:

1. Clone the repository: `git clone https://github.com/<username>/library-system.git`

2. Install dependencies: `npm install`

3. Create a .env file and add your Google OAuth credentials: `CLIENT_ID=<your-client-id>` `CLIENT_SECRET=<your-client-secret>`

4. Start the application: `npm start`

## Getting Started

### [App Link] <http://cyan-funny-walkingstick.cyclic.app/>
