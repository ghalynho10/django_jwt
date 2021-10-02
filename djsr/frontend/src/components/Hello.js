import React, { Component } from 'react'
import axiosInstance from '../axiosApi'

class Hello extends Component {
    state = {
        message: ""
    }

    getMessage = () => {

        axiosInstance.get('/hello/')
            .then(response => {
                const message = response.data.hello
                this.setState({ message: message })
            })
            .catch(error => {
                console.log("Error: ", JSON.stringify(error, null, 4))
                throw error
            })

    }

    componentDidMount() {
        const messageData1 = this.getMessage()
        console.log("message1: ", JSON.stringify(this.state.message, null, 4));

    }

    render() {
        return (
            <div>

            </div>
        )
    }
}

export default Hello
