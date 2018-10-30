import React from 'react';

export default  class Link extends React.Component {
    constructor (props) {
        super(props);
    }
    getInitialState: function() {
        return {
            hover: false
        };
    },
    onMouseEnterHandler: function() {
        this.setState({
            hover: true
        });
        console.log('enter');
    },
    onMouseLeaveHandler: function() {
        this.setState({
            hover: false
        });
        console.log('leave');
    },
    render: function() {
        var inner = normal;
        if(this.state.hover) {
            inner = hover;
        }

        return (
                <div style={inner}
                     onMouseEnter={this.onMouseEnterHandler}
                     onMouseLeave={this.onMouseLeaveHandler} >
                    {this.props.children}
                </div>
        );
    }
});

var outer = {
    height: '120px',
    width: '200px',
    margin: '100px',
    backgroundColor: 'green',
    cursor: 'pointer',
    position: 'relative'
}

var normal = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    opacity: 0
}

var hover = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'red',
    opacity: 1
}

React.render(
    <Hover></Hover>,
    document.getElementById('container')
)