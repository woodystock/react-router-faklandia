import { useEffect, useState } from "react"
import MdmHeader from "../components/MdmHeader";
import MdmTable from "../components/MdmTable";
import generateMisdemeanours, { types } from "../generate_misdemeanours";

const Misdemeaners = () => {

    const [misdemeanours, setMisdemeanours] = useState([]);
    const [error, setError] = useState();
    const [filter, setFilter] = useState("");

    const fetchMisdemeanours = async () => {
        try{
            const response = await generateMisdemeanours(20);
            setMisdemeanours(response);
        }
        catch( error ) {
            setError(error);
        }
    }

    useEffect(() => {
        fetchMisdemeanours();
    }, []);

    return ( <div className="m-table">
                <MdmHeader filter={filter} setFilter={setFilter}/>
                <MdmTable misdemeanours={misdemeanours} filter={filter} />
            </div>
    )
}

export default Misdemeaners