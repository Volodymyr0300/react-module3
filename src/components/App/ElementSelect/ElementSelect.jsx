import { useId } from "react";

const ElementSelect = ({ value, onSelect }) => {
  const selectId = useId();

  return (
    <div>
      <label htmlFor={selectId}>Choose language</label>
      <select
        id={selectId}
        value={value}
        onChange={(evt) => onSelect(evt.target.value)} // or evt.target.elements.selectName.value
      >
        <option value="en">English</option>
        <option value="uk">Ukrainian</option>
        <option value="pl">Polish</option>
      </select>
    </div>
  );
};

export default ElementSelect;
