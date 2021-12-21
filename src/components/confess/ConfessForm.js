import { useState } from "react";
import { types } from "../../generate_misdemeanours"
import ConfessionInput from "./ConfessionInput";
import ConfessReasonCombo from "./ConfessReasonCombo";
import ConfessSubjectInput from "./ConfessSubjectInput";

const ConfessForm = () => {

    const [formData, setFormData] = useState({
        subject:"",
        reason:"",
        confession:""
    });


    return <div className="confess-form">
                <ConfessSubjectInput />
                <ConfessReasonCombo value={formData.reason}/>
                <ConfessionInput />
                <button className="form-button">Confess</button>
            </div>
}

export default ConfessForm