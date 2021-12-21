import { useContext, useState } from "react"
import ErrorMessage from "../components/ErrorMessage";
import MdmHeader from "../components/MdmHeader";
import MdmTable from "../components/MdmTable";
import { MisdemeanersContext } from "../context/MisdemeanoursContext";

const Misdemeaners = () => {

    const [misdemeanours, error] = useContext(MisdemeanersContext);
    const [filter, setFilter] = useState("");

    return ( <div className="m-table">
                <MdmHeader filter={filter} setFilter={setFilter}/>
                {error ? <ErrorMessage error={error} /> : <MdmTable misdemeanours={misdemeanours} filter={filter} />}
            </div>
    )
}

export default Misdemeaners