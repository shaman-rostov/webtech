import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';


class Link extends React.Component {
    constructor (props) {
        super(props);
        this.state={isHovered:false};

    }
    onMouseEnterHeandler (){
        this.setState ({isHovered: true});
    }
    onMouseLeaveHeandler (){
        this.setState ({isHovered: false});
    }

    render (){
        var inner = "normal";
        if (this.state.isHovered) {inner="hovered"};
        return (
            <a className={inner}
               onMouseOver={this.onMouseEnterHeandler}
               onMouseOut={this.onMouseLeaveHeandler} > </a>
        )};

}

render(<Link>Facebook </Link>, document.getElementById('root'));
