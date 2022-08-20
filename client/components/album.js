import React from "react";
import axios from "axios";
const Album = ({ album, setSelectedAlbum }) => {
	const onClick = async function (e) {
		let { data } = await axios.get(`/api/albums/${e.target.parentElement.id}`);
		setSelectedAlbum(data);
	};
	return (
		<div className="album">
			<a onClick={onClick} id={album.id}>
				<img alt={album.name} src={album.artworkUrl} />
				<p>{album.name}</p>
				<small>{album.artist.name}</small>
			</a>
		</div>
	);
};
export default Album;
