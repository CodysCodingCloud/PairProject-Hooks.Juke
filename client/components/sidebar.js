import React from "react";
const Sidebar = ({ setSelectedAlbum }) => {
	const onClick = () => {
		setSelectedAlbum({});
	};
	return (
		<div id="sidebar">
			<img alt="juke" src="juke.svg" id="logo" />
			<section>
				<h4>
					<a onClick={onClick}>ALBUMS</a>
				</h4>
			</section>
		</div>
	);
};
export default Sidebar;
