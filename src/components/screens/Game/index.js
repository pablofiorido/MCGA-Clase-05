import './style.css';
import React from 'react';

function Circle(props) {
    return (
        <div className="board">
            <div className="row">
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>

            </div>
            <div className="row">
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>

            </div>
            <div className="row">
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>

            </div>
            <div className="row">
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>

            </div>
            <div className="row">
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>

            </div>
            <div className="row">
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>
                <button className="circle" onClick={props.onClick}>{props.value}</button>

            </div>
        </div>
    )
}



export default Circle;
