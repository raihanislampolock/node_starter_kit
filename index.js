const express = require('express');
const { AppDataSource } = require('./utils/db-connection');
const employeeController = require('./controllers/employeeController');

const app = express();
const port = 3000;
app.use(express.json());

// Default route
app.get('/', (req, res) => {
    return res.send('Employee Management API');
});

// API route to add an employee
app.post('/employees', employeeController.addEmployee);

// Start server after database initialization
AppDataSource.initialize()
    .then(() => {
        console.log('Database initialized successfully.');
        app.listen(port, () => {
            console.log(`Listening on port ${port}`);
        });
    })
    .catch((error) => {
        console.error('Error initializing the database:', error);
        process.exit(1);
    });
