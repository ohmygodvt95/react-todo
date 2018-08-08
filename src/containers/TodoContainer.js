import React, {Component} from 'react';
import TodoList from '../components/TodoList';
import NewTodoFrom from "../components/NewTodoFrom";
import axios from 'axios';
import {API} from '../Constants'

export default class TodoContainer extends Component {


    constructor ()
    {
        super();

        this.state = {
            list: []
        };

        this.onUpdateDataSource = this.onUpdateDataSource.bind(this);
        this.onRemoveTodo = this.onRemoveTodo.bind(this);
    }

    componentDidMount () {
        axios.get(API)
            .then((res) => {
                this.setState({list: res.data});
            });
    }

    onUpdateDataSource (todo) {
        axios.post(API, todo)
            .then((res) => {
                this.state.list.push(res.data);
                this.forceUpdate()
            });
    }

    onRemoveTodo (id = null) {

        const remainder = this.state.list.filter((todo) => {
            if(todo.id !== id) return todo;
        });

        axios.delete(API + id)
            .then((res) => {
                this.setState({list: remainder});
            })
    }

    render ()
    {
        return (
            <div>
                <NewTodoFrom onUpdateDataSource={this.onUpdateDataSource} />
                <TodoList list={this.state.list} onRemoveTodo={this.onRemoveTodo} />
            </div>
        );
    }

}