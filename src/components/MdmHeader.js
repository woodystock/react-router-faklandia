import { types } from "../generate_misdemeanours"

const MdmHeader = ({filter, setFilter}) => {
    return (
        <div className="m-row m-header-row">
                    <div className="m-header-cell"><br /><h2 className="m-header">Citizen Id</h2></div>
                    <div className="m-header-cell"><br /><h2 className="m-header">Date</h2></div>
                    <div className="m-header-cell">
                        <select onChange={(event) => {
                            setFilter(event.target.value)
                        }} value={filter} className="m-select">
                            <option value="">view all</option>
                            {types.map((type, index) => <option key={"type-" + index} value={type}>
                                {type}
                            </option>
                            )}
                        </select>
                        <h2 className="m-header">Misdemeanour</h2>
                    </div>
                    <div className="m-header-cell"><br /><h2 className="m-header">Punishment Idea</h2></div>
                </div>
    )
}

export default MdmHeader