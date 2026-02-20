# Project Title
 Financial Investment Tracker
## Project Description
This project is a financial tracking website that allows users to manage their income, expenses, savings, investments and debts. It offers interactive chart and simple financial tips. 

## Features

#### Feature 1: User Registration
Users can create an account by entering their name, email, and password.
The form validates inputs to ensure that the full name is at least 3
characters and that passwords match.

#### Feature 2: Personal Financial Information Form
After registering, users can input detailed financial data including income, fixed expenses, monthly savings, investments, and debts. This form stores data in the localStorage for persistence.


#### Feature 3: Interactive Financial Overview
The results page displays a dynamic bar chart using Chart.js, showing income vs expenses vs savings vs investments vs debts. Users also receive personalized financial tips based on their inputs.

## Design choices

#### Colors
Colors: #ea8746 (orange), #000 (black), #f0f0f0 (light background), #6b6055 (header/footer). Chosen for clarity, contrast, and user engagement, making charts and forms easy to read.

#### Fonts/Typography
Fonts: Arial, Helvetica, sans-serif. Chosen for readability and simplicity, ensuring accessibility across devices.

#### Images/Graphics
moneylogo.avif for branding.
moneygif.webp for visual engagement on the home page.
Chart.js graphics dynamically display financial data.
## Development Process

#### Project planning
Since the project theme was open and based on personal interest, I decided to develop a simple website focused on personal financial management, as financial organization is both personally relevant and socially important. The goal was to create an interactive and user-friendly tool that helps users better understand and analyze their financial situation.
The project consists of a planned website with a clear structure: Homepage, Registration, Financial Information, and Results. It included form validation, data storage using localStorage, dynamic chart generation, and personalized feedback based on calculations.
From the beginning, the focus was on meeting the project requirements using HTML for the structure, CSS for styling and responsiveness, and JavaScript for interactivity and DOM manipulation, creating an interactive user experience.

#### Wireframes
![Wireframe](assets/images/wareframe.png)

#### Challenges Faced
One of the main challenges was handling form validation across different pages and ensuring that user data was stored and retrieved correctly. Another challenge was updating the graph based on user input. I also needed to adjust the layout to ensure the site functioned well on both desktop and mobile devices.

#### Interactivity
JavaScript was used extensively to make the website interactive. It handles form validation to ensure correct user input before submission. User data is stored and retrieved using localStorage, allowing information to be shared between pages. The chart is generated dynamically based on this data, and personalized financial tips are displayed using DOM manipulation and conditional logic. Other interactive features include a responsive menu toggle for small screens, page redirection after form submissions, and real-time calculations to provide feedback on savings, expenses, and debts.
## Deployed site

This site has been deployed to GitHub Pages at the URL below:


[View Live Site](https://mayaramercante.github.io/financialinvestment/)
