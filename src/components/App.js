import React from "react";
import { useState } from "react";

import Nav from "./Nav";
import ShowGreased from "./ShowGreased";
import Tile from "./Tile"
import Sorter from "./Sorter";

import hogs from "../porkers_data";

function App() {

	const [selectedHog, setSelectedHog] = useState(null)
	const [showGreased, setShowGreased] = useState('all')
	const [sortType, setSortType] = useState('default')

	const hogList = hogs
	.filter(hog => (showGreased === 'all') || (hog.greased))
	// .sort((hogA, hogB) => (hogA.name > hogB.name) ? 1 : -1)
	.map((hog) => (<Tile name={hog.name} image={hog.image} specialty={hog.specialty} weight={hog.weight} greased={hog.greased} selectedHog={selectedHog} setSelectedHog={setSelectedHog}/>))

	return (
		<div className="App">
			<Nav />
			<Sorter setSortType={setSortType}/>
			<ShowGreased showGreased={showGreased} setShowGreased={setShowGreased} />
			{hogList}

			

		</div>
	);
}

export default App;
