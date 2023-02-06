const SpeedContainer = () => {
    return (
        <div style={{marginTop: 20}}>
            <p className='header'>2. Choose the maxium speed from the below options:</p>

            {/* Basically One Text Field followed by radio button more than, smaller than, exact
            Once that is done. Check on 50 and 200 range for more than and smaller than respectively
            Then, in the query string it should go as: greater than 50 => 51-200
            smaller than 200 => 50-199, exact 50 => 50 */}
        </div>
    )
}

export default SpeedContainer;