import React from 'react';
import {BugStatusEnum, actionText} from '../definitions.js';

export default class ActionButton extends React.Component {
    render() {
        let className = 'action-btn';
        if (this.props.status === BugStatusEnum.Opened) {
            className += ' resolve';
        } else if (this.props.status === BugStatusEnum.Resolve) {
            className += ' reopen';
        }
        return (
            <button className={className} onClick={this.props.actionCallback}>{actionText[this.props.status]}</button>
        );
    }
}