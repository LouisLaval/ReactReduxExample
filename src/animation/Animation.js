import React from 'react';
import {store} from '../redux/store';
import {changeText} from '../redux/actions';

export class Animation extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        store.dispatch(changeText());
    }

    render(){
        return (
            <div>
                <button onClick={this.handleClick}>{this.props.text}</button>
            </div>
        );
    }
}