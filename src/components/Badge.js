import React from 'react';
import {BugStatusEnum, bugStatus} from '../definitions.js';

export default class Badge extends React.Component {
    render() {
        let className = 'bug-badge';
        if (this.props.status === BugStatusEnum.Opened) {
            className += ' opened';
        } else if (this.props.status === BugStatusEnum.Resolve) {
            className += ' resolved';
        }
        return (
            <span className={className}>{bugStatus[this.props.status]}</span>
        );
    }
}