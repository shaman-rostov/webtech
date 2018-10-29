import React from 'react';
import ReactDOM from 'react-dom';

export default class CheckboxWithLabel extends React.Component {
    constructor(props) {
        super(props);
        this.labelOn = "On";
        this.labelOff = "Off";
        this.state = {isToggleOn: false};
        this.handleChange = this.handleChange.bind(this);

    }

    handleChange() {
        this.setState(prevState => ({isToggleOn: !prevState.isToggleOn}));
    }


    render() {
        return (
                <label><input onChange={this.handleChange} type="checkbox"  />{this.state.isToggleOn ? this.labelOn : this.labelOff} </label>

        );
    }
}

ReactDOM.render(<CheckboxWithLabel />, document.getElementById('root'));