const Sequelize = require("sequelize");
const db = require("./db");
// ...and give them some nice associations here!
const Artist = db.define("artist", {
	name: {
		type: Sequelize.STRING,
		allowNull: false,
	},
});

module.exports = Artist;
