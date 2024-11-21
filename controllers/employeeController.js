const employeeService =require('../services/employeeService');

const addEmployee = async (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).send('Name and email are required.');
    }

    try {
        const result = await employeeService.addEmployee({ name, email});
        res.status(201).send(result);
    } catch (error) {
        console.error('Error in controller:', error);

        if (error.code === 'DUPLICATE_EMAIL') {
            return res.status(400).send(error.message);
        }
        res.status(500).send('An error occurred while adding the employee.')
    }
};

module.exports = {addEmployee};