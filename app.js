// Declare variables and get references to HTML elements
const searchInput = document.getElementById("searchInput") // Gets the search input field from the DOM
const resultsGrid = document.getElementById("resultsGrid") // Gets the container element where search results will be displayed
const searchType = "all" // Sets the default search type to "all" (both movies and TV shows)

// Function to clear search results
function clearResults() {
  resultsGrid.innerHTML = "" // Empties the results container by setting its HTML content to an empty string
}

// Function to show or hide the loading indicator
function showLoading(isLoading) {
  const loadingIndicator = document.getElementById("loadingIndicator") // Gets the loading spinner/indicator element
  if (loadingIndicator) {
    // Checks if the loading indicator element exists in the DOM
    loadingIndicator.style.display = isLoading ? "block" : "none" // Shows the indicator if isLoading is true, hides it otherwise
  }
}

// Function to display search results
function displaySearchResults(results) {
  results.forEach((result) => {
    const resultDiv = document.createElement("div") // Creates a new div element for each search result
    resultDiv.classList.add("result-item") // Adds the "result-item" CSS class to style the result

    // Extract relevant data from the result
    const title = result.title || result.name // Uses title for movies, name for TV shows (API returns different properties)
    const mediaType = result.media_type // Gets the type of media (movie or tv)
    const posterPath = result.poster_path // Gets the path to the poster image

    // If there is a poster, use it; otherwise, use a placeholder image
    const imageURL = posterPath ? `https://image.tmdb.org/t/p/w200${posterPath}` : "placeholder_image_url.png"

    // Set the HTML content for the result item
    resultDiv.innerHTML = `
      <img src="${imageURL}" alt="${title}">
      <p>${title} (${mediaType})</p>
    ` // Creates the HTML structure for each result with image and title

    // Add the result to the results grid
    resultsGrid.appendChild(resultDiv) // Adds the newly created result div to the results container
  })
}

// Function to search for movies and TV series
async function searchMoviesAndSeries() {
  const query = searchInput.value.trim() // Gets the search term and removes whitespace from both ends
  if (query === "") {
    clearResults() // If the search input is empty, clear all results
    return // Exit the function early
  }

  showLoading(true) // Show the loading indicator while fetching data
  resultsGrid.innerHTML = "" // Clear any previous search results

  try {
    // Fetch search results from The Movie Database (TMDB) API
    const tmdbResponse = await fetch(
      `https://api.themoviedb.org/3/search/multi?api_key=83df9990c0fd43ceae098f683fcc80c2&query=${query}&include_adult=false`
    ) // Makes an API request to TMDB with the search query
    const tmdbData = await tmdbResponse.json() // Parses the JSON response from the API

    console.log("TMDB Data:", tmdbData) // Logs the API response data for debugging purposes

    // Filter results based on the selected search type
    const filteredResults = tmdbData.results.filter(
      (result) =>
        (searchType === "all" && (result.media_type === "movie" || result.media_type === "tv")) || // Include both movies and TV shows if "all" is selected
        (searchType === "movie" && result.media_type === "movie") || // Include only movies if "movie" is selected
        (searchType === "tv" && result.media_type === "tv") // Include only TV shows if "tv" is selected
    ) // Filters the results based on the current search type

    console.log("Filtered Results:", filteredResults) // Logs the filtered results for debugging

    if (filteredResults.length === 0) {
      // If no results match the filter criteria
      resultsGrid.innerHTML = "<p>No results found.</p>" // Display a "no results" message
      showLoading(false) // Hide the loading indicator
      return // Exit the function
    }

    // Display the filtered results
    displaySearchResults(filteredResults) // Call the function to display the filtered results
  } catch (error) {
    // Handle errors (e.g., network issues)
    console.error("Error fetching data:", error) // Log the error to the console
    resultsGrid.innerHTML = "<p>Error fetching results. Please try again later.</p>" // Show an error message to the user
  } finally {
    showLoading(false) // Hide the loading indicator whether the request succeeded or failed
  }
}

// Function to toggle between light and dark themes
function toggleTheme() {
  const body = document.body // Get reference to the document's body element
  const isDark = body.classList.contains("dark-theme") // Check if dark mode is currently active

  // Toggle between dark and light themes
  body.classList.toggle("dark-theme", !isDark) // Add dark-theme class if it's not already there, remove it if it is
  body.classList.toggle("light-theme", isDark) // Add light-theme class if dark mode was active, remove it if not

  // Save the theme preference in local storage
  localStorage.setItem("theme", isDark ? "light" : "dark") // Store the opposite of current theme as the new preference

  // Update CSS variables to match the selected theme
  document.documentElement.style.setProperty("--background", isDark ? "#f8fafc" : "#0f172a") // Set background color based on theme
  document.documentElement.style.setProperty("--text-color", isDark ? "#0f172a" : "#f8fafc") // Set text color based on theme
  document.documentElement.style.setProperty("--card-background", isDark ? "#ffffff" : "#1e293b") // Set card background color based on theme
  // Additional color updates can be added here if needed
}

// Initialize theme
const savedTheme = localStorage.getItem("theme") || "dark" // Get saved theme from localStorage or default to "dark"
document.body.classList.add(`${savedTheme}-theme`) // Apply the saved theme class to the body
toggleTheme() // Apply the saved theme colors

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("search-input") // Get the search input element
  const moviesButton = document.getElementById("movies") // Get the movies filter button
  const seriesButton = document.getElementById("series") // Get the series filter button
  const allButton = document.getElementById("all") // Get the "all" filter button
  const resultsTitle = document.getElementById("results-title") // Get the element that displays the results title
  const resultsGrid = document.getElementById("results-grid") // Get the container for search results
  const themeSwitch = document.getElementById("theme-switch") // Get the theme toggle switch

  let searchType = "all" // Initialize search type to show all results
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [] // Load favorites from localStorage or initialize as empty array

  // Theme switching functionality
  function toggleTheme() {
    const body = document.body // Get the body element
    const isDark = body.classList.contains("dark-theme") // Check if dark theme is currently active

    body.classList.toggle("dark-theme", !isDark) // Toggle dark theme class
    body.classList.toggle("light-theme", isDark) // Toggle light theme class

    localStorage.setItem("theme", isDark ? "light" : "dark") // Save theme preference to localStorage

    // Update colors for specific elements
    document.documentElement.style.setProperty("--background", isDark ? "#f8fafc" : "#0f172a") // Update background color
    document.documentElement.style.setProperty("--text-color", isDark ? "#0f172a" : "#f8fafc") // Update text color
    document.documentElement.style.setProperty("--card-background", isDark ? "#ffffff" : "#1e293b") // Update card background color
    // Add more color updates as needed
  }

  // Initialize theme
  const savedTheme = localStorage.getItem("theme") || "dark" // Get saved theme or default to dark
  document.body.classList.add(`${savedTheme}-theme`) // Apply theme class to body
  if (themeSwitch) {
    themeSwitch.checked = savedTheme === "light" // Set switch state based on saved theme
    themeSwitch.addEventListener("change", toggleTheme) // Add event listener to theme switch
  }
  toggleTheme() // Apply the saved theme

  // Search functionality
  if (moviesButton) moviesButton.addEventListener("click", () => setSearchType("movie")) // Add click handler for movies button
  if (seriesButton) seriesButton.addEventListener("click", () => setSearchType("tv")) // Add click handler for series button
  if (allButton) allButton.addEventListener("click", () => setSearchType("all")) // Add click handler for all button

  function setSearchType(type) {
    searchType = type // Update the current search type
    setActiveButton(document.getElementById(type)) // Highlight the active button
    updateLayout() // Update the UI layout based on search type
    searchMoviesAndSeries() // Perform a new search with the updated type
  }

  function setActiveButton(button) {
    const buttons = document.querySelectorAll(".search-option, .filter-option") // Get all filter buttons
    buttons.forEach((btn) => {
      btn.classList.remove("active") // Remove active class from all buttons
      btn.style.transform = "scale(1)" // Reset the scale of all buttons
    })
    if (button) {
      button.classList.add("active") // Add active class to the selected button
      button.style.transform = "scale(1.1)" // Slightly enlarge the selected button
    }
  }

  function updateLayout() {
    if (resultsTitle) {
      resultsTitle.textContent = searchType === "all" ? "All Results" : searchType === "movie" ? "Movies" : "Series" // Update the results title
    }
    if (resultsGrid) {
      resultsGrid.className = searchType === "all" ? "all-results" : "results-grid" // Update the grid layout class
    }
  }

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      if (searchInput.value.trim() !== "") {
        searchMoviesAndSeries() // Perform search if input is not empty
      } else {
        clearResults() // Clear results if input is empty
      }
    })
  }

  function showLoading(show) {
    const loadingAnimation = document.getElementById("loading-animation") // Get loading animation element
    if (loadingAnimation) {
      loadingAnimation.classList.toggle("hidden", !show) // Show or hide the loading animation
    }
  }

  async function searchMoviesAndSeries() {
    const query = searchInput.value.trim() // Get and trim the search query
    if (query === "") {
      clearResults() // Clear results if query is empty
      return // Exit function
    }

    showLoading(true) // Show loading animation
    resultsGrid.innerHTML = "" // Clear previous results

    try {
      const tmdbResponse = await fetch(
        `https://api.themoviedb.org/3/search/multi?api_key=83df9990c0fd43ceae098f683fcc80c2&query=${query}&include_adult=false`,
      ) // Fetch search results from TMDB API
      const tmdbData = await tmdbResponse.json() // Parse JSON response

      console.log("TMDB Data:", tmdbData) // Log API response for debugging

      const filteredResults = tmdbData.results.filter(
        (result) =>
          (searchType === "all" && (result.media_type === "movie" || result.media_type === "tv")) ||
          (searchType === "movie" && result.media_type === "movie") ||
          (searchType === "tv" && result.media_type === "tv"),
      ) // Filter results based on selected search type

      console.log("Filtered Results:", filteredResults) // Log filtered results for debugging

      if (filteredResults.length === 0) {
        resultsGrid.innerHTML = "<p>No results found.</p>" // Display message if no results
        showLoading(false) // Hide loading animation
        return // Exit function
      }

      const detailedResults = await Promise.all(
        filteredResults.map(async (result) => {
          const title = result.media_type === "movie" ? result.title : result.name // Get title based on media type
          const omdbResponse = await fetch(`https://www.omdbapi.com/?apikey=bd73e151&t=${encodeURIComponent(title)}`) // Fetch additional details from OMDB API
          const omdbData = await omdbResponse.json() // Parse OMDB response
          return { ...result, omdbData } // Combine TMDB and OMDB data
        }),
      ) // Fetch additional details for each result

      console.log("Detailed Results:", detailedResults) // Log detailed results for debugging

      displaySearchResults(detailedResults) // Display the detailed results
    } catch (error) {
      console.error("Error fetching data:", error) // Log any errors
      resultsGrid.innerHTML = "<p>Error fetching results. Please try again later.</p>" // Display error message
    } finally {
      showLoading(false) // Hide loading animation regardless of outcome
    }
  }

  function displaySearchResults(results) {
    resultsGrid.innerHTML = "" // Clear previous results

    if (!results || results.length === 0) {
      resultsGrid.innerHTML = "<p>No results found.</p>" // Display message if no results
      return // Exit function
    }

    if (searchType === "all") {
      const moviesSection = document.createElement("div") // Create container for movies
      moviesSection.className = "results-section" // Add class for styling
      moviesSection.innerHTML = "<h3>Movies</h3><div class='results-grid'></div>" // Add heading and grid container

      const seriesSection = document.createElement("div") // Create container for series
      seriesSection.className = "results-section" // Add class for styling
      seriesSection.innerHTML = "<h3>Series</h3><div class='results-grid'></div>" // Add heading and grid container

      resultsGrid.appendChild(moviesSection) // Add movies section to results
      resultsGrid.appendChild(seriesSection) // Add series section to results
    }

    results.forEach((result) => {
      if (result.media_type === "tv" && (searchType === "tv" || searchType === "all")) {
        const grid =
          searchType === "all" ? resultsGrid.querySelector(".results-section:nth-child(2) .results-grid") : resultsGrid // Get appropriate grid container
        grid.appendChild(createResultElement(result)) // Add TV show to appropriate grid
      } else if (result.media_type === "movie" && (searchType === "movie" || searchType === "all")) {
        const grid =
          searchType === "all" ? resultsGrid.querySelector(".results-section:nth-child(1) .results-grid") : resultsGrid // Get appropriate grid container
        grid.appendChild(createResultElement(result)) // Add movie to appropriate grid
      }
    })
  }

  function createResultElement(result) {
    const element = document.createElement("div") // Create container for result
    element.classList.add("card") // Add card class for styling
    const title = result.media_type === "movie" ? result.title : result.name // Get title based on media type
    const imageUrl = result.poster_path
      ? `https://image.tmdb.org/t/p/w500${result.poster_path}`
      : result.omdbData.Poster || "https://via.placeholder.com/500x750?text=No+Image" // Get poster image or use placeholder

    const isFavorite = favorites.some((fav) => fav.id === result.id) // Check if item is in favorites

    element.innerHTML = `
      <img src="${imageUrl}" alt="${title}">
      <h3>${title}</h3>
      <p>Type: ${result.media_type === "movie" ? "Movie" : "TV Series"}</p>
      <p>Release Date: ${result.release_date || result.first_air_date || result.omdbData.Released || "N/A"}</p>
      <p>Rating: ${result.vote_average ? result.vote_average.toFixed(1) : "N/A"} (TMDB) / ${result.omdbData.imdbRating || "N/A"} (IMDB)</p>
      <p>Genre: ${result.omdbData.Genre || "N/A"}</p>
      <a href="#" class="learn-more" data-id="${result.id}" data-type="${result.media_type}">Learn More</a>
      <i class="favorite fas fa-star ${isFavorite ? "active" : ""}" data-id="${result.id}"></i>
    ` // Create HTML structure for result card

    element.querySelector(".learn-more").addEventListener("click", (e) => {
      e.preventDefault() // Prevent default link behavior
      showDetails(result.id, result.media_type, result.omdbData) // Show details for the selected item
    })

    element.querySelector(".favorite").addEventListener("click", (e) => {
      toggleFavorite(result) // Toggle favorite status
      e.target.classList.toggle("active") // Toggle active class on star icon
    })

    return element // Return the created element
  }

  function toggleFavorite(item) {
    const index = favorites.findIndex((fav) => fav.id === item.id) // Find item in favorites array
    if (index === -1) {
      favorites.push(item) // Add to favorites if not already there
    } else {
      favorites.splice(index, 1) // Remove from favorites if already there
    }
    localStorage.setItem("favorites", JSON.stringify(favorites)) // Save updated favorites to localStorage
    if (window.location.pathname.includes("favorites.html")) {
      updateFavorites() // Update favorites display if on favorites page
    }
  }

  async function showDetails(id, type, omdbData) {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${type}/${id}?api_key=83df9990c0fd43ceae098f683fcc80c2&append_to_response=videos`,
      ) // Fetch detailed information about the selected item
      const data = await response.json() // Parse API response

      const detailsHTML = `
        <a href="#" class="back-button"><i class="fas fa-arrow-left"></i></a>
        <div class="details-container">
          <div class="details-poster">
            <img src="https://image.tmdb.org/t/p/w500${data.poster_path}" alt="${data.title || data.name}">
          </div>
          <div class="details-info">
            <h2>${data.title || data.name}</h2>
            <p><strong>Type:</strong> ${type === "movie" ? "Movie" : "TV Series"}</p>
            <p><strong>Release Date:</strong> ${data.release_date || data.first_air_date || omdbData.Released || "N/A"}</p>
            <p><strong>Rating:</strong> ${data.vote_average ? data.vote_average.toFixed(1) : "N/A"} (TMDB) / ${omdbData.imdbRating || "N/A"} (IMDB)</p>
            <p><strong>Genre:</strong> ${omdbData.Genre || data.genres.map((g) => g.name).join(", ")}</p>
            <p><strong>Director:</strong> ${omdbData.Director || "N/A"}</p>
            <p><strong>Cast:</strong> ${omdbData.Actors || "N/A"}</p>
            <p><strong>Overview:</strong> ${data.overview}</p>
            ${data.runtime ? `<p><strong>Runtime:</strong> ${data.runtime} minutes</p>` : ""}
            ${data.number_of_seasons ? `<p><strong>Seasons:</strong> ${data.number_of_seasons}</p>` : ""}
            ${
              data.videos.results.length > 0
                ? `<p><strong>Trailer:</strong> <a href="https://www.youtube.com/watch?v=${data.videos.results[0].key}" target="_blank">Watch Trailer</a></p>`
                : ""
            }
          </div>
        </div>
      ` // Create HTML for details view

      document.body.innerHTML = detailsHTML // Replace page content with details view

      document.querySelector(".back-button").addEventListener("click", (e) => {
        e.preventDefault() // Prevent default link behavior
        window.location.reload() // Reload page to go back to search results
      })
    } catch (error) {
      console.error("Error fetching details:", error) // Log any errors
    }
  }

  function clearResults() {
    if (resultsGrid) {
      resultsGrid.innerHTML = "" // Clear all results
    }
  }

  // Favorites functionality
  const favoritesGrid = document.getElementById("favorites-grid") // Get favorites grid container
  const favMoviesBtn = document.getElementById("fav-movies") // Get favorites movies filter button
  const favSeriesBtn = document.getElementById("fav-series") // Get favorites series filter button
  const favAllBtn = document.getElementById("fav-all") // Get favorites all filter button
  const sortButton = document.getElementById("sort-button") // Get sort button
  const sortOptions = document.getElementById("sort-options") // Get sort options container
  const currentSortSpan = document.getElementById("current-sort") // Get element showing current sort method

  if (favoritesGrid) {
    let currentFavType = "all" // Initialize favorites filter type
    let currentSortMethod = "rating" // Initialize sort method

    function updateFavorites() {
      const filteredFavorites = favorites.filter((item) => {
        if (currentFavType === "all") return true // Show all favorites if "all" is selected
        return item.media_type === (currentFavType === "movies" ? "movie" : "tv") // Filter by media type
      })

      filteredFavorites.sort((a, b) => {
        switch (currentSortMethod) {
          case "rating":
            return b.vote_average - a.vote_average // Sort by rating (descending)
          case "name":
            return (a.title || a.name).localeCompare(b.title || b.name) // Sort alphabetically
          case "date":
            const dateA = new Date(a.release_date || a.first_air_date) // Get release date
            const dateB = new Date(b.release_date || b.first_air_date) // Get release date
            return dateB - dateA // Sort by date (newest first)
          default:
            return 0 // No sorting
        }
      })

      favoritesGrid.innerHTML = "" // Clear favorites grid
      filteredFavorites.forEach((item) => {
        favoritesGrid.appendChild(createResultElement(item)) // Add each favorite to the grid
      })
    }

    favMoviesBtn.addEventListener("click", () => {
      setActiveButton(favMoviesBtn) // Highlight movies button
      currentFavType = "movies" // Set filter to movies
      updateFavorites() // Update favorites display
    })

    favSeriesBtn.addEventListener("click", () => {
      setActiveButton(favSeriesBtn) // Highlight series button
      currentFavType = "series" // Set filter to series
      updateFavorites() // Update favorites display
    })

    favAllBtn.addEventListener("click", () => {
      setActiveButton(favAllBtn) // Highlight all button
      currentFavType = "all" // Set filter to all
      updateFavorites() // Update favorites display
    })

    sortButton.addEventListener("click", () => {
      sortOptions.classList.toggle("show") // Show/hide sort options
    })

    sortOptions.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
        currentSortMethod = e.target.dataset.sort // Update sort method
        currentSortSpan.textContent = e.target.textContent // Update displayed sort method
        sortOptions.classList.remove("show") // Hide sort options
        updateFavorites() // Update favorites display with new sort
      }
    })

    document.addEventListener("click", (e) => {
      if (!sortButton.contains(e.target) && !sortOptions.contains(e.target)) {
        sortOptions.classList.remove("show") // Hide sort options when clicking outside
      }
    })

    updateFavorites() // Initialize favorites display
  }

  updateLayout() // Initialize layout

  // Profile functionality
  const signInForm = document.getElementById("sign-in-form") // Get sign in form
  const signUpForm = document.getElementById("sign-up-form") // Get sign up form
  const profileView = document.getElementById("profile-view") // Get profile view
  const editProfileForm = document.getElementById("edit-profile-form") // Get edit profile form

  const showSignUp = document.getElementById("show-signup") // Get show signup link
  const showSignIn = document.getElementById("show-signin") // Get show signin link
  const editProfileBtn = document.getElementById("edit-profile") // Get edit profile button
  const cancelEditBtn = document.getElementById("cancel-edit") // Get cancel edit button
  const signOutBtn = document.getElementById("sign-out") // Get sign out button

  let currentUser = JSON.parse(localStorage.getItem("currentUser")) // Get current user from localStorage

  function updateProfileView() {
    if (currentUser) {
      document.getElementById("profile-name").textContent = `${currentUser.firstname} ${currentUser.surname}` // Set profile name
      document.getElementById("profile-email").textContent = currentUser.email // Set profile email
      document.getElementById("profile-genre").textContent = currentUser.favoriteGenre // Set favorite genre
      document.getElementById("profile-bio").textContent = currentUser.bio || "No bio provided" // Set bio or default text

      signInForm.classList.add("hidden") // Hide sign in form
      signUpForm.classList.add("hidden") // Hide sign up form
      profileView.classList.remove("hidden") // Show profile view
    } else {
      signInForm.classList.remove("hidden") // Show sign in form
      signUpForm.classList.add("hidden") // Hide sign up form
      profileView.classList.add("hidden") // Hide profile view
    }
  }

  function showEditForm() {
    document.getElementById("edit-firstname").value = currentUser.firstname // Set first name in edit form
    document.getElementById("edit-surname").value = currentUser.surname // Set surname in edit form
    document.getElementById("edit-email").value = currentUser.email // Set email in edit form
    document.getElementById("edit-genre").value = currentUser.favoriteGenre // Set favorite genre in edit form
    document.getElementById("edit-bio").value = currentUser.bio || "" // Set bio in edit form

    profileView.classList.add("hidden") // Hide profile view
    editProfileForm.classList.remove("hidden") // Show edit form
  }

  document.getElementById("signin-form").addEventListener("submit", (e) => {
    e.preventDefault() // Prevent form submission
    const email = document.getElementById("email").value // Get email input
    const password = document.getElementById("password").value // Get password input

    const users = JSON.parse(localStorage.getItem("users")) || [] // Get users from localStorage
    const user = users.find((u) => u.email === email && u.password === password) // Find matching user

    if (user) {
      currentUser = user // Set current user
      localStorage.setItem("currentUser", JSON.stringify(currentUser)) // Save current user to localStorage
      updateProfileView() // Update profile view
    } else {
      showError("Invalid email or password") // Show error message
    }
  })

  document.getElementById("signup-form").addEventListener("submit", (e) => {
    e.preventDefault() // Prevent form submission
    const newUser = {
      firstname: document.getElementById("firstname").value, // Get first name input
      surname: document.getElementById("surname").value, // Get surname input
      email: document.getElementById("signup-email").value, // Get email input
      password: document.getElementById("signup-password").value, // Get password input
      favoriteGenre: document.getElementById("favorite-genre").value, // Get favorite genre input
      bio: document.getElementById("bio").value, // Get bio input
    }

    const users = JSON.parse(localStorage.getItem("users")) || [] // Get users from localStorage
    if (users.some((u) => u.email === newUser.email)) {
      showError("Email already exists") // Show error if email already exists
      return // Exit function
    }

    users.push(newUser) // Add new user to users array
    localStorage.setItem("users", JSON.stringify(users)) // Save updated users to localStorage

    currentUser = newUser // Set current user to new user
    localStorage.setItem("currentUser", JSON.stringify(currentUser)) // Save current user to localStorage
    updateProfileView() // Update profile view
    showSuccess("Account created successfully") // Show success message
  })

  document.getElementById("edit-form").addEventListener("submit", (e) => {
    e.preventDefault() // Prevent form submission
    const updatedUser = {
      ...currentUser, // Keep existing user properties
      firstname: document.getElementById("edit-firstname").value, // Update first name
      surname: document.getElementById("edit-surname").value, // Update surname
      email: document.getElementById("edit-email").value, // Update email
      favoriteGenre: document.getElementById("edit-genre").value, // Update favorite genre
      bio: document.getElementById("edit-bio").value, // Update bio
    }

    const users = JSON.parse(localStorage.getItem("users")) || [] // Get users from localStorage
    const index = users.findIndex((u) => u.email === currentUser.email) // Find current user in users array
    if (index !== -1) {
      users[index] = updatedUser // Update user in users array
      localStorage.setItem("users", JSON.stringify(users)) // Save updated users to localStorage
    }

    currentUser = updatedUser // Update current user
    localStorage.setItem("currentUser", JSON.stringify(currentUser)) // Save updated current user to localStorage
    updateProfileView() // Update profile view
    editProfileForm.classList.add("hidden") // Hide edit form
    profileView.classList.remove("hidden") // Show profile view
    showSuccess("Profile updated successfully") // Show success message
  })

  showSignUp.addEventListener("click", (e) => {
    e.preventDefault() // Prevent default link behavior
    signInForm.classList.add("hidden") // Hide sign in form
    signUpForm.classList.remove("hidden") // Show sign up form
  })

  showSignIn.addEventListener("click", (e) => {
    e.preventDefault() // Prevent default link behavior
    signUpForm.classList.add("hidden") // Hide sign up form
    signInForm.classList.remove("hidden") // Show sign in form
  })

  editProfileBtn.addEventListener("click", showEditForm) // Add click handler for edit profile button

  cancelEditBtn.addEventListener("click", () => {
    editProfileForm.classList.add("hidden") // Hide edit form
    profileView.classList.remove("hidden") // Show profile view
  })

  signOutBtn.addEventListener("click", () => {
    currentUser = null // Clear current user
    localStorage.removeItem("currentUser") // Remove current user from localStorage
    updateProfileView() // Update profile view
    showSuccess("Signed out successfully") // Show success message
  })

  function showError(message) {
    const errorDiv = document.createElement("div") // Create a new div for the error message
    errorDiv.className = "error-message" // Add CSS class for styling the error message
    errorDiv.textContent = message // Set the error message text
    document.querySelector(".profile-container").prepend(errorDiv) // Add the error message to the top of the profile container
    setTimeout(() => errorDiv.remove(), 3000) // Remove the error message after 3 seconds
  }

  function showSuccess(message) {
    const successDiv = document.createElement("div") // Create a new div for the success message
    successDiv.className = "success-message" // Add CSS class for styling the success message
    successDiv.textContent = message // Set the success message text
    document.querySelector(".profile-container").prepend(successDiv) // Add the success message to the top of the profile container
    setTimeout(() => successDiv.remove(), 3000) // Remove the success message after 3 seconds
  }

  updateProfileView() // Initialize the profile view based on current user state
})

  // Quiz functionality
  //const startQuizButton = document.getElementById("start-quiz-button")
 // const quizSetup = document.getElementById("quiz-setup")
  //const quizBanner = document.querySelector(".quiz-banner")

  //if (startQuizButton) {
    //startQuizButton.addEventListener("click", () => {
     // quizBanner.classList.add("hidden")
      //quizSetup.classList.remove("hidden")
   // })
  //}

  












