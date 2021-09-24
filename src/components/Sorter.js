function Sorter({setSortType}) {
    const handleSortChange = (e) => setSortType(e.target.value)

    return(
        <>
            <select onChange={handleSortChange}>
                <option value='default'>Default</option>
                <option value='name'>Name</option>
                <option value='weight'>Weight</option>
            </select>
        </>

    )
}

export default Sorter;