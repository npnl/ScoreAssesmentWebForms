import _ from "lodash";
import React from "react";
import PropTypes from "prop-types";

const TitleBar = ({title}) => {
  return <div className="title row top-row"><span>{title}</span></div>;
};

const SearchBox = ({inputs, buttonText, placeholder, updateInput, onSubmit}) => {
  const inputName = "searchString";
  const value = _.get(inputs, inputName, "");
  return (<div className="search-box">
    <input name={inputName} className="search-text" type="text" value={value} onChange={updateInput} placeholder={placeholder || "Search"}/>
    <button type="submit" className="search-button btn btn-default">{buttonText || "Search"}</button>
  </div>);
};

SearchBox.propTypes = {
  inputs: PropTypes.object.isRequired,
  updateInput: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  buttonText: PropTypes.string
};

export default  {
  TitleBar: TitleBar,
  SearchBox: SearchBox
};