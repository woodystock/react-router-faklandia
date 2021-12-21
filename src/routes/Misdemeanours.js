import { useContext, useState } from "react"
import ErrorMessage from "../components/misdemeanours/ErrorMessage";
import MdmHeader from "../components/misdemeanours/MdmHeader";
import MdmTable from "../components/misdemeanours/MdmTable";
import { MisdemeanersContext } from "../context/MisdemeanoursContext";

const Misdemeaners = () => {

    const [misdemeanours, setMisdemeanours, error] = useContext(MisdemeanersContext);
    const [filter, setFilter] = useState("");

    return ( <div className="m-table">
                <MdmHeader filter={filter} setFilter={setFilter}/>
                {error ? <ErrorMessage error={error} /> : <MdmTable misdemeanours={misdemeanours} filter={filter} />}
            </div>
    )
}

export default Misdemeaners