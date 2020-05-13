import React from 'react';
import {bugStatus} from '../definitions.js';

export default class Badge extends React.Component {
    render() {
        console.log(this.props.status);
        let className = 'bug-badge';
        if (this.props.status === 0) {
            className += ' opened';
        } else if (this.props.status === 1) {
            className += ' resolved';
        }
        return (
            <span className={className}>{bugStatus[this.props.status]}</span>
        );
    }
}