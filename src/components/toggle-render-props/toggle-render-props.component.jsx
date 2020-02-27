import React from 'react';

class Toggle extends React.Component {
    constructor() {
        super();

        this.state = {
            on: false
        }
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }


    render() {
        const { render } = this.props;
        return (
            <div >{render()}</div>
        )
    }
}
// >&#10095;

export default Toggle;






