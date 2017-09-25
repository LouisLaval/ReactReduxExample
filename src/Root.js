import React from 'react';
import {AnimationMapping} from './redux/mapping';

export class Root extends React.Component{
    render(){
        return (
            <div>
                <h1>Test</h1>
                <AnimationMapping/>
            </div>
        );
    }
}