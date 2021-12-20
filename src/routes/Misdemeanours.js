const Misdemeaners = () => {
    return ( <div className="m-table">
                <div className="m-row m-header-row">
                    <div className="m-cell"><h2 className="misdemeanours-header">Citizen Id</h2></div>
                    <div className="m-cell"><h2 className="misdemeanours-header">Date</h2></div>
                    <div className="m-cell"><h2 className="misdemeanours-header">
                        Misdemeanour
                        <select>
                            <option>WTF?</option>
                        </select></h2></div>
                    <div className="m-cell"><h2 className="misdemeanours-header">Punishment Idea</h2></div>
                </div>
            </div>
    )
}

export default Misdemeaners