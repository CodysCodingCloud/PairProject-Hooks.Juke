const Sequelize = require("sequelize");
const db = require("./db");
// ...and give them some nice associations here!
const Song = db.define("song", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
	audioUrl: {
		type: Sequelize.STRING,
	},
	genre: {
		type: Sequelize.STRING,
	},
});

module.exports = Song;
