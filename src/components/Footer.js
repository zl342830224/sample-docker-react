import React, { Component } from 'react'

class Footer extends Component {
    render () {
        return (
            <footer>
                <span>
                    <strong>0</strong> item left
                </span>
                <ul>
                    <li>
                        <span>All</span>
                    </li>
                    <li>
                        <span>Active</span>
                    </li>
                    <li>
                        <span>Completed</span>
                    </li>
                </ul>
                <button>Clear Completed</button>
            </footer>
        )
    }
}

export default Footer