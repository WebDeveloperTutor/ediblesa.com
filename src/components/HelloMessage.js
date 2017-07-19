/* global React */

const { Component } = React
import { hello, goodbye } from "../lib"

export class HelloMessage extends Component {
    render() {
        return (
            <div>
                {hello}
                {goodbye}
            </div>
        )
    }
}