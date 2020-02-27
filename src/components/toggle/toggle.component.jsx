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
        return(
            <div >
                {this.state.on && this.props.children}
                <button className='button' onClick={this.toggle} >&#10095;</button>
            </div>
        )
    }
}


export default Toggle;






