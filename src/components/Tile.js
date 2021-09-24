import HogDetail from "./HogDetail"

function Tile({name, image, specialty, weight, greased, selectedHog, setSelectedHog}) {


    const handleTileClick = () => setSelectedHog(name)

    return(
        <div onClick={handleTileClick}>
            <h2>Name: {name}</h2>
            <img src={image} alt={name}/>

            {(name === selectedHog)? <HogDetail specialty={specialty} weight={weight} greased={greased} /> : null}

        </div>

    )
}

export default Tile;