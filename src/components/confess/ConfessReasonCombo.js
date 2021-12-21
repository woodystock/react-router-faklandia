import { types } from "../../generate_misdemeanours";

const ConfessReasonCombo = ({value}) => <div className="input-container">
    <label className="input-text" htmlFor="reason">Reason for Contact: </label>
    <select className="input-text input-box" id="reason" value={value}>
        <option hidden disabled value="">Select</option>
        <option key="reason-talk">Talk</option>
        {types.map((type, index) => <option key={"reason-" + index} value={type}>{type}</option>)}
    </select>
</div>

export default ConfessReasonCombo;