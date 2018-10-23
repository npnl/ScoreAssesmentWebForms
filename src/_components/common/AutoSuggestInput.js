import React, { Component}  from 'react';
import { connect }  from 'react-redux';
import Autosuggest from 'react-autosuggest';
import { subjectActions } from '../../_actions'

const NO_SUBJECTS = 'No subject with this name. New subject will be created';

class AutoSuggestInput extends React.Component {
    constructor() {
      super();

      // Autosuggest is a controlled component.
      // This means that you need to provide an input value
      // and an onChange handler that updates this value (see below).
      // Suggestions also need to be provided to the Autosuggest,
      // and they are initially empty because the Autosuggest is closed.
      this.state = {
        value: '',
        suggestions: []
      };
    }

    componentDidMount() {
      this.props.dispatch(subjectActions.getAllSubjects(''));
    }

    onChange = (event, { newValue }) => {
      if (newValue === NO_SUBJECTS){
        return;
      }
      this.setState({
        value: newValue
      });
      this.props.onChange(newValue);
    };

    // Autosuggest will call this function every time you need to update suggestions.
    // You already implemented this logic above, so just use it.
    onSuggestionsFetchRequested = ({ value }) => {
      this.setState({
        suggestions: this.getSuggestions(value)
      });
    };

    // Teach Autosuggest how to calculate suggestions for any given input value.
    getSuggestions = value => {
      const { subject_array } = this.props;
      const inputValue = value.trim().toLowerCase();
      const inputLength = inputValue.length;

      var matched_subjects = (inputLength === 0 || subject_array.length === 0) ? [] : subject_array.filter(lang =>
          lang.subject_name.toLowerCase().slice(0, inputLength) === inputValue
        );
      if (matched_subjects.length === 0){
        return [{subject_name: NO_SUBJECTS}]
      }
      else {
        return matched_subjects;
      }
    };

    // Use your imagination to render suggestions.
    renderSuggestion = suggestion => (
      <div className="suggestion-popup">
        {suggestion.subject_name}
      </div>
    );

    // When suggestion is clicked, Autosuggest needs to populate the input
    // based on the clicked suggestion. Teach Autosuggest how to calculate the
    // input value for every given suggestion.
    getSuggestionValue = suggestion => suggestion.subject_name;



  // Autosuggest will call this function every time you need to clear suggestions.
    onSuggestionsClearRequested = () => {
      this.setState({
        suggestions: []
      });
    };

    render() {
      const { value, suggestions } = this.state;
      const { subject_array } = this.props;
      // Autosuggest will pass through all these props to the input.
      const inputProps = {
        placeholder: 'Type a subject name',
        value,
        onChange: this.onChange
      };

      // Finally, render it!
      return (
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          inputProps={inputProps}
        />
      );
    }
}

function mapStateToProps(state) {
  const { subjects } = state;
  const { subject_array } = subjects;
  return { subject_array };
}

const connectedAutoSuggestInput = connect(mapStateToProps)(AutoSuggestInput);
export { connectedAutoSuggestInput as AutoSuggestInput };
