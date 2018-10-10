var React = require('react');


class LabelTextBox extends React.Component {

    _displayRequired() {
        if (this.props.isRequired) {
            return (
                <span className="required-asterisk">*</span>
            );
        }
        return null;
    }
    
    _className() {
        return this.props.selectable ? "form-control" : "form-control no-copy"
    }

    render() {
        return (
            <div className="form-group" >
                <label className="col-md-3 control-label">
                    {this.props.label}
                    {this._displayRequired()}
                </label>
                <div className="col-md-6">
                    <input
                      disabled={this.props.disabled}
                      className={this._className()}
                      type={this.props.type}
                      value={this.props.value}
                      onChange={(e) => this.props.onTextChanged(e.target.value)}
                      maxLength={this.props.maxLength}
                      placeholder={this.props.placeholder || this.props.label}
                    />
                </div>
            </div>
        );
    }
}

LabelTextBox.defaultProps = {
    value: '',
    disabled: false,
    label: '',
    maxLength: 50,
    onTextChanged: () => { },
    isRequired: false,
    type: 'text',
    selectable: true
}

export default  LabelTextBox;