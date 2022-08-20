import React from "react";

const Song = ({ song, artist, clickPlay }) => {
	return (
		<tr>
			<td>
				<i
					onClick={() => clickPlay(song.audioUrl)}
					className="fa fa-play-circle"
				/>
			</td>
			<td>{song.id}</td>
			<td>{song.name}</td>
			<td>{artist}</td>
			<td>{song.genre}</td>
		</tr>
	);
};
export default Song;
