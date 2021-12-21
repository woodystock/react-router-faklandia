import { useContext } from "react"

import { MisdemeanersContext } from "../../context/MisdemeanoursContext"

const HomeStats = () => {

    const [misdemeanours] = useContext(MisdemeanersContext)

    const getLastConfession = () => {
        if(misdemeanours.length === 0)
            return "";

        for( var i = misdemeanours.length - 1; i >= 0; i--)
        {
            if(misdemeanours[i].confession)
                return misdemeanours[i].confession;
        }

        return "";
    }

    return <div className="stats-container">
        <p className="stats-text">Total Misdemeanours: {misdemeanours.length} </p>
        <p className="stats-text">Most recent confession: </p>{getLastConfession()}
    </div>
}
export default HomeStats