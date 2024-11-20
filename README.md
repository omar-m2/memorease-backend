# MemorEase

MemorEase is a modern flashcard study tool designed to enhance learning and retention through smart studying and effective knowledge organization. With its visually engaging interface and interactive features, MemorEase allows users to easily create, organize, and review flashcards, making studying both efficient and enjoyable.

## Table of Contents

* [Live Demo](#live-demo)
* [Features](#features)
* [Technologies Used](#technologies-used)
* [How To Use](#how-to-use)
* [How To Run Locally](#how-to-run-locally)
* [Future Improvements](#future-improvements)
* [Project Structure](#project-structure)
* [Contribution](#contribution)
* [License](#license)
* [Authors](#authors)

## Live Demo

Check out the live demo of the application [here]().

## Features

* **Home Page:** A welcoming interface showcasing the app’s purpose with options to create or edit flashcards.
* **Flashcard Creation:** Effortlessly create flashcards through the question and answer input form.
* **Bulk Review:** Quickly reveal or hide answers for all flashcards in the set simultaneously with a single click.
* **Interactive Study Mode:** Review one card at a time and track your progress for efficient memorization.
* **Flashcard Management:** Edit, delete, or review any flashcard from a centralized dashboard.
* **User-Friendly Interface:** Intuitive and clean layout for easy navigation.
* **Responsive Design:** Optimized UI for both desktop and mobile views.

## Technologies Used

* **Frontend:**

  * **JavaScript**: The main programming language for frontend logic.
  * **React v18.2:** Framework for building the user interface.
  * **Axios:** For API communication.
  * **HTML5:** Markup language for structuring content on the web.
  * **CSS3:** Styling for clean and responsive layouts.

* **Backend:**

  * **Node.js:** Server-side JavaScript runtime.
  * **Express.js:** Framework for building the API.
  * **MongoDB:** Database to store created flashcards.

* **Deployment:**
  * [**Vercel**](https://www.vercel.com/) for frontend hosting

## How To Use

* **Creating Flashcards**
  * Navigate to flashcard creation form by clicking on "Create New Flashcard" button.
  * Input question and answer.
  * Click on "Save Flashcard" button to add it to your flashcards.

* **Managing Flashcards**
  * Access your flashcard dashboard by clicking on "Edit Your Flashcards" button.
  * Edit or delete flashcards as needed.
  * Save your adjustments in editing mode by clicking "Save" button.

* **Viewing Flashcards**
  * Go to your saved flashcards by clicking on "View Flashcards" button.
  * Flip a card by clicking on it to see the answer and click again to get back to question.
  * Flip all cards at one time by clicking on "Flip All/Fold All" button.

* **Study Mode**
  * Enter focused study mode by clicking on "Study Mode" button.
  * View one card at a time and click on it to flip it and see answer or return to question.
  * Use "Previous" & "Next" buttons to navigate between your saved cards based on their creation order.
  * Track your progress through checking number of reviewed cards from the total saved cards.

## How To Run Locally

### Prerequisites

* **Node.js (v16+):** Backend runtime environment.
* **npm (v8+):** Node package manager.
* **MongoDB:** Database server.

### Installation Steps

**1. Clone the repository:**

```bash
git clone https://github.com/omar-m2/memorease-backend
```

**2. Navigate to the project directory:**

```bash
cd memorease-backend
```

**3. Install backend dependencies:**

```bash
npm install
```

**5. Set up environment variables:**

  * Create a .env file in the root directory and configure your MongoDB URI:

      ```bash
      MONGO_URI=your_mongodb_connection_string
      PORT=5000
      ```

**6. Running the application:**

  * **Backend:** Run the server.

      ```bash
      node server.js
      ```

## Future Improvements

* **Flashcard Sets:** Allow users to categorize their flashcards in sets with names for easier organization (e.g., Science, Language, History).
* **Card ID & Name:** Option to give flashcard an ID and name based on the question for better management.
* **Search Functionality:** Allow users to search through their flashcard sets using a search bar.
* **Filter Dropdown:** Add a dropdown button to filter flashcards by set.
* **User Accounts:** Allow users to create accounts to save and access their flashcards from different devices.
* **Score System:** Add buttons (correct & incorrect) and implement a score system to review incorrect answers.
* **Statistics Dashboard:** A simple dashboard showing the user’s performance over time.

## Project Structure

    memorease-backend/
    ├─config/
    │　└─database.js
    ├─models/
    │　└─Flashcard.js
    ├─routes/
    │　└─flashcards.js
    ├─package-lock.json
    ├─package.json
    │─server.js
    ├─.gitignore
    ├─README.md
    └─LICENSE.md

## Contribution

Feel free to fork the repository and submit pull requests. All contributions are welcome! If you'd like to contribute, follow these steps:

**1. Visit the repository:**

* Navigate to the [GitHub repository](https://github.com/omar-m2/memorease-backend) to fork.

**2. Click on the Fork button:**

* In the top right corner of the page, click the **Fork** button. This will create a copy of the repository in your GitHub account.

**3. Clone your forked repository:**

* Open your terminal (or Git Bash) and run the following command, replacing YOUR_USERNAME with your GitHub username:

    ```bash
    git clone https://github.com/YOUR_USERNAME/memorease-backend.git
    ```

* This will create a local copy of the repository on your machine.

**4. Create a new branch:**

* Navigate into the cloned directory:

    ```bash
    cd memorease-backend
    ```

* Create a new branch for your changes:

    ```bash
    git checkout -b my-feature-branch
    ```

**5. Make your changes:**

* Use your preferred text editor or IDE to edit the files you want to modify.

**6. Add and commit your changes:**

* Once you've made your changes, add them to the staging area:

    ```bash
    git add .
    ```

* Commit your changes with a clear, descriptive message:

    ```bash
    git commit -m "Description of changes made"
    ```

**7. Push your changes to GitHub:**

* Push your changes to your forked repository:

    ```bash
    git push origin my-feature-branch
    ```

**8. Create a pull request:**

* Go back to the original repository on GitHub. You should see a prompt to create a pull request for your recently pushed branch. Click on Compare & pull request.
* Provide a description of your changes and click Create pull request.

**9. Review and discuss:**

* Collaborate with the maintainers and other contributors by discussing your pull request. Be prepared to make any necessary changes if requested.

**10. Merge your pull request:**

* Once your pull request is approved, it can be merged into the main branch of the original repository.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Authors

Omar Mostafa - [omar.m.abdelhakim@gmail.com](mailto:omar.m.abdelhakim@gmail.com)
