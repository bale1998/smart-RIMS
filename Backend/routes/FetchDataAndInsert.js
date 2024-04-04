const express = require('express');
const router = express.Router();
const { Pool } = require('pg');

// PostgreSQL database configuration
const pool = new Pool({
    user: 'postgres',  // Replace with your PostgreSQL username
    host: 'localhost',       // Use 'localhost' or '127.0.0.1' for local connections
    database: 'postgres',
    password: 'QWERT',  // Replace with your PostgreSQL password
    port: 5432,              // Default PostgreSQL port
});

// Middleware function to fetch potholes data from the database
router.get('/', async function(req, res, next) {
    try {
        // Fetch potholes data from the database
        const query = 'SELECT * FROM pothole';
        const { rows } = await pool.query(query);

        console.log('Potholes Data:', rows); // Log the fetched data
        
        // Send the fetched data as a response
        res.json(rows);
    } catch (error) {
        console.error('Error fetching potholes data:', error.message);
        next(error); // Pass the error to the error handling middleware
    }
});

module.exports = router;

