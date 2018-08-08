import React, {Component} from 'react';
import Todo from './Todo';
import * as _ from 'lodash';

export default class TodoList extends Component
{
    constructor (props)
    {
        super(props);
    }

    render ()
    {
        return (
           <div>
               <ul className="list-group">
                   {
                       this.props.list.map((todo, index) => {
                           if (todo) {
                               return <Todo key={index} todo={todo} onRemoveTodo={this.props.onRemoveTodo}/>
                           } else {
                               return '';
                           }

                       })
                   }
               </ul>
           </div>
        );
    }

}