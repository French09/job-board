const DescriptionFormRow = ({ name, labelText, defaultValue }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <textarea
        id={name}
        name={name}
        className="form-textarea"
        defaultValue={defaultValue || ""}
        required
      />
    </div>
  );
};

export default DescriptionFormRow;
