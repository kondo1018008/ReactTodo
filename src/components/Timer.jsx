import React, { Component } from 'react';
let testTimer;
class Timer extends Component { 
    
    constructor(props) {
        super(props);
        this.state = {
            min: props.min,
            sec: props.sec,
            isClick: false
        };
        this.setTimer = this.setTimer.bind();
        this.isClicked = this.isClicked.bind();
    }

    
    

    setTimer() {
        if (this.state.sec < 0 && this.state.min > 0) {
            this.state.sec = 59;
            this.state.min--;
        } else if (this.state.min === this.state.sec === 0) {
            this.state.sec = 0;
            this.state.min = 0;
            clearInterval(testTimer);
        } else {
            this.state.sec--;
        }
        this.setState({
            min: this.state.min,
            sec: this.state.sec
        });
        
    }

    isClicked() { 
        if (this.state.isClick === true) { testTimer = setInterval(this.setTimer(), 1000); }
    }
    

    render() {
        return (
            <div>
                <p className="siimple-box-title siimple--color-white">{this.state.min}:{this.state.sec}</p>
                <button type="submit" onClick={() => {
                    this.setState({ isClick: true });
                    this.isClicked();
                }}>start</button >
        </div>
                );
            }
        }
        
export default Timer;