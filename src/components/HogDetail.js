function HogDetail({specialty, weight, greased}) {
    return(
        <>
            <p>Specialty: {specialty}</p>
            <p>Weight: {weight}</p>
            <p>{greased? "Slippery pig!" : "This pig is dry as a bone..."}</p>
        </>


    )
}

export default HogDetail;