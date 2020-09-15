import './style.css';
import React from 'react';

/*
function Circle(props) {
    return (
        <button className="circle" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
*/

const Circle = props => {
    return (
        <button className="circle" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

const Board = props => {
    return (
        <div className="board">
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
            <div className="row">
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
                <Circle />
            </div>
        </div>
    )
}


export default Board;
