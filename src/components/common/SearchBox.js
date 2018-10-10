var React       = require('react');

class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.props = props;
  }

  render(){
    return(
      <form onSubmit={this.props.handleSubmit} style={{display: 'flex'}}>
        <input type="text" placeholder={this.props.placeholder} value={this.props.searchString} onChange={this.props.handleChange} className="input-sm form-control"/>
        <input type="button" onClick={this.props.handleSubmit} value={this.props.buttonLabel} className="btn btn-sm btn-default" />
      </form>
    );
  }
}

export default  SearchBox;
