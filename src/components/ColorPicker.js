import React, { Component } from 'react';

class ColorPicker extends Component {

    constructor(props) {
        super(props);
        this.state = {
            colors: ['red', 'green', 'blue', '#ccc'],
        }
    }

    showColor(color) {
        if (this.props.color === color) {

        }
        return {
            backgroundColor: color,
        }
    }

    setActiveColor(color){
        this.props.onReceiveColor(color)
    }
    render() {

        let elmColors = this.state.colors.map((color, index) => {
            return <span
                key={index}
                style={this.showColor(color)}
                className={ this.props.color === color ? 'active' : ''}
                onClick={ () => this.setActiveColor(color) }
                >
            </span>
        })

        return (
            <div className="col-md-6">
                <div className="panel-primary" style={{color : "white" }}>
                    <div className="bg-primary p-2">Color</div>
                    <div className="panel-body p-3">
                        {elmColors}
                    </div>
                </div>
            </div>
        );
    }
}

export default ColorPicker;
