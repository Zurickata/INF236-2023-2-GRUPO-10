import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../database.js";

class Patient extends Sequelize.Model {
	static associate(models) {
		Patient.hasMany(models.MedicalAppointment,{
			foreingKey: "rut_patient",
		})
	}
};

Patient.init({
	rut: {
		type: DataTypes.STRING,
		primaryKey: true,
	},
	name: DataTypes.STRING,
	lastname: DataTypes.STRING,
	password: DataTypes.STRING,
	birthdate: DataTypes.DATEONLY,
	allergies: DataTypes.ARRAY(DataTypes.STRING),
	fonasa: DataTypes.STRING,
	address: DataTypes.STRING,
	phone_number: DataTypes.STRING
	}, {
		sequelize,
		timestamps: false,
	}
);

export default Patient;