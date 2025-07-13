const newman = require('newman');
require('dotenv').config(); // Load environment variables from .env file

// Build the collection URL using the API key from environment variables
const collectionUrl = `https://api.postman.com/collections/46154791-4379bc5d-5499-4f7a-9706-b106bdd9db7c?access_key=${process.env.pmatKey}`;

newman.run({
    collection: collectionUrl,
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html',
        }
    }
}, function (err) {
    if (err) {
        throw err;
    }
    console.log('✅ Collection run complete!');
});
