const db = require("./db");
const Artist = require("./Artist");
const Album = require("./Album");
const Song = require("./Song");

// require each of your models here...
Album.belongsTo(Artist);
Artist.hasMany(Album);

Song.belongsTo(Album);
Album.hasMany(Song);

Song.belongsTo(Artist);
Artist.hasMany(Song);

module.exports = {
	db,
	Artist,
	Album,
	Song,
};
