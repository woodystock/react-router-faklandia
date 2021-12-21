import { useState, useContext } from "react";
import ConfessForm from "../components/confess/ConfessForm"
import { rand } from "../generate_misdemeanours";
import { MisdemeanersContext } from "../context/MisdemeanoursContext"

const Confess = () => {
    
    const [misdemeanours, setMisdemeanours] = useContext( MisdemeanersContext );

    const [formData, setFormData] = useState({
        subject:"",
        reason:"",
        confession:""
    });


    const onSubmitFormHandler = (formData) => {
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
            
            setFormData({
                subject:"",
                reason:"",
                confession:""
            });
        }
    }

    return ( <div className="confess__container">
        <h3 className="confess-info">It is very difficult to catch people committing misdemeanours so we appreciate it when citizens confess to us directly.</h3>
        <h3 className="confess-info">However, if you are just having a hard day and need to vent, then you're welcome to contact us here too. Up to you!</h3>
        
        <ConfessForm formData={formData} setFormData={setFormData} onSubmit={onSubmitFormHandler}/>
    
    </div>)
}

export default Confess