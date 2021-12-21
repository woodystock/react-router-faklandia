import { types } from "../generate_misdemeanours";

export const validateFormData = (formData) => {
    return (
        validateSubject( formData.subject) &&
        validateReason( formData.reason ) &&
        validateConfession( formData.confession)
    );
}

const validateSubject = (subject) => subject !== "";

const validateReason = (reason) => reason !== "talk" && types.includes(reason)

const validateConfession = (confession) => confession.length >= 20

