const ConfessionInput = ({value, onChangeHandler}) => <div>
    <textarea
        id="confession"
        className="input-text input-textarea"
        rows="5"
        value={value}
        onChange={onChangeHandler}>
    </textarea>
</div>

export default ConfessionInput