import React from "react";
import AlbumAll from "./components/album-all";
import Sidebar from "./components/sidebar";
import Player from "./components/player";
import AlbumSingle from "./components/album-single";
import axios from "axios";

// const albumList = [
// 	{
// 		id: 1,
// 		name: "No Dummy",
// 		artworkUrl: "default-album.jpg",
// 		artistId: 1,
// 		artist: {
// 			id: 1,
// 			name: "The Crash Test Dummies",
// 		},
// 	},
// 	{
// 		id: 2,
// 		name: "I React to State",
// 		artworkUrl: "default-album.jpg",
// 		artistId: 1,
// 		artist: {
// 			id: 1,
// 			name: "The Crash Test Dummies",
// 		},
// 	},
// ];

const Main = () => {
	const [albumList, setAlbumList] = React.useState([]);
	const [selectedAlbum, setSelectedAlbum] = React.useState({});
	React.useEffect(() => {
		if (!selectedAlbum.id) {
			const render = async () => {
				let { data } = await axios.get("/api/albums");
				setAlbumList(data);
			};
			render();
		}
	}, [selectedAlbum]);
	// console.log("the list >>>", albumList);
	// console.log(selectedAlbum);

	const clickPlay = function (audioUrl) {
		console.log(typeof audioUrl);
		const player = document.createElement("audio");
		player.setAttribute("src", audioUrl);
		player.setAttribute("preload", "auto");

		console.log("reeeeeeeeeeeeeeeeeeeeeeeeeee", player);
		player.load();
		player.play();
	};
	return (
		<div id="main" className="row container">
			<Sidebar setSelectedAlbum={setSelectedAlbum} />
			<div className="container">
				{!selectedAlbum.id ? (
					<AlbumAll albumList={albumList} setSelectedAlbum={setSelectedAlbum} />
				) : (
					<AlbumSingle selectedAlbum={selectedAlbum} clickPlay={clickPlay} />
				)}
			</div>
			<div id="player"></div>
			<Player />
		</div>
	);
};

export default Main;
