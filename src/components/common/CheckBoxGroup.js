var React = require('react');

class CheckBoxGroup extends React.Component {

  onChange (event){
    this.props.onChange(event);
  }

  render() {
    return (
      <div style={{display: 'inline-flex'}}>
        {this.props.values.map(function(value, index){
          return (
            <div key={this.props.name + '_checkbox_' + index}>
              <input type='checkbox' name={this.props.name} onChange={this.props.onChange} value={value} checked={this.props.valuesInState.indexOf(value) > -1} />
              <span>{this.props.labels[index]}</span>
            </div>
          );
        }, this)}
      </div>
    );
  }
}

export default  CheckBoxGroup;
