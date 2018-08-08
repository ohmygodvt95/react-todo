import React, {Component} from 'react';
import TodoContainer from './containers/TodoContainer';

export default class App extends Component {
    render () {
        return (
            <div>
                <TodoContainer/>
            </div>
        );
    }
}