const { exec } = require('child_process');
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
const port = 7545;
app.use(express.json());

let migrationInProgress = false; // Flag to keep track of migration status

app.get('/migrate', (req, res) => {
  if (migrationInProgress) {
    // If migration is already in progress, return an error response
    return res.status(400).send('Migration is already in progress.');
  }

  migrationInProgress = true; // Set the flag to true to indicate migration started

  exec('truffle migrate', (error, stdout, stderr) => {
    migrationInProgress = false; // Reset the flag once migration is completed

    if (error) {
      console.error(`Error: ${error.message}`);
      return res.status(500).send(`Error: ${error.message}`);
    }

    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    return res.send('Migration completed. Check the console for output.');
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});