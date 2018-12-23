export const SELECT_STYLE = {
  container: (provided) => ({
    ...provided,
    height: 40,
    fontSize: 20
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
  valueContainer: (provided, s) => ({
    ...provided,
    padding: 0
  })
};
