const router = require("express").Router();
const { Artist, Album, Song } = require("../db");
router.get("/", async (req, res, next) => {
	try {
		const albums = await Album.findAll({ include: Artist });
		console.log(typeof albums);
		res.status(200).send(albums);
	} catch (error) {
		next(err);
	}
});
router.get("/:albumId", async (req, res, next) => {
	try {
		const albumId = req.params.albumId;
		const album = await Album.findByPk(albumId, { include: [Artist, Song] });

		if (album == null) {
			res.status(404);
		} else {
			// console.log(album.dataValues);
			res.send(album);
		}
	} catch (error) {
		next(err);
	}
});
module.exports = router;
