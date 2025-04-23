import Switch from "react-switch";

const MyToggle = ({ isActive, handleChange, checked }) => {
  return (
    <div className="example">
      <label>
        <Switch
          onChange={handleChange}
          checked={isActive ? true : false}
          className="react-switch"
          uncheckedIcon={false}
          checkedIcon={false}
          onColor="#f45e4f"
        />
      </label>
    </div>
  );
};

export default MyToggle;
