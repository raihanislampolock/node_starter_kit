const { EntitySchema } = require("typeorm");

const EmployeeModel = new EntitySchema({
    name: "Employee",           // The name of the entity
    tableName: "employees",      // The table name in the database
    columns: {
        id: {
            type: "int",         // The column type
            primary: true,       // Make this column the primary key
            generated: true,     // Auto-generate the value (e.g., for auto-increment)
        },
        name: {
            type: "varchar",     // The column type
            length: 100,          // Length of the varchar
        },
        email: {
            type: "varchar",     // The column type
            length: 150,          // Length of the varchar
            // unique: true,         // Ensure email is unique
        },
    },
});

module.exports = { EmployeeModel };
