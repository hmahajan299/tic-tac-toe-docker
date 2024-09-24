let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let statusDisplay = document.querySelector("#status");

let turn0 = true; // true for player 0 and false for player X
let gameActive = true; // to keep track of the game status

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box, index) => {
    box.addEventListener("click", () => {
        if (box.innerText === "" && gameActive) {
            box.innerText = turn0 ? "0" : "X"; // Set the symbol based on the turn
            box.disabled = true; // Disable the button after click
            checkWinner();
            turn0 = !turn0; // Switch turns
            updateStatus();
        }
    });
});

// Function to check the winner
const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                gameActive = false; // Stop the game if there is a winner
                statusDisplay.innerText = `Player ${pos1Val} Wins!`;
                return;
            }
        }
    }

    // Check for a draw
    if ([...boxes].every(box => box.innerText !== "")) {
        statusDisplay.innerText = "It's a Draw!";
        gameActive = false;
    }
};

// Function to update the status display
const updateStatus = () => {
    statusDisplay.innerText = `Player ${turn0 ? "0" : "X"}'s Turn`;
};

// Reset button functionality
resetBtn.addEventListener("click", () => {
    boxes.forEach(box => {
        box.innerText = ""; // Clear the text
        box.disabled = false; // Enable the buttons
    });
    gameActive = true; // Reset the game status
    turn0 = true; // Reset the turn to player 0
    updateStatus(); // Update the status display
});

// Initialize the status display
updateStatus();
