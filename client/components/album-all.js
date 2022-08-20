import React from "react";
import Album from "./album";
const AlbumAll = ({ albumList, setSelectedAlbum }) => {
	return (
		<div id="albums" className="row wrap">
			{albumList.map((album) => (
				<Album
					key={album.id}
					album={album}
					setSelectedAlbum={setSelectedAlbum}
				/>
			))}
		</div>
	);
};
export default AlbumAll;
