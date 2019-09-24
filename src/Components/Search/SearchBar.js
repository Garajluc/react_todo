import React, { Component } from 'react';

class SearchBar extends Component {

    handleChange = (e) => {
        const { value } = e.target;
        this.props.handleChange(value);
    }

    render() {
        return (
            <div>
                <input name='name' placeholder='Serach...' onChange={this.handleChange} />
            </div>
        )
    }
}

export default SearchBar;