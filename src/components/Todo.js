import React, {Component} from 'react';

export default class Todo extends Component
{
    constructor (props)
    {
        super(props);
        this.onCompleted = this.onCompleted.bind(this);
    }

    onCompleted () {
        this.props.todo.completed = !this.props.todo.completed;
        this.forceUpdate();
    }

    render ()
    {
        return (
            <li className="list-group-item">
                <div className="custom-control custom-checkbox">
                    <input
                        type="checkbox" checked={this.props.todo.completed}
                        className="custom-control-input"
                        name={this.props.todo.id}
                        id={this.props.todo.id}
                        onChange={this.onCompleted}/>
                        <label className={`custom-control-label ${this.props.todo.completed ? 'completed' : ''}`}
                               htmlFor={this.props.todo.id}>{this.props.todo.text}</label>
                    <i className="fa fa-fw fa-trash text-danger pull-right down"
                       onClick={() => {this.props.onRemoveTodo(this.props.todo.id)}}></i>
                </div>
            </li>
        );
    }

}