
# Bengal Cats

## Overview:
Bengal Cats is a React-based web application that allows users to search, browse, and explore different cat breeds. It fetches data from a cat breed API and displays it in a user-friendly way, with functionality like search, pagination, and detailed views for each breed. This project uses Material-UI for styling and ensures a responsive design that looks great on all devices.
## Setup Instructions:

### 1. Clone the Repository

git clone https://github.com/imvikaskashyap/GIC---Assignment.git

### 2. Install Dependencies
Run the following command to install all required dependencies:

npm install

###  3. Environment Setup
Create a .env file in the root directory.

REACT_APP_API_URL=https://api.thecatapi.com/v1
REACT_APP_API_KEY=your-cat-api-key

### 4. Start the Application
Run the following command to start the app:

npm start

The app should be available at http://localhost:3000.

## Dependencies:
Below is a list of the key dependencies used in this project:

1. React: A JavaScript library for building user interfaces.

2. Material-UI: A popular UI framework for React that provides pre-built components with styling.

3. Axios: A promise-based HTTP client used for API requests.

4. Lucide-React: A modern icon library for React, providing various icons.

5. React Router: For handling client-side routing.


## Features:
Search Functionality: Users can search for cat breeds by typing into the search bar. The results dynamically update based on the query.

Pagination: Navigate between pages of cat breed results. The pagination controls let users move to the next or previous page, and the app displays the current page number.

Detailed View: Clicking on a specific breed shows detailed information about the selected breed, including its image and other details.

Responsive Design: The app is fully responsive and adjusts to different screen sizes.
Error Handling: Error messages are displayed if there's a problem with data fetching or API requests.
Code Structure

The project is organized in a modular and scalable way, with each component responsible for a specific piece of functionality. Below is an overview of the code structure:

## Code Structure:

```bash
Copy code
src/
│
├── components/
│   ├── CatList/
│   │   └── CatList.jsx       # Renders the list of cats or selected cat details.
│   ├── CatCard/
│   │   └── CatCard.jsx       # Displays individual cat information in a card format.
│   ├── CatDetails/
│   │   └── CatDetails.jsx    # Renders detailed information about a selected cat.
│   ├── Pagination/
│   │   └── PaginationControls.jsx  # Handles page navigation for the list of cats.
│   └── SearchBar/
│       └── SearchBar.jsx     # Allows users to search for specific cat breeds.
│
├── context/
│   └── DataContext.jsx       # Global state management for cat data, pagination, and search.
│
├── services/
│   └── api.js                # API request handler using Axios to fetch cat data.
│
├── assets/
│   └── images/               # Screenshots and images used in the documentation.
│
├── App.jsx                   # Main component where all pages and routes are brought together.
├── index.js                  # Entry point for React, renders the App.
└── README.md                 # Documentation file.