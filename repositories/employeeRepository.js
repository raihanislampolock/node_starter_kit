const { AppDataSource } = require('../utils/db-connection');
const { EmployeeModel } = require('../Models/employee');

const employeeRepository = {
    findByEmail: async (email) => {
        const employeeRepo = AppDataSource.getRepository(EmployeeModel);
        return employeeRepo.findOneBy({email});
    },

    createEmployee: async (employeeData) => {
        const employeeRepo = AppDataSource.getRepository(EmployeeModel);
        const newEmployee = employeeRepo.create(employeeData);
        return employeeRepo.save(newEmployee);
    },
};

module.exports = employeeRepository;