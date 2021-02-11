import React from "react"

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
        
    }
    
    increment(){
        console.log("Increment")
        this.setState(prev => {
            return {
                count : prev.count + 1
            }
        })
    }
    reset(){
        console.log("Reset!")
        this.setState({ count : 0 })
    }
    decrement(){
        console.log("Decrement!")
        this.setState(prev => {
            return {
                count : prev.count - 1
            }
        })
    }
    
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick = {this.increment}>Increment!</button>
                <button onClick = {this.decrement}>Decrement!</button>
                <button onClick = {this.reset}>Reset!</button>
            </div>
        )
    }
}

export default App
