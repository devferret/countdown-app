import React from 'react'
import './App.css'
import Clock from './Clock'
import dateFormat from 'dateformat'
import { InputGroup, Input, InputGroupButton } from 'reactstrap'

class App extends React.Component {
    state = {
        deadline: '',
        newDeadline: ''
    }

    componentWillMount() {
        const today = new Date()
        this.setState({
            deadline: dateFormat(new Date(today.getTime() + (7*24*60*60*1000)), "mmmm dd, yyyy")
        })
    }

    changeDeadline() {
        const time = Date.parse(this.state.newDeadline) - Date.parse(new Date())
        if (time > 0) {
            this.setState({
                deadline: this.state.newDeadline
            })
        }
        this.setState({
            newDeadline: ''
        })
    }

    render() {
        return (
            <div className="App">
                <h1 className="p-4">Countdown to { this.state.deadline }</h1>
                <Clock deadline={ this.state.deadline }/>
                <div className="d-inline-flex p-4">
                    <InputGroup>
                        <Input 
                            onChange={ event => { this.setState({ newDeadline: event.target.value }) } } 
                            type="text" 
                            placeholder="Type new date"
                            value={this.state.newDeadline} />
                        <InputGroupButton color="info" onClick={ () => { this.changeDeadline() } }>Update</InputGroupButton>
                    </InputGroup>
                </div>
            </div>
        )
    }
}

export default App