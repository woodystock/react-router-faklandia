import { useState } from "react";
import { types } from "../../generate_misdemeanours";
import { validateFormData } from "../../validation/form_validation";
import ConfessionInput from "./ConfessionInput";
import ConfessReasonCombo from "./ConfessReasonCombo";
import ConfessSubjectInput from "./ConfessSubjectInput";

const ConfessForm = ({formData, setFormData, onSubmit}) => {

    const inputChangeHandler = (event) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData }
            updatedFormData[event.target.id] = event.target.value;
            return updatedFormData
        });
    }

    const confessSubmitHandler = (event) => {
        event.preventDefault();
        
        onSubmit(formData);
    }


    return <div className="confess-form">
                <form onSubmit={confessSubmitHandler}>
                    <ConfessSubjectInput value={formData.subject} onChangeHandler={inputChangeHandler}/>
                    <ConfessReasonCombo value={formData.reason} onChangeHandler={inputChangeHandler}/>
                    <ConfessionInput value={formData.confession} onChangeHandler={inputChangeHandler}/>
                    <button 
                        disabled={! validateFormData(formData)} 
                        className="form-button"
                        type="submit">
                            Confess
                        </button>
                </form>
            </div>
}

export default ConfessForm