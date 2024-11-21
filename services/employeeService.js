const { console } = require('inspector');
const employeeRepository = require('../repositories/employeeRepository');
const addEmployee =  (employeeData) => {
    const { name, email } = employeeData;

    try {
        console.log('Checking existing employee...');
        return employeeRepository.findByEmail(email).then((existingEmployee) => {
            if (existingEmployee) {
                return 'Employee already exists.'
            } else {
                return 'No existing employee found, adding new one.'
            }
        })
        
        console.log('Existing employee:', existingEmployee);  // Debugging output
        


        // const newEmployee = await employeeRepository.createEmployee({ name, email });
        // console.log(`Employee ${newEmployee.name} added successfully!`);
        // return `Employee ${newEmployee.name} added successfully!`;

    } catch (error) {
        console.log('Error:', error);
    }
};


module.exports = { addEmployee };

