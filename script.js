document.addEventListener('DOMContentLoaded', () => {
    const teamData = {
        '1st-team': [
            { img: 'player1.jpg', name: 'Ben Hadfield', position: 'Wing', age: 23, years: 5, funFact: 'Loves hiking' },
            { img: 'player2.jpg', name: 'Ben Middleton', position: 'Guard', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player3.jpg', name: 'Dhrish Asher', position: 'Point Forward', age: 23, years: 6, funFact: 'Plays guitar' },
            { img: 'player5.jpg', name: 'Jay Yasser', position: 'Center', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player7.jpg', name: 'Jude Williams', position: 'Guard', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player8.jpg', name: 'Lewis Coward', position: 'Wing', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player10.jpg', name: 'Mike Ndhlovu', position: 'Guard', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player11.jpg', name: 'Morgan Biles', position: 'Wing', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player12.jpg', name: 'Morton Lillico', position: 'Forward', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player13.jpg', name: 'Ross Williams', position: 'Guard', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player14.jpg', name: 'Sam Watts', position: 'Guard/Forward', age: 23, years: 14, funFact: 'Plays guitar' },
            { img: 'player16.jpg', name: 'Samet Turkmen', position: 'Guard', age: 27, years: 6, funFact: 'Plays guitar' },
            { img: 'player17.jpg', name: 'Vasco Felix', position: 'Guard', age: 27, years: 6, funFact: 'Plays guitar' },
            // Add more players for 1st team
        ],
        'owner': [
            { img: 'Owner.jpg', name: 'Sam Watts', position: 'Owner', age: 23, years: 3, funFact: 'Avid reader' },
            // Add more players for 2nd team
        ],
        'board-members': [
            { img: 'board member 1.jpg', name: 'Sam Watts', position: 'Guard', age: 23, years: 2, funFact: 'Plays chess' },
            { img: 'board member 2.jpg', name: 'Ben Hadfield', position: 'Forward', age: 26, years: 5, funFact: 'Skateboards' },
            { img: 'board member 3.jpg', name: 'Dhrish Ahser', position: 'Forward', age: 26, years: 5, funFact: 'Skateboards' },
            // Add more players for 3rd team
        ],
        'coaches': [
            { img: 'coach.jpg', name: 'Sam Watts', position: 'Head Coach', age: 23, years: 2, funFact: 'Plays chess' },
            // Add more players for 3rd team
        ],
    };

    const teamContainer = document.getElementById('team-container');

    function displayTeam(team) {
        teamContainer.innerHTML = '';
        team.forEach(member => {
            const div = document.createElement('div');
            div.className = 'team-member';
            div.innerHTML = `
                <img src="${member.img}" alt="${member.name}">
                <h4>${member.name}</h4>
                <p>Position: ${member.position}</p>
                <p>Age: ${member.age}</p>
                <p>Years Played: ${member.years}</p>
                <p>Fun Fact: ${member.funFact}</p>
            `;
            teamContainer.appendChild(div);
        });
    }

    document.querySelectorAll('.dropdown-content a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const selectedTeam = e.target.dataset.team;
            displayTeam(teamData[selectedTeam]);
        });
    });

    // Display 1st Team by default
    displayTeam(teamData['1st-team']);
});
// Example data for demonstration
const upcomingGames = [
    { date: '20/08/2024', opponent: 'Cardiff Met Archers', location: 'Home' },
    { date: '27/01/2025', opponent: 'Newport Fury', location: 'Away' }
];

const previousResults = [
    { date: '2024-05-10', opponent: 'Opponent A', result: 'Win' },
    { date: '2024-05-15', opponent: 'Opponent B', result: 'Loss' }
];

// Function to populate upcoming games
function populateUpcomingGames() {
    const upcomingGamesContainer = document.getElementById('upcomingGamesContainer');
    upcomingGamesContainer.innerHTML = '<ul>';
    upcomingGames.forEach(game => {
        upcomingGamesContainer.innerHTML += `<li>${game.date} vs ${game.opponent} (${game.location})</li>`;
    });
    upcomingGamesContainer.innerHTML += '</ul>';
}

// Function to populate previous results
function populatePreviousResults() {
    const previousResultsContainer = document.getElementById('previousResultsContainer');
    previousResultsContainer.innerHTML = '<ul>';
    previousResults.forEach(result => {
        previousResultsContainer.innerHTML += `<li>${result.date} vs ${result.opponent} (${result.result})</li>`;
    });
    previousResultsContainer.innerHTML += '</ul>';
}

// Call the functions to populate the containers
populateUpcomingGames();
populatePreviousResults();

// Fetch upcoming games from an API
fetch('/api/upcoming-games')
  .then(response => response.json())
  .then(data => {
    const upcomingGamesContainer = document.getElementById('upcomingGamesContainer');
    data.forEach(game => {
      const gameElement = document.createElement('div');
      gameElement.textContent = `${game.homeTeam} vs ${game.awayTeam} - ${game.date}`;
      upcomingGamesContainer.appendChild(gameElement);
    });
  })
  .catch(error => console.error('Error fetching upcoming games:', error));

// Fetch previous results from an API
fetch('/api/previous-results')
  .then(response => response.json())
  .then(data => {
    const previousResultsContainer = document.getElementById('previousResultsContainer');
    data.forEach(result => {
      const resultElement = document.createElement('div');
      resultElement.textContent = `${result.homeTeam} ${result.homeScore} - ${result.awayScore} ${result.awayTeam} (${result.date})`;
      previousResultsContainer.appendChild(resultElement);
    });
  })
  .catch(error => console.error('Error fetching previous results:', error));
  document.addEventListener("DOMContentLoaded", function() {
    var dropdown = document.querySelector(".dropbtn");
    var dropdownContainer = document.querySelector(".dropdown-container");

    dropdown.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent the default link behavior
        dropdownContainer.classList.toggle("show");
    });

    // Close the dropdown if clicked outside
    window.addEventListener("click", function(event) {
        if (!dropdown.contains(event.target) && !dropdownContainer.contains(event.target)) {
            dropdownContainer.classList.remove("show");
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Google Sheets API setup
    const apiKey = 'YOUR_API_KEY'; // Replace with your Google Sheets API key
    const spreadsheetId = 'YOUR_SPREADSHEET_ID'; // Replace with your Google Spreadsheet ID
    const upcomingGamesRange = 'UpcomingGames!A1:C10'; // Adjust the range for upcoming games
    const previousResultsRange = 'PreviousResults!A1:C10'; // Adjust the range for previous results

    // Function to fetch and display data
    function fetchData(range, containerId) {
        fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}?key=${apiKey}`)
            .then(response => response.json())
            .then(data => {
                const rows = data.values;
                if (rows && rows.length > 0) {
                    const container = document.getElementById(containerId);
                    let table = '<table class="schedule"><thead><tr>';
                    // Add table headers
                    rows[0].forEach(header => {
                        table += `<th>${header}</th>`;
                    });
                    table += '</tr></thead><tbody>';
                    // Add table rows
                    for (let i = 1; i < rows.length; i++) {
                        table += '<tr>';
                        rows[i].forEach(cell => {
                            table += `<td>${cell}</td>`;
                        });
                        table += '</tr>';
                    }
                    table += '</tbody></table>';
                    container.innerHTML = table;
                }
            })
            .catch(error => console.error('Error fetching data from Google Sheets:', error));
    }

    // Fetch and display upcoming games and previous results
    fetchData(upcomingGamesRange, 'upcomingGamesContainer');
    fetchData(previousResultsRange, 'previousResultsContainer');
});
