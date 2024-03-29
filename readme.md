# Convert the project to React

## Introduction

This project involves converting a  JavaScript application to a React-based one. 
The original project included functionalities such as fetching data from an API, displaying it in a table, sorting data, refreshing data, handling row selections, and applying CSS styling. 
The goal is to replicate these functionalities using React.

### Prerequisites

- Node.js installed on your machine.

## Task Steps

1. **Generate React Project:** Use `create-react-app` to create a new React project.
2. **Code Cleanup:** Remove unused files, boilerplate code, or any unnecessary configurations generated by `create-react-app`.
    **File Structure**: Structure the app to accommodate the functionalities of the original vanilla JavaScript project.
3. **Component Conversion:** Transform the employee list functionality into React functional components.
   **Display Data**: Implement rendering logic to display the fetched data in a table format.
4. **Data Fetching Implementation:** Use React hooks (`useState`, `useEffect`) to implement data fetching from the chosen API.
5. **Handling Actions**:
    - Implement a refresh button that re-fetches and updates the table data.
    - Add a sort functionality to sort the table data by one of its keys.
    - Add a click listener to the table rows to display an alert with the selected employee's name.
6. **Styling**:
    - Use CSS or a CSS-in-JS library (like emotion-js) to style the table headers, rows, buttons, and other elements as described in the original project.
    - Bonus: Implement a scrollable container for the table and make the headers stick to the top.

## Task Description

### Overview

The original vanilla JavaScript project comprises:

- An HTML file (`index.html`)
- JavaScript file for data handling (`script.js`)
- CSS file for styling (`styles.css`)

### Additional Notes

- Follow React best practices and utilize React components to organize your code efficiently.
- Utilize React's state management and lifecycle methods effectively.
- Ensure that the final React application replicates the functionalities and styles of the original vanilla JavaScript project.
