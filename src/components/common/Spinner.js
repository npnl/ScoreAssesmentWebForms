var React        = require('react');
var SpinnerStore = require('../../stores/SpinnerStore.js');

class Spinner extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render() {
    if( this.props.show ){
      return (
      <div id="overlay">
        <div className="spinner"></div>
      </div>
      );
    }
    return null;
  }
}

module.exports = Spinner;
