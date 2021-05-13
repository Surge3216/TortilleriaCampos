module.exports = (sequelize, DataTypes) => {
    const Orders = sequelize.define('Orders', {
        userID: {
            type: DataTypes.INTEGER,
        },
	    orderStatus: {
            type: DataTypes.STRING,
        },
        dateCreated: {
            type: DataTypes.DATE,
        },
        deliveryDate: {
            type: DataTypes.DATE,
        },
        dateClosed: {
            type: DataTypes.DATE,
        },
        orderNotes: {
            type: DataTypes.STRING,
        },
        cornQuantity: {
            type: DataTypes.INTEGER,
        },
        flourQuantity: {
            type: DataTypes.STRING,
        },
        dueDate: {
            type: DataTypes.DATE,
        },
        rate: {
            type: DataTypes.DECIMAL,
        },

    });

    Orders.associate = (models) => {
        // We're saying that a order should belong to an customer
        // An order can't be created without an customer due to the foreign key constraint
        Orders.belongsTo(models.Customer, {
            foreignKey: {
                allowNull: false,
            },
        });
    };

    return Orders;
};