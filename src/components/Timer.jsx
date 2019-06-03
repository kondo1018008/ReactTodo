import React, {Component}from 'react';


class Timer extends Component { 
    constructor(props) { 
        super(props);
        this.state = {
            count: 0.0
        };
        this.countUp = this.countUp.bind(this);
    }
    printTime() { 
        
        this.state.count += 0.001;
        this.setState({
            count: this.state.count
        });
    }
    countUp() { 
        // eslint-disable-next-line no-undef
        setInterval(printTime,1);
    }

    render() { 
        return (<div>
            <h1>Timer</h1>
            <button onClick={this.countUp}>Start</button>
            <p>{this.state.count}</p>
        </div>);
    }
}


export default Timer;