module.exports = (sequelize, DataTypes) => {
    const Users = sequelize.define('Users', {
	userType: {
            type: DataTypes.STRING,
        },
        userName: {
            type: DataTypes.STRING,
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
        city: {
            type: DataTypes.STRING,
        },
        state: {
            type: DataTypes.STRING,
        },
        zip: {
            type: DataTypes.INTEGER,
        },
        userStatus: {
            type: DataTypes.BOOLEAN,
        },
	userNotes: {
            type: DataTypes.STRING,
        },

    });

    return Users;
};