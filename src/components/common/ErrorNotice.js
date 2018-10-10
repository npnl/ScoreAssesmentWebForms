var React       = require('react');
var ErrorStore  = require('../../stores/ErrorStore.js');

class ErrorNotice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: ErrorStore.getErrors()
    };
  }

  componentDidMount() {
    ErrorStore.addChangeListener(this.onChange);
  }

  componentWillUnmount() {
    ErrorStore.removeChangeListener(this.onChange);
  }

  onChange() {
    this.setState({
      errors: ErrorStore.getErrors()
    });
  }

  resetErrors() {
    ErrorStore.resetErrors();
  }

  render() {
    return (
      <div className={this.state.errors.length > 0 ? 'error-notice' : 'hide'}>
        <div className='pull-right' style={{cursor: 'pointer'}} onClick={this.resetErrors}>X</div>
        <p style={{padding: '1%'}}><strong>Error!</strong></p>
        {this.state.errors.map(function(error, index) {
          if (error.message) {
            return <p className='error-message' key={'error_'+index}>{error.message}</p>;
          } else {
            return <p className='error-message' key={'error_'+index}>{error}</p>;
          }
        })}
      </div>
    );
  }
}

export default  ErrorNotice;

