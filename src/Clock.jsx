import React, { Component } from 'react'

class Clock extends Component {
    constructor(props) {
        super(props)
        this.state = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.timeUpdate(this.props.deadline)
    }

    componentDidMount() {
        setInterval(() => { this.timeUpdate(this.props.deadline) }, 1000)
    }

    timeUpdate(deadline) {
        const time = Date.parse(deadline) - Date.parse(new Date())
        const seconds = Math.floor((time/1000)%60)
        const minutes = Math.floor((time/1000/60)%60)
        const hours = Math.floor((time/1000/60/24)%60)
        const days = Math.floor((time/1000/60/60/24))

        if(time > 0) this.setState({days, hours, minutes, seconds})
    }

    twoDigits(number) {
        return number < 10 ? '0' + number : number
    }
    
    render() {
        return (
            <div className="d-flex flex-sl-row flex-lg-row flex-md-row flex-column justify-content-center">
                <h4 className="p-2">{ this.twoDigits(this.state.days) } days</h4>
                <h4 className="p-2">{ this.twoDigits(this.state.hours) } hours</h4>
                <h4 className="p-2">{ this.twoDigits(this.state.minutes) } minutes</h4>
                <h4 className="p-2">{ this.twoDigits(this.state.seconds) } seconds</h4>
            </div>
        )
    }
}

export default Clock