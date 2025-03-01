// Wait until the DOM content is fully loaded before executing the function
document.addEventListener("DOMContentLoaded", () => {
  
    // Get the start button element by its ID
    const startQuizButton = document.getElementById("start-quiz-button");
    
    // Get the quiz banner element by its class name
    const quizBanner = document.querySelector(".quiz-banner");
    
    // Get the quiz setup element by its ID
    const quizSetup = document.getElementById("quiz-setup");
  
    // Add a click event listener to the start quiz button
    startQuizButton.addEventListener("click", () => {
      
      // Hide the quiz banner when the start quiz button is clicked
      quizBanner.style.display = "none";
      
      // Show the quiz setup screen after hiding the banner
      quizSetup.style.display = "block";
    });
  });
  
  
  const movieData = {
    "The Godfather": {
      // Easy difficulty questions
      easy: [
        {
          question: "Who plays the role of Michael Corleone?",
          choices: ["Robert De Niro", "Al Pacino", "Marlon Brando", "James Caan"],
          correctAnswer: 1,  // The correct answer is Al Pacino (index 1)
        },
        {
          question: "In what year was 'The Godfather' released?",
          choices: ["1969", "1972", "1975", "1980"],
          correctAnswer: 1,  // The correct answer is 1972 (index 1)
        },
        {
          question: "What is the name of the Corleone family patriarch?",
          choices: ["Sonny", "Michael", "Vito", "Fredo"],
          correctAnswer: 2,  // The correct answer is Vito (index 2)
        },
        {
          question: "What is the profession of the Corleone family?",
          choices: ["Lawyers", "Doctors", "Politicians", "Organized crime"],
          correctAnswer: 3,  // The correct answer is Organized crime (index 3)
        },
        {
          question: "In which city is the Corleone family based?",
          choices: ["Chicago", "New York", "Los Angeles", "Miami"],
          correctAnswer: 1,  // The correct answer is New York (index 1)
        },
      ],
      // Medium difficulty questions
      medium: [
        {
          question: "What is the name of the Corleone family business?",
          choices: ["Genco Olive Oil Company", "Corleone Imports", "Little Italy Exports", "New York Finest"],
          correctAnswer: 0,  // The correct answer is Genco Olive Oil Company (index 0)
        },
        {
          question: "Who directed 'The Godfather'?",
          choices: ["Martin Scorsese", "Francis Ford Coppola", "Steven Spielberg", "Brian De Palma"],
          correctAnswer: 1,  // The correct answer is Francis Ford Coppola (index 1)
        },
        {
          question: "What is the name of Michael's Sicilian wife?",
          choices: ["Kay Adams", "Apollonia Vitelli", "Connie Corleone", "Lucy Mancini"],
          correctAnswer: 1,  // The correct answer is Apollonia Vitelli (index 1)
        },
        {
          question: "What happens to Sonny Corleone?",
          choices: ["He becomes the new Don", "He is assassinated", "He moves to Sicily", "He becomes an FBI informant"],
          correctAnswer: 1,  // The correct answer is He is assassinated (index 1)
        },
        {
          question: "What is the name of the Las Vegas casino the Corleones acquire?",
          choices: ["The Flamingo", "The Tropicana", "The Sands", "The Bellagio"],
          correctAnswer: 2,  // The correct answer is The Sands (index 2)
        },
      ],
      // Hard difficulty questions
      hard: [
        {
          question: "What is the significance of the orange in the film?",
          choices: [
            "It represents wealth",
            "It symbolizes the Corleone family",
            "It foreshadows death",
            "It's Michael's favorite fruit",
          ],
          correctAnswer: 2,  // The correct answer is It foreshadows death (index 2)
        },
        {
          question: "What is the name of the book 'The Godfather' is based on?",
          choices: ["The Family", "Omerta", "The Sicilian", "The Godfather"],
          correctAnswer: 3,  // The correct answer is The Godfather (index 3)
        },
        {
          question: "Who plays the role of Tom Hagen?",
          choices: ["James Caan", "Robert Duvall", "John Cazale", "Talia Shire"],
          correctAnswer: 1,  // The correct answer is Robert Duvall (index 1)
        },
        {
          question: "What is the name of the Hollywood producer that Johnny Fontane asks a favor from?",
          choices: ["Jack Woltz", "Moe Greene", "Hyman Roth", "Luca Brasi"],
          correctAnswer: 0,  // The correct answer is Jack Woltz (index 0)
        },
        {
          question: "What is the last word spoken in the film?",
          choices: ["Family", "Michael", "Corleone", "Kay"],
          correctAnswer: 1,  // The correct answer is Michael (index 1)
        },
      ],
    },
    "Pulp Fiction": {
      easy: [
        {
          question: "Who directed 'Pulp Fiction'?",
          choices: ["Martin Scorsese", "Quentin Tarantino", "Steven Spielberg", "Christopher Nolan"],
          correctAnswer: 1,
        },
        {
          question: "Which actor plays Vincent Vega?",
          choices: ["John Travolta", "Samuel L. Jackson", "Bruce Willis", "Tim Roth"],
          correctAnswer: 0,
        },
        {
          question: "What type of food does Vincent Vega eat at Jack Rabbit Slim's?",
          choices: ["Pizza", "Hamburger", "Hot Dog", "Steak"],
          correctAnswer: 1,
        },
        {
          question: "What dance do Mia and Vincent perform at Jack Rabbit Slim's?",
          choices: ["Waltz", "Tango", "Twist", "Cha-cha"],
          correctAnswer: 2,
        },
        {
          question: "What is the name of the character played by Samuel L. Jackson?",
          choices: ["Vincent Vega", "Marsellus Wallace", "Jules Winnfield", "Butch Coolidge"],
          correctAnswer: 2,
        },
      ],
      medium: [
        {
          question: "What is in the briefcase that Jules and Vincent retrieve?",
          choices: ["Money", "Drugs", "Diamonds", "It's never revealed"],
          correctAnswer: 3,
        },
        {
          question: "What does Vincent accidentally do to Mia Wallace?",
          choices: ["Shoot her", "Poison her", "Give her a drug overdose", "Push her out of a window"],
          correctAnswer: 2,
        },
        {
          question: "What weapon does Butch use to rescue Marsellus Wallace?",
          choices: ["Gun", "Knife", "Sword", "Baseball bat"],
          correctAnswer: 2,
        },
        {
          question: "What does Mia Wallace say is drawn on her foot?",
          choices: ["A heart", "A star", "A smiley face", "A skull and crossbones"],
          correctAnswer: 1,
        },
        {
          question: "What is the name of the restaurant where Jules and Vincent eat breakfast?",
          choices: ["Big Kahuna Burger", "Jack Rabbit Slim's", "Hawthorne Grill", "Teriyaki Donut"],
          correctAnswer: 2,
        },
      ],
      hard: [
        {
          question: "What is the name of the burger joint where Jules and Vincent eat breakfast?",
          choices: ["Big Kahuna Burger", "Jack Rabbit Slim's", "Hawthorne Grill", "Teriyaki Donut"],
          correctAnswer: 0,
        },
        {
          question: "What does Mia Wallace say is the 'right' way to say Quarter Pounder with Cheese in Paris?",
          choices: ["Le Big Mac", "Royale with Cheese", "Le Cheeseburger", "Le Quarter Pound"],
          correctAnswer: 1,
        },
        {
          question: "What is the name of the TV pilot that Mia Wallace starred in?",
          choices: ["Fox Force Five", "Kung Fu Killers", "Lethal Ladies", "Femme Fatales"],
          correctAnswer: 0,
        },
        {
          question: "What is written on Jules' wallet?",
          choices: ["Bad Mother F***er", "Pulp Fiction", "Ezekiel 25:17", "The Path of the Righteous Man"],
          correctAnswer: 0,
        },
        {
          question: "What is the name of the pawn shop owner where Butch and Marsellus are held captive?",
          choices: ["Zed", "Maynard", "The Gimp", "Fabienne"],
          correctAnswer: 1,
        },
      ],
    },
    "The Dark Knight": {
      easy: [
        {
          question: "Who plays the Joker in 'The Dark Knight'?",
          choices: ["Jack Nicholson", "Jared Leto", "Heath Ledger", "Joaquin Phoenix"],
          correctAnswer: 2,
        },
        {
          question: "In which year was 'The Dark Knight' released?",
          choices: ["2005", "2008", "2010", "2012"],
          correctAnswer: 1,
        },
        {
          question: "Who plays Batman in 'The Dark Knight'?",
          choices: ["Christian Bale", "Michael Keaton", "Ben Affleck", "Robert Pattinson"],
          correctAnswer: 0,
        },
        {
          question: "What is the name of Gotham's district attorney in the film?",
          choices: ["Harvey Dent", "Jim Gordon", "Rachel Dawes", "Lucius Fox"],
          correctAnswer: 0,
        },
        {
          question: "What is the name of Batman's high-tech vehicle in the film?",
          choices: ["Batmobile", "Tumbler", "Batpod", "Batwing"],
          correctAnswer: 1,
        },
      ],
      medium: [
        {
          question: "Who directed 'The Dark Knight'?",
          choices: ["Zack Snyder", "Tim Burton", "Christopher Nolan", "Joel Schumacher"],
          correctAnswer: 2,
        },
        {
          question: "What is the name of the Joker's female accomplice?",
          choices: ["Harley Quinn", "Catwoman", "Poison Ivy", "There isn't one"],
          correctAnswer: 3,
        },
        {
          question: "What is the name of the ferry boat carrying civilians in the film's climax?",
          choices: ["Spirit", "Liberty", "Freedom", "Justice"],
          correctAnswer: 0,
        },
        {
          question: "What is the name of the bank robber at the start of the film?",
          choices: ["Bozo", "Grumpy", "Chuckles", "Happy"],
          correctAnswer: 1,
        },
        {
          question: "What is the name of Bruce Wayne's love interest in the film?",
          choices: ["Selina Kyle", "Vicki Vale", "Rachel Dawes", "Talia al Ghul"],
          correctAnswer: 2,
        },
      ],
      hard: [
        {
          question: "What is written on the Joker cards left at crime scenes?",
          choices: [
            "'Why so serious?'",
            "'Jokes on you'",
            "'Let's put a smile on that face'",
            "'Will the real Batman please stand up?'",
          ],
          correctAnswer: 0,
        },
        {
          question: "What is the name of the device Batman uses to map out Gotham City?",
          choices: ["Bat-Sonar", "Echolocation Array", "Sonic Mapping Device", "Cell Phone Sonar"],
          correctAnswer: 3,
        },
        {
          question: "What is the name of the Chechen mob boss in the film?",
          choices: ["Sal Maroni", "Gambol", "The Chechen", "Lau"],
          correctAnswer: 2,
        },
        {
          question: "What is the serial number of the police officer whose name the Joker uses?",
          choices: ["8794", "9854", "7821", "6457"],
          correctAnswer: 1,
        },
        {
          question: "What is the name of the company that Bruce Wayne uses to track the money?",
          choices: ["Wayne Enterprises", "Lau Security Investments Holdings", "Gotham National Bank", "SKB Holdings"],
          correctAnswer: 1,
        },
      ],
    },
    General: {
      easy: [
        {
          question: "Which animated movie features a rat who dreams of becoming a chef in Paris?",
          choices: ["Toy Story", "Ratatouille", "Finding Nemo", "Up"],
          correctAnswer: 1,
        },
        {
          question: "Who played Jack in the movie 'Titanic'?",
          choices: ["Brad Pitt", "Tom Cruise", "Leonardo DiCaprio", "Johnny Depp"],
          correctAnswer: 2,
        },
        {
          question: "Which of these is NOT one of the Avengers in the Marvel Cinematic Universe?",
          choices: ["Iron Man", "Captain America", "Spider-Man", "Superman"],
          correctAnswer: 3,
        },
        {
          question: "What is the name of the fictional country where 'Black Panther' is set?",
          choices: ["Zamunda", "Wakanda", "Genovia", "Latveria"],
          correctAnswer: 1,
        },
        {
          question: "Which actress played Elle Woods in 'Legally Blonde'?",
          choices: ["Jennifer Aniston", "Reese Witherspoon", "Cameron Diaz", "Julia Roberts"],
          correctAnswer: 1,
        },
      ],
      medium: [
        {
          question: "Which movie won the Academy Award for Best Picture in 2020?",
          choices: ["1917", "Joker", "Parasite", "Once Upon a Time in Hollywood"],
          correctAnswer: 2,
        },
        {
          question: "Who directed the 'Lord of the Rings' trilogy?",
          choices: ["Steven Spielberg", "James Cameron", "George Lucas", "Peter Jackson"],
          correctAnswer: 3,
        },
        {
          question: "In which film does Tom Hanks say the line, 'Life is like a box of chocolates'?",
          choices: ["Cast Away", "Saving Private Ryan", "Forrest Gump", "The Green Mile"],
          correctAnswer: 2,
        },
        {
          question: "Which actor has played James Bond in the most films?",
          choices: ["Sean Connery", "Roger Moore", "Pierce Brosnan", "Daniel Craig"],
          correctAnswer: 1,
        },
        {
          question: "What is the highest-grossing film of all time (as of 2023)?",
          choices: ["Avengers: Endgame", "Avatar", "Titanic", "Star Wars: The Force Awakens"],
          correctAnswer: 1,
        },
      ],
      hard: [
        {
          question: "In the movie 'Inception', what is used to tell if one is in a dream or reality?",
          choices: ["A watch", "A coin", "A top", "A ring"],
          correctAnswer: 2,
        },
        {
          question: "Which actor has won the most Academy Awards for Best Actor?",
          choices: ["Jack Nicholson", "Daniel Day-Lewis", "Marlon Brando", "Tom Hanks"],
          correctAnswer: 1,
        },
        {
          question: "Who was the first African American to win an Academy Award for Best Actor?",
          choices: ["Sidney Poitier", "Denzel Washington", "Morgan Freeman", "Forest Whitaker"],
          correctAnswer: 0,
        },
        {
          question: "Which film holds the record for the most Academy Award nominations without winning any?",
          choices: ["The Turning Point", "The Color Purple", "Gangs of New York", "True Grit"],
          correctAnswer: 0,
        },
        {
          question: "In the film 'The Usual Suspects', who is Keyser Söze?",
          choices: ["Dean Keaton", "Michael McManus", "Fred Fenster", "Verbal Kint"],
          correctAnswer: 3,
        },
      ],
    },
  }
  
  
  
  // Declare an object to store quiz-related data
  const currentQuiz = {
    movie: "",  // Stores the selected movie (empty initially)
    difficulty: "",  // Stores the selected difficulty level (empty initially)
    questions: [],  // Stores the list of quiz questions (empty initially)
    currentQuestionIndex: 0,  // Keeps track of the index of the current question (starts at 0)
    score: 0,  // Stores the player's current score (starts at 0)
    timer: null,  // Stores a reference to the timer (initially set to null)
    timeLeft: 0,  // Stores the time remaining for the quiz (initially set to 0)
  }
  
  // Get the quiz setup, questions, and result elements from the HTML document
  const quizSetup = document.getElementById("quiz-setup");  // Grabs the element for quiz setup (e.g., the screen to select the movie/difficulty)
  const quizQuestions = document.getElementById("quiz-questions");  // Grabs the element where questions will be displayed
  const quizResult = document.getElementById("quiz-result");  // Grabs the element where the result will be displayed
  
  // Get dropdown and buttons related to quiz choices from the HTML document
  const movieDropdown = document.getElementById("movie-dropdown");  // Grabs the dropdown for selecting a movie
  const difficultyButtons = document.querySelectorAll(".difficulty-buttons button");  // Grabs all buttons inside the difficulty-buttons class for selecting difficulty
  const startQuizButton = document.getElementById("start-quiz");  // Grabs the button to start the quiz
  
  // Get elements related to quiz progress, timer, and results from the HTML document
  const movieTitle = document.getElementById("movie-title");  // Grabs the element to display the movie title
  const progressBar = document.getElementById("progress-bar");  // Grabs the element to show the progress bar during the quiz
  const currentQuestionSpan = document.getElementById("current-question");  // Grabs the element to show the current question number
  const timerSpan = document.getElementById("timer");  // Grabs the element to show the remaining time
  const scoreSpan = document.getElementById("score");  // Grabs the element to show the player's score
  const questionDiv = document.getElementById("question");  // Grabs the element where the current question will be displayed
  const choicesDiv = document.getElementById("choices");  // Grabs the element where the choices for each question will be displayed
  const submitAnswerButton = document.getElementById("submit-answer");  // Grabs the button to submit the answer
  const finalScoreDiv = document.getElementById("final-score");  // Grabs the element to show the final score after quiz completion
  const achievementsDiv = document.getElementById("achievements");  // Grabs the element to show achievements (if any)
  const restartQuizButton = document.getElementById("restart-quiz");  // Grabs the button to restart the quiz
  
  // This function initializes the quiz
  function initializeQuiz() {
    // Loop through each movie in the movieData object to add it to the movie dropdown
    for (const movie in movieData) {
      const option = document.createElement("option");  // Create a new option element
      option.value = movie;  // Set the value of the option to the movie name
      option.textContent = movie;  // Set the text of the option to the movie name
      movieDropdown.appendChild(option);  // Append the new option to the dropdown
    }
  
    // Add an event listener to the movie dropdown to update the start button when a movie is selected
    movieDropdown.addEventListener("change", updateStartButton);
  
    // Loop through all difficulty buttons and add a click event listener to each
    difficultyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        difficultyButtons.forEach((btn) => btn.classList.remove("selected"));  // Remove 'selected' class from all buttons
        button.classList.add("selected");  // Add 'selected' class to the clicked button
        updateStartButton();  // Call the function to update the state of the start button
      });
    });
  
    // Add event listeners for the start quiz button, submit answer button, and restart quiz button
    startQuizButton.addEventListener("click", startQuiz);  // Start the quiz when the start button is clicked
    submitAnswerButton.addEventListener("click", submitAnswer);  // Submit the answer when the submit button is clicked
    restartQuizButton.addEventListener("click", resetQuiz);  // Reset the quiz when the restart button is clicked
  }
  
  
  // This function updates the state of the start quiz button based on the user's selection
  function updateStartButton() {
    const movieSelected = movieDropdown.value !== ""  // Checks if a movie has been selected from the dropdown (if it's not empty)
    const difficultySelected = document.querySelector(".difficulty-buttons button.selected") !== null  // Checks if a difficulty button has been selected (if there's a button with the 'selected' class)
    startQuizButton.disabled = !(movieSelected && difficultySelected)  // Disables the start button if no movie or difficulty is selected, otherwise enables it
  }
  
  // This function starts the quiz by setting up the quiz data and UI
  function startQuiz() {
    currentQuiz.movie = movieDropdown.value  // Sets the selected movie in the currentQuiz object
    currentQuiz.difficulty = document.querySelector(".difficulty-buttons button.selected").dataset.difficulty  // Sets the selected difficulty in the currentQuiz object
    currentQuiz.questions = movieData[currentQuiz.movie][currentQuiz.difficulty]  // Loads the questions for the selected movie and difficulty
    currentQuiz.currentQuestionIndex = 0  // Resets the current question index to 0
    currentQuiz.score = 0  // Resets the score to 0
    currentQuiz.timeLeft = currentQuiz.difficulty === "easy" ? 60 : currentQuiz.difficulty === "medium" ? 45 : 30  // Sets the initial time based on the selected difficulty
  
    quizSetup.classList.add("hidden")  // Hides the quiz setup screen
    quizQuestions.classList.remove("hidden")  // Shows the questions screen
    movieTitle.textContent = currentQuiz.movie === "General" ? "General Movie Trivia" : currentQuiz.movie  // Sets the movie title for the quiz
    loadQuestion()  // Loads the first question
    startTimer()  // Starts the timer
  }
  
  // This function loads the current question and choices
  function loadQuestion() {
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex]  // Gets the current question
    questionDiv.textContent = question.question  // Displays the question in the question div
    choicesDiv.innerHTML = ""  // Clears any previous choices
    question.choices.forEach((choice, index) => {  // Loops through all choices for the current question
      const button = document.createElement("button")  // Creates a new button for each choice
      button.textContent = choice  // Sets the button text to the choice
      button.addEventListener("click", () => selectChoice(index))  // Adds a click event listener to handle choice selection
      choicesDiv.appendChild(button)  // Appends the button to the choices div
    })
    submitAnswerButton.disabled = true  // Disables the submit button until a choice is selected
    updateProgress()  // Updates the progress bar, question number, and score
  }
  
  // This function handles the selection of a choice
  function selectChoice(choiceIndex) {
    const buttons = choicesDiv.getElementsByTagName("button")  // Gets all the choice buttons
    for (const button of buttons) {
      button.classList.remove("selected")  // Removes the 'selected' class from all buttons
    }
    buttons[choiceIndex].classList.add("selected")  // Adds the 'selected' class to the clicked button
    submitAnswerButton.disabled = false  // Enables the submit button once a choice is selected
  }
  
  // This function submits the selected answer and moves to the next question
  function submitAnswer() {
    const selectedButton = choicesDiv.querySelector(".selected")  // Gets the selected choice button
    if (!selectedButton) return  // If no choice is selected, exit the function
  
    const selectedAnswer = Array.from(choicesDiv.children).indexOf(selectedButton)  // Gets the index of the selected answer
    const question = currentQuiz.questions[currentQuiz.currentQuestionIndex]  // Gets the current question
  
    if (selectedAnswer === question.correctAnswer) {  // Checks if the selected answer is correct
      currentQuiz.score++  // If correct, increment the score
    }
  
    currentQuiz.currentQuestionIndex++  // Move to the next question
  
    if (currentQuiz.currentQuestionIndex < currentQuiz.questions.length) {  // If there are more questions, load the next one
      loadQuestion()
    } else {
      endQuiz()  // If there are no more questions, end the quiz
    }
  }
  
  // This function starts the quiz timer
  function startTimer() {
    clearInterval(currentQuiz.timer)  // Clears any existing timer
    updateTimerDisplay()  // Updates the timer display
    currentQuiz.timer = setInterval(() => {  // Sets a new interval that decreases the time left by 1 every second
      currentQuiz.timeLeft--  // Decreases the time left by 1 second
      updateTimerDisplay()  // Updates the timer display
      if (currentQuiz.timeLeft <= 0) {  // If the time is up
        clearInterval(currentQuiz.timer)  // Stop the timer
        endQuiz()  // End the quiz
      }
    }, 1000)
  }
  
  // This function updates the timer display with the remaining time
  function updateTimerDisplay() {
    timerSpan.textContent = `Time: ${currentQuiz.timeLeft}s`  // Displays the remaining time in the timer span
  }
  
  // This function updates the progress bar, question number, and score
  function updateProgress() {
    progressBar.style.width = `${(currentQuiz.currentQuestionIndex / currentQuiz.questions.length) * 100}%`  // Updates the progress bar width based on the current question index
    currentQuestionSpan.textContent = `Question: ${currentQuiz.currentQuestionIndex + 1}/${currentQuiz.questions.length}`  // Updates the current question number
    scoreSpan.textContent = `Score: ${currentQuiz.score}`  // Updates the score
  }
  
  // This function ends the quiz and displays the results
  function endQuiz() {
    clearInterval(currentQuiz.timer)  // Stops the timer
    quizQuestions.classList.add("hidden")  // Hides the quiz questions screen
    quizResult.classList.remove("hidden")  // Shows the quiz result screen
    finalScoreDiv.textContent = `Final Score: ${currentQuiz.score}/${currentQuiz.questions.length}`  // Displays the final score
    displayAchievements()  // Displays achievements based on the score
  }
  
  // This function displays achievements based on the score and quiz results
  function displayAchievements() {
    achievementsDiv.innerHTML = ""  // Clears any previous achievements
    const scorePercentage = (currentQuiz.score / currentQuiz.questions.length) * 100  // Calculates the score percentage
  
    if (scorePercentage === 100) {  // If the score is 100%, award a "Perfect Score" achievement
      addAchievement("Perfect Score!", "🏆")
    } else if (scorePercentage >= 80) {  // If the score is 80% or higher, award "Movie Buff"
      addAchievement("Movie Buff", "🎬")
    } else if (scorePercentage >= 60) {  // If the score is 60% or higher, award "Rising Star"
      addAchievement("Rising Star", "⭐")
    }
  
    if (currentQuiz.difficulty === "hard") {  // If the difficulty is hard, award "Hardcore Fan"
      addAchievement("Hardcore Fan", "💪")
    }
  
    if (currentQuiz.timeLeft > 0) {  // If there is time left, award "Speed Demon"
      addAchievement("Speed Demon", "⚡")
    }
  
    if (currentQuiz.movie === "General" && scorePercentage >= 70) {  // If the movie is General and the score is 70% or higher, award "Cinephile"
      addAchievement("Cinephile", "🎥")
    }
  }
  
  // This function adds an achievement to the achievements list
  function addAchievement(title, emoji) {
    const achievement = document.createElement("div")  // Creates a new div for the achievement
    achievement.classList.add("achievement")  // Adds the 'achievement' class to the achievement div
    achievement.textContent = `${emoji} ${title}`  // Sets the text of the achievement (with emoji and title)
    achievementsDiv.appendChild(achievement)  // Appends the achievement div to the achievements div
  }
  
  // This function resets the quiz to its initial state
  function resetQuiz() {
    quizResult.classList.add("hidden")  // Hides the result screen
    quizSetup.classList.remove("hidden")  // Shows the quiz setup screen
    movieDropdown.value = ""  // Resets the movie dropdown value
    difficultyButtons.forEach((btn) => btn.classList.remove("selected"))  // Removes the 'selected' class from all difficulty buttons
    startQuizButton.disabled = true  // Disables the start quiz button until both movie and difficulty are selected
  }
  
  // Initialize the quiz by calling the initializeQuiz function
  initializeQuiz()
  
  // This section sets up the theme switch functionality
  document.addEventListener('DOMContentLoaded', function() {
    const themeSwitch = document.getElementById('theme-switch');  // Grabs the theme switch checkbox
    const body = document.body;  // Grabs the body element
  
    themeSwitch.addEventListener('change', function() {  // Adds an event listener for changes to the theme switch
        if (this.checked) {  // If the switch is checked (light theme)
            body.classList.add('light-theme');  // Adds the light-theme class to the body
            body.classList.remove('dark-theme');  // Removes the dark-theme class
        } else {  // If the switch is unchecked (dark theme)
            body.classList.add('dark-theme');  // Adds the dark-theme class to the body
            body.classList.remove('light-theme');  // Removes the light-theme class
        }
    });
  
    body.classList.add('dark-theme');  // Default theme is dark
    themeSwitch.checked = false; // Sets the theme switch to the off (dark) state by default
  });
  
  // Initialize theme from local storage
  const savedTheme = localStorage.getItem("theme") || "dark"  // Gets the saved theme from localStorage (defaults to dark if not found)
  document.body.classList.add(`${savedTheme}-theme`)  // Applies the saved theme to the body
  toggleTheme()  // Call a function to toggle the theme (not defined in the code, so might be unnecessary)
  