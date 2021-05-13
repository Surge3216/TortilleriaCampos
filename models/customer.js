module.exports = (sequelize, DataTypes) => {
    const Customer = sequelize.define('Customer', {
        companyName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        contactName: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        emailAddress: {
            type: DataTypes.STRING,
        },
        streetAddress: {
            type: DataTypes.STRING,
        },
        streetAddressL2: {
            type: DataTypes.STRING,
        },
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zipCode: {
            type: DataTypes.INTEGER,
        },
	relationshipStatus: {
	    type: DataTypes.BOOLEAN,
	},
	customerNotes: {
	    type: DataTypes.STRING,
	},
    });
    Customer.associate = (models) => {
        // Associating customer with orders
        // When a customer is deleted, also delete any associated orders
        Customer.hasMany(models.Orders, {
            onDelete: 'cascade',
        });
    };

    return Customer;
};