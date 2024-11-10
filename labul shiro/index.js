//Login
function validateForm() {
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const error = document.getElementById('error');
  const loginContainer = document.getElementById('loginContainer');

  // Reset error message
  error.textContent = "";

  // Check if fields are filled
  if (!username || !password) {
    error.textContent = "Please fill in both fields.";
    return false;
  }

  // Authentication check
  if (username === "1" && password === "1") {
    alert("Login successful!");

    window.location.href = "Home.html";  // Redirect to Home.html
    return false;  // Prevent form submission as we're using JS redirect
  } else {
    error.textContent = "Invalid username or password.";
    return false;
  }
}


function changeTheme() {
  const theme = document.getElementById("theme-select").value;
  document.body.classList.remove("light-theme", "dark-theme", "neutral-theme", "pastel-theme");
  document.body.classList.add(`${theme}-theme`);
}



document.addEventListener('DOMContentLoaded', function() {
  // Entry form code
  const entryForm = document.querySelector(`#entryForm`);
  const entryResultRow = document.querySelector(`.history`);
  const getEntryTitle = document.getElementsByClassName(`entry-title`);
  const getEntryText = document.getElementsByClassName(`entry-box`);

  function addEntry(x) {
    x.preventDefault();
    const d = new Date();
    const month = new Array("January","February","March","April","May","June","July","August","September","October","November","December");
    const n = month[d.getMonth()];
    const day = d.getDate();
    const year = d.getFullYear();

    const entryDiv = document.createElement(`div`);
    entryDiv.className = `single-entry-div`;
    entryResultRow.appendChild(entryDiv);

    const entryHeading = document.createElement(`h3`);
    entryHeading.className = `single-entry-heading`;
    entryHeading.textContent = getEntryTitle[0].value;
    entryDiv.appendChild(entryHeading);

    const entryDate = document.createElement(`p`);
    entryDate.className = `single-entry-date`;
    entryDate.textContent = `Date Added: ${day} ${n} ${year}`;
    entryDiv.appendChild(entryDate);

    const entryParagraph = document.createElement(`p`);
    entryParagraph.className = `single-entry-text`;
    entryParagraph.textContent = getEntryText[0].value;
    entryDiv.appendChild(entryParagraph);
    getEntryText[0].value = ``;
  }
  entryForm.addEventListener(`submit`, addEntry);
});
// Example data for illustration
const moodData = {
  "Happy": 5,
  "Relaxed": 3,
  "Focused": 2,
  "Excited": 4,
  "Calm": 1
};

// Function to create or update the pie chart
function renderMoodChart(moodData) {
  const ctx = document.getElementById('moodChart').getContext('2d');
  
  // Remove existing chart instance if it exists
  if (window.moodChart) {
      window.moodChart.destroy();
  }
  
  // Create the new pie chart
  window.moodChart = new Chart(ctx, {
      type: 'pie',
      data: {
          labels: Object.keys(moodData),
          datasets: [{
              data: Object.values(moodData),
              backgroundColor: [
                  '#FF6384', // color for Happy
                  '#36A2EB', // color for Relaxed
                  '#FFCE56', // color for Focused
                  '#4BC0C0', // color for Excited
                  '#9966FF'  // color for Calm
              ],
              hoverOffset: 4
          }]
      },
      options: {
          responsive: true,
          plugins: {
              legend: {
                  position: 'top',
              },
              title: {
                  display: true,
                  text: 'Mood Distribution'
              }
          }
      }
  });
}

// Example call to render the chart
renderMoodChart(moodData);
