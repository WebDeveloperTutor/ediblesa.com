/* global ReactDOM */

const { render } = ReactDOM
import { HelloMessage } from "./components/HelloMessage"

render (
    <HelloMessage />,
    document.getElementById("react-container")
)
