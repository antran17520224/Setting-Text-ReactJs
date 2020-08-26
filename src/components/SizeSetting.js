import React, { Component } from 'react';

class SizeSetting extends Component {

    changeSize(value){
        this.props.onChangeSize(value)
    }

    render() {
        return (
            <div className="panel-warning m-b-1">
                <div className="bg-danger p-2" style={{ color: "white" }}>Size : {this.props.fontSize} px</div>
                <div className="panel-body p-2">
                    <button
                        className="btn btn-success"
                        onClick={() => this.changeSize(2)}
                    >
                        Tăng +
                     </button>
                    <button
                        className="btn btn-success"
                        onClick={() => this.changeSize(-2)}
                    >
                        Giảm -
                    </button>
                </div>
            </div>
        );
    }
}

export default SizeSetting;
