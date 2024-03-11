const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.static('public'));
app.use(bodyParser.json());

// MongoDB connection URL
const url = 'mongodb://localhost:27017';
const dbName = 'signup';
const collectionName = 'users';

// Endpoint to handle signup requests
app.post('/signup', (req, res) => {
    // Extract user data from request body
    const { username, password } = req.body;

    // Connect to MongoDB
    MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
        if (err) {
            console.error('Error connecting to MongoDB:', err);
            return res.status(500).send('Error connecting to database');
        }

        // Access the database
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert user data into the collection
        collection.insertOne({ username, password }, (err, result) => {
            if (err) {
                console.error('Error inserting user data:', err);
                return res.status(500).send('Error inserting user data');
            }
            res.status(201).json({ message: 'User signed up successfully' });
            client.close();
        });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
