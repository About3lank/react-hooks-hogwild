function ShowGreased({showGreased, setShowGreased}) {
    
    const handleGreaseClick = () => {
		if (showGreased === 'all') {
			setShowGreased('greased')
		} else {
            setShowGreased('all')
        }
	}

    return(
        <button onClick={handleGreaseClick}>{showGreased === 'all'? 'Show ONLY Greasy Hogs': 'Show ALL Hogs'}</button>


    )
}

export default ShowGreased;