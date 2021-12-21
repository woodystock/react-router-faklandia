import { useContext, useState } from "react";
import { MisdemeanersContext } from "../../context/MisdemeanoursContext";
import { rand, types } from "../../generate_misdemeanours"
import ConfessionInput from "./ConfessionInput";
import ConfessReasonCombo from "./ConfessReasonCombo";
import ConfessSubjectInput from "./ConfessSubjectInput";

const ConfessForm = () => {

    const [misdemeanours, setMisdemeanours] = useContext( MisdemeanersContext );

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
        
        if( formData.confession.length < 20)
            return false;
        
        return true;
    } 


    const inputChangeHandler = (event) => {
        setFormData((prevFormData) => {
            const updatedFormData = { ...prevFormData }
            updatedFormData[event.target.id] = event.target.value;
            return updatedFormData
        });
    }

    const confessSubmitHandler = (event) => {
        event.preventDefault();
        if(formData.reason === "talk")
            console.log(formData);
        else {
            setMisdemeanours((prevMisdemeanours) => {
                const misdemeanour = {
                    citizenId: Math.floor((rand(37) * rand(967))),
                    misdemeanour: formData.reason,
                    date: new Date().toLocaleDateString(),
                    confession: formData.subject + " - " + formData.confession
                }
                return [...prevMisdemeanours, misdemeanour]
            })

            
        }
        

        setFormData({
            subject:"",
            reason:"",
            confession:""
        });
    }


    return <div className="confess-form">
                <form onSubmit={confessSubmitHandler}>
                    <ConfessSubjectInput value={formData.subject} onChangeHandler={inputChangeHandler}/>
                    <ConfessReasonCombo value={formData.reason} onChangeHandler={inputChangeHandler}/>
                    <ConfessionInput value={formData.confession} onChangeHandler={inputChangeHandler}/>
                    <button 
                        disabled={! validateFormData()} 
                        className="form-button"
                        type="submit">
                            Confess
                        </button>
                </form>
            </div>
}

export default ConfessForm