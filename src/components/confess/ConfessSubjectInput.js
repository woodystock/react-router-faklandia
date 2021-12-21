const ConfessSubjectInput = ({value, onChangeHandler}) => <div className="input-container">
    <label className="input-text" htmlFor="subject">Subject:</label>
    <input 
        className="input-text input-box"
        id="subject" 
        type="text" 
        value={value} 
        onChange={onChangeHandler}>
    </input>
</div>

export default ConfessSubjectInput