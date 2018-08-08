import React, {Component} from 'react';

export default class NewTodoFrom extends Component
{
    constructor ()
    {
        super();
        this.state = {
            text: ''
        };

        this.onChange = this.onChange.bind(this);
        this.onKeydown = this.onKeydown.bind(this);
    }

    onChange (event) {
        this.setState({text: event.target.value});
    }

    onKeydown (event) {
        if (event.keyCode === 13 && this.state.text.length > 0) {
            this.props.onUpdateDataSource({text: this.state.text, completed: false});
            event.target.value = '';
            this.setState({text: ''});
        }
    }

    render ()
    {
        return (
            <div>
                <input
                    type="text"
                    className="form-control form-control-lg"
                    placeholder={'Input something...'}
                    onChange={this.onChange}
                    onKeyDown={this.onKeydown} />
                <br/>
            </div>
        );
    }

}