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

    const validateFormData = () => {
        if( formData.subject === "" )
            return false;

        if( formData.reason === "")
            return false;
        
        if( formData.confession.length < 50)
            return false;
        
        return true;
    } 


    const inputChangeHandler = (event) => {
        console.log("change")
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData }
            updatedFormData[event.target.id] = event.target.value;
            return updatedFormData
        });
    }


    return <div className="confess-form">
                <ConfessSubjectInput value={formData.subject} onChangeHandler={inputChangeHandler}/>
                <ConfessReasonCombo value={formData.reason} onChangeHandler={inputChangeHandler}/>
                <ConfessionInput value={formData.confession} onChangeHandler={inputChangeHandler}/>
                <button disabled={! validateFormData()} className="form-button">Confess</button>
            </div>
}

export default ConfessForm