import React from "react";
import Album from "./album";
import Song from "./songs";
const AlbumSingle = ({ selectedAlbum, clickPlay }) => {
	// console.log("imtrying to load you", selectedAlbum);
	return (
		<div id={selectedAlbum.id} className="column">
			<Album album={selectedAlbum} />
			<table id="songs">
				<tbody>
					<tr className="gray">
						<td />
						<td>#</td>
						<td>Name</td>
						<td>Artist</td>
						<td>Genre</td>
					</tr>
					{selectedAlbum.songs.map((song) => (
						<Song
							clickPlay={clickPlay}
							key={song.id}
							song={song}
							artist={selectedAlbum.artist.name}
						/>
					))}
				</tbody>
			</table>
		</div>
	);
};
export default AlbumSingle;
