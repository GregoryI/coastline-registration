export const SELECT_STYLE = {
  container: (provided) => ({
    ...provided,
    height: 40,
    fontSize: 18
  }),
  control: (provided, state) => ({
    ...provided,
    "border": "none",
    "borderRadius": 0,
    "borderBottom": state.isFocused ? "solid 2px #777777" : "solid 2px #d8d8d8",
    "boxShadow": "none",
    "padding": 0,
    "&:hover": {
      outline: "none",
      borderColor: "#777777"
    }
  }),
  valueContainer: (provided) => ({
    ...provided,
    padding: 0
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "#3366ff"
      : state.isFocused ? "#DEEBFF" : null
  })
};
