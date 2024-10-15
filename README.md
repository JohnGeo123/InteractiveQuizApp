# Interactive Quiz App

## Purpose of the Project

This project is a **Quiz Application** that allows users to select from different cultural categories, answer questions, and view their results. It is built using React and demonstrates how to manage state, handle user interactions, and dynamically render content based on user selections. The quiz covers categories such as Japanese Culture, Chinese Culture, Hindu Culture, and Slavic Culture, providing an engaging way to learn about these rich traditions.

## Features

- **Category Selection**: Users can choose from multiple cultural categories.
- **Dynamic Questioning**: Each category presents a set of questions, and users can select their answers.
- **Score Tracking**: The application keeps track of the user's score, correct answers, and wrong answers.
- **Responsive Design**: The layout is designed to be user-friendly across different devices.

## Technologies Used

- **React**: For building user interfaces.
- **CSS**: For styling the components.
- **JavaScript**: For the logic and functionalities.

## Getting Started

To run this project on your own PC, follow these steps:

### Prerequisites

- **Node.js**: Ensure you have [Node.js](https://nodejs.org/) installed on your computer.
- **npm**: This comes with Node.js and is used to manage dependencies.

### Installation Steps

1. **Clone the repository**:
```bash
git clone https://github.com/JohnGeo123/quiz-application.git
```

2. **Navigate into the project directory**:
 ```bash
cd quiz-application  
```

3. **Install the dependencies**:
``` bash
npm install
```

4. **Start the application:**:
``` bash
npm start
```
This command will start the development server and open the application in your default web browser at http://localhost:3000.

## Code Structure :

Here is a brief overview of the important files and folders in the project:

- src/: Contains all the source code for the application.
- components/: React components used in the application (e.g., Quiz component, Category selection).
- data.js: Contains the quiz categories and questions data.
- App.js: The main component where the application is structured and rendered.
- styles.css: Contains all the styles for the application

### Key Code Elements: 

- Category Selection: The application allows users to select a category, which triggers the loading of relevant questions.
```bash
const selectCategory = (category) => {
  setActiveCategory(category);
  // Resetting states
};
```

- Question Rendering: The current question is displayed based on the selected category.
``` bash
const { questions } = activeCategory; // Fetching questions from the selected category
```

- Answer Selection: Users can select answers, and the application keeps track of correct and wrong answers.
``` bash
const onAnswerSelected = (answer, idx) => {
  // Logic to check the selected answer
};
```



